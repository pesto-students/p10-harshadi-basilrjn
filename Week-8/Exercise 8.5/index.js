const nextLargerElement = (arr) => {
  let stack = [];

  // iterating over the array
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1]["value"] < arr[i]) {
      let d = stack.pop();
      arr[d["index"]] = arr[i];
    }

    stack.push({ value: arr[i], index: i });
  }

  arr[arr.length - 1] = -1;
  return arr;
};

console.log(nextLargerElement([1, 3, 2, 4]));
console.log(nextLargerElement([6, 8, 0, 1, 3]));
console.log(nextLargerElement([13, 7, 6, 12]));
/**
 * [ 3, 4, 4, -1 ]
 * [ 8, -1, 1, 3, -1 ]
 * [ -1, 12, 12, -1 ]
 */

// time complexity O(n)
// space complexity O(n)
