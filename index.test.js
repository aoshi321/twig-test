const groupArrayElements = require("./index");

test("it returns the contents of the array divided into N equally sized arrays", () => {
  const result = groupArrayElements([1, 2, 3, 4, 5, 6], 3);
  expect(result).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});

test("it returns the contents of the array divided into N equally sized arrays with a remainder", () => {
  const result = groupArrayElements([1, 2, 3, 4, 5], 3);
  expect(result).toEqual([[1, 2], [3, 4], [5]]);
});

test(`it returns the contents of the array divided into N equally sized arrays, excluding excess array items 
      due to the size exceeding the items`, () => {
  const result = groupArrayElements([1, 2, 3, 4, 5], 10);
  expect(result).toEqual([[1], [2], [3], [4], [5]]);
});

test("it returns an empty array if the size is 0", () => {
  const result = groupArrayElements([1, 2, 3, 4, 5], 0);
  expect(result).toEqual([]);
});
