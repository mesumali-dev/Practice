const test = require("node:test");
const assert = require("node:assert");
const { add, getAppInfo } = require("../src/app");

test("add should return correct result", () => {
    assert.strictEqual(add(2, 3), 5);
});

test("app should return correct information", () => {
    const info = getAppInfo();

    assert.strictEqual(info.name, "Advanced CI Demo");
    assert.ok(info.environment);
    assert.ok(info.version);
});