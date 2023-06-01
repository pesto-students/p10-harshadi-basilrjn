var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    switch (char) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (stack.pop() !== char) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

console.log(isValid("{([])}"));
console.log(isValid("()"));
console.log(isValid("([]"));

// time complexity O(n)
// space complexity O(n)
