const print = (head) => {
  let resArrar = [];
  let current = head;

  while (current) {
    resArrar.push(current.val);
    current = current.next;
  }

  return resArrar;
};

const rotate = (head, k) => {
  let current = head;
  let count = 1;

  while (count < k && current !== null) {
    current = current.next;
    count++;
  }

  let kthNode = current;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = head;
  head = kthNode.next;
  kthNode.next = null;

  return head;
};

const LL1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 7,
      next: {
        val: 8,
        next: {
          val: 9,
          next: null,
        },
      },
    },
  },
};

const LL2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: null,
              },
            },
          },
        },
      },
    },
  },
};

//! input   2 -> 4 -> 7 -> 8 -> 9
//! output  8 -> 9 -> 2 -> 4 -> 7
console.log(print(rotate(LL1, 3)));

//! input  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
//! output 5 -> 6 -> 7 -> 8 -> 1 -> 2 -> 3 -> 4
console.log(print(rotate(LL2, 4)));

// time complexity O(n)
// space complexity O(1)
