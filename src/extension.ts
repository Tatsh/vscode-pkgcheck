import execa from 'execa';
import { dirname } from 'path';
import head from 'ramda/es/head';
import keys from 'ramda/es/keys';
import values from 'ramda/es/values';
import * as vscode from 'vscode';

import { CATEGORY_TO_VARIABLE_MAPPING } from './constants';
import { CategoryPackageVersionSeverity } from './types';
import { cpvToMerged, getFilePath } from './utils';

const diagnosticCollection = vscode.languages.createDiagnosticCollection('pkgcheck');

const startEndForVariableLine = (doc: vscode.TextDocument, varName: string) => {
  let startPos = new vscode.Position(0, 0);
  let endPos = new vscode.Position(0, 0);
  const re = new RegExp(`^${varName}=`);
  const quoteRe = new RegExp(`^${varName}="`);
  const col = varName.length;
  for (let l = 0; l < doc.lineCount; l++) {
    const text = doc.lineAt(l).text.trim();
    if (re.test(text)) {
      if (quoteRe.test(text)) {
        startPos = new vscode.Position(l, col + 2);
        endPos = new vscode.Position(l, col + 2);
      } else {
        startPos = new vscode.Position(l, col);
        endPos = new vscode.Position(l, col);
      }
      break;
    }
  }
  return [startPos, endPos];
};

async function getDiagnostics(
  doc: vscode.TextDocument,
  ebuildPath: string,
): Promise<vscode.Diagnostic[]> {
  const r = await execa('pkgcheck', ['scan', '-R', 'JsonReporter'], {
    cwd: dirname(ebuildPath),
  });
  if (r.exitCode !== 0) {
    console.error('@@ error', r);
    return [];
  }
  const merged = cpvToMerged(
    JSON.parse(`[${r.stdout.split('\n').join(',')}]`) as CategoryPackageVersionSeverity[],
  );
  const diagnostics = [];
  for (const error of merged._error) {
    let startPos = new vscode.Position(0, 0);
    let endPos = new vscode.Position(0, 0);
    const key = head(keys(error)) as string;
    // switch (key) {
    //   default:
    if (CATEGORY_TO_VARIABLE_MAPPING[key]) {
      [startPos, endPos] = startEndForVariableLine(doc, CATEGORY_TO_VARIABLE_MAPPING[key]);
    }
    //     break;
    // }
    const diagnostic = new vscode.Diagnostic(
      new vscode.Range(startPos, endPos),
      `${key}: ${head(values(error)) as string}`,
      vscode.DiagnosticSeverity.Error,
    );
    diagnostic.source = 'pkgcheck';
    diagnostics.push(diagnostic);
  }
  for (const info of merged._info) {
    let startPos = new vscode.Position(0, 0);
    let endPos = new vscode.Position(0, 0);
    const key = head(keys(info)) as string;
    // switch (key) {
    //   default:
    if (CATEGORY_TO_VARIABLE_MAPPING[key]) {
      [startPos, endPos] = startEndForVariableLine(doc, CATEGORY_TO_VARIABLE_MAPPING[key]);
    }
    //     break;
    // }
    const diagnostic = new vscode.Diagnostic(
      new vscode.Range(startPos, endPos),
      `${key}: ${head(values(info)) as string}`,
      vscode.DiagnosticSeverity.Information,
    );
    diagnostic.source = 'pkgcheck';
    diagnostics.push(diagnostic);
  }
  for (const style of merged._style) {
    let startPos = new vscode.Position(0, 0);
    let endPos = new vscode.Position(0, 0);
    const key = head(keys(style)) as string;
    // switch (key) {
    //   default:
    if (CATEGORY_TO_VARIABLE_MAPPING[key]) {
      [startPos, endPos] = startEndForVariableLine(doc, CATEGORY_TO_VARIABLE_MAPPING[key]);
    }
    //     break;
    // }
    const diagnostic = new vscode.Diagnostic(
      new vscode.Range(startPos, endPos),
      `${key}: ${head(values(style)) as string}`,
      vscode.DiagnosticSeverity.Hint,
    );
    diagnostic.source = 'pkgcheck';
    diagnostics.push(diagnostic);
  }
  for (const warning of merged._warning) {
    let startPos = new vscode.Position(0, 0);
    let endPos = new vscode.Position(0, 0);
    const key = head(keys(warning)) as string;
    const message = head(values(warning)) as string;
    switch (key) {
      case 'DeprecatedDep':
        [startPos, endPos] = startEndForVariableLine(doc, message.split(':', 1)[0]);
        break;

      default:
        if (CATEGORY_TO_VARIABLE_MAPPING[key]) {
          [startPos, endPos] = startEndForVariableLine(doc, CATEGORY_TO_VARIABLE_MAPPING[key]);
        }
        break;
    }
    const diagnostic = new vscode.Diagnostic(
      new vscode.Range(startPos, endPos),
      `${key}: ${message}`,
      vscode.DiagnosticSeverity.Warning,
    );
    diagnostic.source = 'pkgcheck';
    diagnostics.push(diagnostic);
  }
  return diagnostics;
}

export function activate(context: vscode.ExtensionContext) {
  vscode.workspace.onDidOpenTextDocument(
    async textDocument => {
      const ebuildPath = getFilePath(textDocument);
      if (
        !ebuildPath ||
        !!vscode.languages.match(['shellscript'], textDocument) ||
        !ebuildPath.endsWith('.ebuild')
      ) {
        return;
      }
      if (vscode.window.activeTextEditor?.document.uri) {
        try {
          diagnosticCollection.set(
            vscode.window.activeTextEditor.document.uri,
            await getDiagnostics(vscode.window.activeTextEditor.document, ebuildPath),
          );
        } catch (e) {
          console.error('@@ error calling pkgcheck');
        }
      } else {
        console.debug('No active text editor?');
      }
    },
    undefined,
    context.subscriptions,
  );
  vscode.workspace.onDidCloseTextDocument(
    doc => diagnosticCollection.delete(doc.uri),
    undefined,
    context.subscriptions,
  );
}

export function deactivate() {
  diagnosticCollection.dispose();
}
