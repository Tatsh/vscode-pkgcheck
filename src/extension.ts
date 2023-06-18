import execa from "execa";
import { dirname } from "path";
import * as vscode from "vscode";

import { CategoryPackageVersionSeverity } from "./types";
import { cpvToMerged } from "./utils";

export function activate(context: vscode.ExtensionContext) {
  vscode.workspace.onDidOpenTextDocument(
    async (textDocument: vscode.TextDocument) => {
      const ebuildPath = JSON.parse(textDocument.uri.query || "{}").path;
      if (
        !ebuildPath ||
        !!vscode.languages.match(["shellscript"], textDocument) ||
        !ebuildPath.endsWith(".ebuild")
      ) {
        return;
      }
      // const rootDir = await realpath(`${dir}/../..`);
      const r = await execa("pkgcheck", ["scan", "-R", "JsonReporter"], {
        cwd: dirname(ebuildPath),
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

export function deactivate() {}
