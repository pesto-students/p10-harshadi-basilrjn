function createStack() {
  let items = [];

  function push(item) {
    items.push(item);
  }

  function pop() {
    items.pop();
  }

  function printItems() {
    console.log(items);
  }
  return { push, pop, printItems };
}

const stack = createStack();
stack.printItems();
stack.push(10);
stack.printItems();
stack.push(5);
stack.printItems();
stack.pop();
stack.printItems();
stack.pop();
stack.printItems();
console.log(stack.items);
