Array.prototype.bubbleSort = function() {
  let swapped = true;
  while(swapped) {
    swapped = false;
    this.forEach((el, i) => {
      if(!(i === this.length - 1)) {
        if(el > this[i+1]) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          swapped = true;
        }
      }
    });
  }
  return this;
};
// console.log([7,1,3,2,99,0].bubbleSort());


String.prototype.substrings = function() {
  const subs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++)
      subs.push(this.slice(i, j));
  }
  return subs;
};
console.log("testing".substrings());
