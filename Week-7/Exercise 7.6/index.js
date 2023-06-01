function find3Numbers(arr, target) {
  let diff = 1000000;
  let closest = 0;

  for (let i = 0; i < arr.length - 3; i++) {
    let value = arr[i] + arr[i + 1] + arr[i + 2];
    if (diff > Math.abs(value - target)) {
      diff = Math.abs(value - target);
      closest = value;
    }
  }

  return closest;
}

let arr = [-1, 2, 1, -4];
let target = 1;

console.log(find3Numbers(arr, target)); // output 2

// TC : O(n)
// SC : O(1)
