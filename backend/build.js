require("esbuild").buildSync({
  entryPoints: ["index.ts"],
  bundle: true,
  platform: "node",
  target: ["node10.4"],
  outfile: "dist/out.js",
});
