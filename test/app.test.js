const test = require("node:test");
const assert = require("node:assert");
const { add } = require("../src/app");

test("add should return correct result", () => {
    assert.strictEqual(add(2, 3), 5);
});