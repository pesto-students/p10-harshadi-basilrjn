function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

//* the count will be 0
//* because when createIncrement is invoked count is 0
//* and a string is made with that and assigned it to message
//* and when log function is called the message already declared is logged

//* if the string was declared inside log function it will take the latest count which is 3
