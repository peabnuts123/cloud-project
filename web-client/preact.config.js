import path from "path";

export default function (config, env, helpers) {
  // Alias paths
  config.resolve = config.resolve || {};
  config.resolve.alias = config.resolve.alias || {};

  Object.assign(config.resolve.alias, {
    // `@app` resolves the project root
    "@app": path.resolve(__dirname, 'src/'),
    // Use any `index` file, not just index.js
    "preact-cli-entrypoint": path.resolve(
      process.cwd(),
      "src",
      "index",
    ),
  });

  // @TODO not working
  // Set custom HTML template
  // helpers.setHtmlTemplate(config, 'src/index.html');

  // let { plugin: htmlWebpackPluginInstance } = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0]
  // htmlWebpackPluginInstance.options.template = `!!ejs-loader!${path.join(__dirname, 'src/index.html')}`;
  // console.log(`htmlWebpackPluginInstance`, htmlWebpackPluginInstance);

  return config;
}
