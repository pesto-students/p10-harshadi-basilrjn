function one() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("one waited for 100ms");
    }, 100);
  });
}

function two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("two waited for 200ms");
    }, 200);
  });
}
function three() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("three waited for 300ms");
    }, 300);
  });
}

async function asyncFunction() {
  try {
    let oneResult = await one();
    let twoResult = await two();
    let threeResult = await three();

    console.log(oneResult);
    console.log(twoResult);
    console.log(threeResult);
  } catch (e) {
    console.error("error");
  }
}
asyncFunction();

// ! --------------------- generator -------------------

function cbOne(callback) {
  setTimeout(function () {
    callback("waited for for 1s");
  }, 1000);
}
function cbTwo(callback) {
  setTimeout(function () {
    callback("waited for for 1.5s");
  }, 1500);
}
function cbThree(callback) {
  setTimeout(function () {
    callback("waited for for 2s");
  }, 2000);
}

function* generatorFunction(resume) {
  console.log(yield cbOne(resume));
  console.log(yield cbTwo(resume));
  console.log(yield cbThree(resume));
}

function resume(callbackValue) {
  generatorItr.next(callbackValue);
}
const generatorItr = generatorFunction(resume);
generatorItr.next();
