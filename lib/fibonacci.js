'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs = fibs.reduce(function(prev,curr){
  return prev + curr;
}, 0);

let prodFibs = fibs.slice(1,fibs.length).reduce(function(prev,curr){
  return prev * curr;
}, 1);

let sumOdd = fibs.filter(function(val){
  return val % 2 !== 0;
})
.reduce(function (prev,curr) {
  return prev + curr;
}, 0);

let prodEven = fibs.filter(function(val){
  return val % 2 === 0 && val > 0;
})
.reduce(function (prev,curr) {
  return prev * curr;
}, 1);


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
