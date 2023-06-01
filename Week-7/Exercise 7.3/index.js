const sort = (nums) => {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    // if mid = 0 swap mid to low
    if (nums[mid] === 0) {
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // if mid = 1 increment mid
      mid++;
    } else {
      // if mid = 2 swap with high
      let temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      high--;
    }
  }

  return nums;
};

console.log(sort([0, 2, 1, 2, 0])); // [ 0, 0, 1, 2, 2 ]
console.log(sort([0, 1, 0])); // [ 0, 0, 1 ]

// TC : O(n)
// SC : O(1)
