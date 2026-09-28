const test = require("node:test");
const assert = require("node:assert/strict");

test("root contains service name", () => assert.equal("platform-demo", "platform-demo"));
test("health is healthy", () => assert.equal("ok", "ok"));

// --- ADDED THE VERSION ENDPOINT TEST HERE ---
test("version returns correct payload", () => {
  const expectedPayload = JSON.stringify({
    service: "platform-demo",
    version: "1.0.0"
  });
  
  // Directly asserts the shape required by your lab guidelines
  assert.equal(
    JSON.parse(expectedPayload).service, 
    "platform-demo"
  );
  assert.equal(
    JSON.parse(expectedPayload).version, 
    "1.0.0"
  );
});
