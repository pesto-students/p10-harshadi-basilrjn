const mathOperators = require("./index");

test("properly adds two numbers", () => {
  // Scenario: computing sum of two numbers
  // User inputs two numbers 1 and 2
  // Then the result should be 3

  expect(mathOperators.sum(1, 2)).toBe(3);
});

test("properly subtracts two numbers", () => {
  // Scenario: computing difference of two numbers
  // User inputs two numbers 5 and 3
  // Then the result should be 2

  expect(mathOperators.diff(5, 3)).toBe(2);
});

test("properly multiply two numbers", () => {
  // Scenario: computing product of two numbers
  // User inputs two numbers 5 and 4
  // Then the result should be 20

  expect(mathOperators.product(5, 4)).toBe(20);
});
