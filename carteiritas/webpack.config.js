const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "creditas",
    projectName: "carteiritas",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {

  });
};