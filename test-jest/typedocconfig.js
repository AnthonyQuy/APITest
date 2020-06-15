module.exports = {
  inputFiles: ["./src"],
  mode: "file",
  includeDeclarations: true,
  tsconfig: "tsconfig.json",
  out: "./docs",
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  readme: "README.md",
  name: "Contour UI Test",
  ignoreCompilerErrors: true,
  plugin: "none",
  listInvalidSymbolLinks: true
};
