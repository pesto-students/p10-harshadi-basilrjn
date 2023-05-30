const hasCycle = (head) => {
  while (head !== null) {
    if (head.flag === 1) {
      return true;
    }
    head.flag = 1;
    head = head.next;
  }
  return false;
};

// time complexity O(n)
// space complexity O(1)
