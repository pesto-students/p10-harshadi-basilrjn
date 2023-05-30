const vowelCount = (str) => {
  const vowelMap = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
  ]);

  const strLower = str.toLowerCase(); // time complexity is O(n)

  for (let char of strLower) {
    if (vowelMap.has(char)) {
      vowelMap.set(char, vowelMap.get(char) + 1);
    }
  }
  return vowelMap;
};
console.log(vowelCount("Hello how are you")); // { 'a' => 1, 'e' => 2, 'i' => 0, 'o' => 3, 'u' => 1 }

// map.set(), map.get(), map.has() time complexity will be O(1)
// and the space complexity for the map will be O(n)
