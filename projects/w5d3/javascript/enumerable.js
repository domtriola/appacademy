Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
// [1,2,3].myEach(el => console.log(2 * el));


Array.prototype.myMap = function(callback) {
  const result = [];
  this.myEach(el => {
    result.push(callback(el));
  });
  return result;
};
// console.log([1,2,3].myMap(el => el * 2));


Array.prototype.myInject = function(callback) {
  let accum = this.shift();

  this.myEach(el => {
    accum = callback(accum, el);
  });

  return accum;
};
// console.log([1, 2, 3].myInject((accum, el) => {
//   return accum + el;
// }));
