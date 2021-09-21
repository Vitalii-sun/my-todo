const { alias, configPaths } = require("react-app-rewire-alias");

module.exports = function override(config) {
    return alias(configPaths("./paths.json"))(config)
}