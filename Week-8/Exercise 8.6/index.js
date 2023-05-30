class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    this.s1.push(x);
  }

  deQueue() {
    if (this.s1.length == 0 && this.s2.length == 0) {
      return -1;
    }

    // if s2 is empty, move elements from s1
    if (this.s2.length == 0) {
      while (this.s1.length != 0) {
        this.s2.push(this.s1[0]);
        this.s1.shift();
      }
    }

    let x = this.s2[0];
    this.s2.shift();
    return x;
  }
}

const enqueDeque = (q, arr) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr[i] === 1) {
      q.enQueue(arr[i + 1]);
      i++;
      continue;
    }
    if (arr[i] === 2) {
      console.log(q.deQueue());
    }
  }
};

const q1 = new Queue();
const arr1 = [1, 2, 1, 3, 2, 1, 4, 2];
enqueDeque(q1, arr1); // output 2 3

const q2 = new Queue();
const arr2 = [1, 2, 2, 2, 1, 4];
enqueDeque(q2, arr2); // output 2 -1
