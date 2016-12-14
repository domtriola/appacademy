Array.prototype.uniq = function() {
  let uniqItems = [];
  this.forEach(el => {
    if (uniqItems.indexOf(el) < 0)
      uniqItems.push(el);
  });

  return uniqItems;
};
// console.log([1, 2, 3, 3, 4, 4, 5, 1, 2].uniq());
// [ 1, 2, 3, 4, 5 ]


Array.prototype.twoSum = function() {
  let twoSums = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++)
      if (this[i] + this[j] === 0) twoSums.push([i, j]);
  }

  return twoSums;
};
// console.log([-1, 0, 2, -2, 1].twoSum());
// [[0, 4], [2, 3]]


const transpose = (matrix) => {
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) transposed.push([]);

  for (let col = 0; col < matrix.length; col++) {
    for (let row = 0; row < matrix[0].length; row++) {
      transposed[col][row] = matrix[row][col];
    }
  }

  return transposed;
};
console.log(transpose(
  [[0, 1, 2],
   [3, 4, 5],
   [6, 7, 8]]
));
// [ [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ] ]
