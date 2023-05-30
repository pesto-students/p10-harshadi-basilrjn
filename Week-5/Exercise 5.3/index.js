const hasDuplicate = (arr) => {
  let setWithoutDuplicates = new Set();

  for (let item of arr) {
    if (setWithoutDuplicates.has(item)) {
      return true;
    } else {
      setWithoutDuplicates.add(item);
    }
  }

  return false;
};

console.log(hasDuplicate([1, 2, 1, 3, 5, 3])); // true
console.log(hasDuplicate([1, 2, 3, 4, 5])); // false

// time and space complexity for creating an array or set is O(n)
