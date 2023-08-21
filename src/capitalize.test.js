const capitalize = require("./capitalize");


// "test" -> "Test"
test("test", () => {
  expect(capitalize("test")).toBe("Test");
});
// "TEST" -> "Test"
test("TEST", () => {
  expect(capitalize("TEST")).toBe("Test");
});
// "tEST" -> "Test"
test("tEST", () => {
  expect(capitalize("tEST")).toBe("Test");
});
// "Test" -> "Test"
test("Test", () => {
  expect(capitalize("Test")).toBe("Test");
});
// "t" -> "T"
test("t", () => {
  expect(capitalize("t")).toBe("T");
});
// "" -> ""
test("<none>", () => {
  expect(capitalize("")).toBe("");
});
// "1test" -> "1test"
test("1test", () => {
  expect(capitalize("1test")).toBe("1test");
});
// "test1" -> "Test1"
test("test1", () => {
  expect(capitalize("test1")).toBe("Test1");
});
