
//Bind
const yourobj = {
  a: 1,
  b: 5, 
  c: function() {
      console.log(this);
  }
};
var L = yourobj.c;
console.log(L)
L.call(yourobj)
yourobj.L = yourobj.L.bind(yourobj)

// call function
const myobj = {
  a: 2,
  b: 5, 
  c: function() {
      console.log(this);
  }
};

const obj = {
  i: 6,
  j: 8,
}
var D = myobj.c;
D.call(myobj)

//Apply
const objnum1 = {
  r: 7,
  s: 4, 
  T: function() {
      console.log(this);
  }
};

const objnum2 = {
  x: 9,
  y: 11,
}
var Z =objnum1.T;
Z.apply(objnum1, [7, 4]);