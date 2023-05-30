function findPair(arr, n) {
  // Initialize positions of two elements
  let i = 0;
  let j = 1;

  let sortedArray = arr.sort((a, b) => a - b);

  // Search for a pair
  while (i < sortedArray.length && j < sortedArray.length) {
    if (i !== j && sortedArray[j] - sortedArray[i] === n) {
      return 1;
    } else if (sortedArray[j] - sortedArray[i] < n) {
      j++;
    } else {
      i++;
    }
  }

  return 0;
}

console.log(findPair([5, 10, 3, 2, 50, 80], 78)); // 1
console.log(findPair([-10, 20], 30)); // 1

// TC : O(n)
// SC : O(1)
