const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");

fs.rmSync(dist, {
    recursive: true,
    force: true
});

fs.mkdirSync(dist, {
    recursive: true
});

fs.copyFileSync(
    path.join(__dirname, "..", "src", "app.js"),
    path.join(dist, "app.js")
);

console.log("Build completed successfully.");