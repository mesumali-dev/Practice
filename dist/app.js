const config = require("./config");

function add(a, b) {
    return a + b;
}

function getAppInfo() {
    return {
        name: "Advanced CI Demo",
        environment: config.environment,
        version: config.version
    };
}

module.exports = {
    add,
    getAppInfo
};