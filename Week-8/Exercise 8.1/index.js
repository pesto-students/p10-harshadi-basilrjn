const reverseList = (head) => {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;

    current.next = prev;

    prev = current;
    current = next;
  }
  return prev;
};

let LL1 = {
  head: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: { val: 6, next: null },
          },
        },
      },
    },
  },
};

let LL2 = {
  head: {
    val: 2,
    next: {
      val: 7,
      next: {
        val: 8,
        next: {
          val: 9,
          next: {
            val: 10,
            next: null,
          },
        },
      },
    },
  },
};

console.log(reverseList(LL1.head));
console.log(reverseList(LL2.head));

// time complexity O(n)
// space complexity O(1)
