const environment = process.env.APP_ENV || "development";
const version = process.env.APP_VERSION || "1.0.0";
const apiKey = process.env.API_KEY || 2565656565;

console.log("Environment:", environment);
console.log("Version:", version);
console.log("API Key:", apiKey);

module.exports = {
    environment,
    version,
    apiKey
};