module.exports = (on, config) => {
    // configure plugins here
    const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  initPlugin(on, config);
  require('cypress-mochawesome-reporter/plugin')(on);
};
  };