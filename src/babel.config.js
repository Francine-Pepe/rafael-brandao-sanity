module.exports = function (api) {
  api.cache(true);

  const plugins = [
    require("@babel/plugin-proposal-private-property-in-object").default,
    require("@babel/plugin-proposal-private-methods").default,
  ];

  return {
    plugins,
  };
};
