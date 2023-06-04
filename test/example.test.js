const functions = require("../index");

test("Addition", async () => {
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});

test("Phone Number", async () => {
  const expected = "(123) 456-7890";
  const result = functions.phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  expect(result).toBe(expected);
});