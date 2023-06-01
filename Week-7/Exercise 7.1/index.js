const maxSubArray = (nums) => {
  let max = -100000;
  let currentMax = 0;

  for (let num of nums) {
    currentMax += num;

    if (max < currentMax) {
      max = currentMax;
    }

    if (currentMax < 0) {
      currentMax = 0;
    }
  }

  return max;
};

console.log(maxSubArray([1, 2, 3, 4, -10])); //* output : 10
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //* output : 6

// TC : O(n)
// SC : O(1)
