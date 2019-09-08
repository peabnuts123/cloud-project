import { resolve } from "path";

export default function (config, env, helpers) {
  // Alias paths
  config.resolve = config.resolve || {};
  config.resolve.alias = config.resolve.alias || {};
  config.resolve.alias['@app'] = resolve(__dirname, 'src/');

  // Use any `index` file, not just index.js
  config.resolve.alias["preact-cli-entrypoint"] = resolve(
    process.cwd(),
    "src",
    "index"
  );

  return config;
}
