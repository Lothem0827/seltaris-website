/**
 * Custom dev server for react-dev-inspector editor launching.
 * @see https://react-dev-inspector.zthxxx.me/docs/integration/nextjs
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { createServer } from "node:http";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import next from "next";
import launchEditorEndpoint from "react-dev-utils/launchEditorEndpoint.js";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

function resolveCursorCommand() {
  if (process.env.REACT_EDITOR) {
    return process.env.REACT_EDITOR;
  }

  const localAppData =
    process.env.LOCALAPPDATA ?? path.join(homedir(), "AppData", "Local");

  const candidates = [
    path.join(
      localAppData,
      "Programs",
      "cursor",
      "resources",
      "app",
      "bin",
      "cursor.cmd",
    ),
    path.join(
      localAppData,
      "Programs",
      "Cursor",
      "resources",
      "app",
      "bin",
      "cursor.cmd",
    ),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  return "cursor";
}

const cursorCommand = resolveCursorCommand();

/** Opens files in Cursor with line/column — react-dev-utils doesn't know `cursor`. */
function cursorLaunchEditorMiddleware(req, res, next) {
  if (!req.url?.startsWith(launchEditorEndpoint)) {
    return next();
  }

  const url = new URL(req.url, "http://localhost");
  const fileName = url.searchParams.get("fileName");
  const lineNumber = url.searchParams.get("lineNumber") ?? "1";
  const colNumber = url.searchParams.get("colNumber") ?? "1";

  if (!fileName) {
    return next();
  }

  const absoluteFile = req.url.startsWith(`${launchEditorEndpoint}/relative`)
    ? path.join(projectRoot, fileName)
    : fileName;

  const gotoArg = `${absoluteFile}:${lineNumber}:${colNumber}`;

  spawn("cmd.exe", ["/C", cursorCommand, "-g", gotoArg], {
    detached: true,
    stdio: "ignore",
  }).unref();

  res.statusCode = 200;
  res.end("OK");
}

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const middlewares = [
      cursorLaunchEditorMiddleware,
      (request, response) => handle(request, response),
    ];

    const pipeline = middlewares.reduceRight(
      (nextHandler, middleware) => () => {
        middleware(req, res, nextHandler);
      },
      () => {},
    );

    try {
      pipeline();
    } catch (error) {
      console.error("Error occurred handling", req.url, error);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (error) => {
      console.error(error);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`\n> Ready on http://${hostname}:${port}`);
      console.log(`> React Dev Inspector editor: ${cursorCommand}`);
      console.log(
        "> Shortcut: Ctrl+Shift+Alt+C (Windows), then click a component\n",
      );
    });
});
