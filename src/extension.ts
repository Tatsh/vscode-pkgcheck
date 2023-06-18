import execa from "execa";
import { dirname } from "path";
import { flatten, groupBy, head, keys, map, values } from "ramda";
import * as vscode from "vscode";

import {
  CategoryPackageVersionSeverity,
  CategoryPackageVersionSeverityMerged,
} from "./types";

const cpvToMerged = (
  rawDiag: CategoryPackageVersionSeverity[]
): CategoryPackageVersionSeverityMerged => {
  const messages = groupBy(
    (obj) => head(keys(obj)),
    flatten(map(values, flatten(map(values, flatten(map(values, rawDiag))))))
  );
  const merged: CategoryPackageVersionSeverityMerged = {};
  keys(messages).forEach((key) => (merged[key] = []));
  for (const key of keys(messages)) {
    merged[key].push(flatten(messages[key].map(values)) as any);
  }
  return merged;
};

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  //console.log('Congratulations, your extension "pkgcheck" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "pkgcheck.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from pkgcheck!");
    }
  );

  context.subscriptions.push(disposable);

  vscode.workspace.onDidOpenTextDocument(
    async (textDocument: vscode.TextDocument) => {
      const realEbuildPath = JSON.parse(textDocument.uri.query || "{}").path;
      if (
        !realEbuildPath ||
        !!vscode.languages.match(["shellscript"], textDocument) ||
        !realEbuildPath.endsWith(".ebuild")
      ) {
        return;
      }
      // const rootDir = await realpath(`${dir}/../..`);
      const r = await execa("pkgcheck", ["scan", "-R", "JsonReporter"], {
        cwd: dirname(realEbuildPath),
      });
      if (r.exitCode !== 0) {
        console.error("@@ error", r);
        return;
      }
      const merged = cpvToMerged(
        JSON.parse(
          `[${r.stdout.split("\n").join(",")}]`
        ) as CategoryPackageVersionSeverity[]
      );
      console.log(merged);
    },
    undefined,
    context.subscriptions
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
