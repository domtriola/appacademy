function range(start, end) {
  if (start > end) return [];
  if (start === end) return [start];
  return [start].concat(range(start + 1, end));
}
// console.log(range(1, 9));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]


function sum(array) {
  if (array.length < 1) return 0;
  if (array.length === 1) return array[0];
  return array[0] + sum(array.slice(1));
}
// console.log(sum([2,3,4,7]));


function exponent1(b, n) {
  if (n === 0) return 1;
  return b * exponent1(b, n - 1);
}
// console.log(exponent1(2,3));


function exponent2(b, n) {
  if (n === 0) return 1;
  if (n === 1) return b;
  if (n % 2 === 0)
    return Math.pow(exponent2(b, n / 2), 2);
  else
    return b * Math.pow(exponent2(b, (n - 1) / 2), 2);
}
// console.log(exponent2(2,3));


function fib(n) {
  if (n === 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  let prevFib = fib(n - 1);
  prevFib.push(prevFib[n - 2] + prevFib[n - 3]);
  return prevFib;
}

// console.log(fib(8));


function bsearch(array, target) {
  if (array.length === 1 && array[0] !== target)
    return null;

  let mid = Math.floor(array.length / 2);
  if (array[mid] === target) return mid;

  if (target < array[mid]) {
    return bsearch(array.slice(0, mid), target);
  } else {
    let search = bsearch(array.slice(mid + 1), target);
    if (search !== null) {
      return mid + search + 1;
    } else return null;
  }
}
// console.log(bsearch([1], 1));
// // 0
// console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 7, 8, 12], 3));
// // 2
// console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 7, 8, 12], 8));
// // 8
// console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 7, 8, 12], 9));
// // null


function makeChange(num, changeOpts) {
  let newChange = changeOpts.filter(el => el <= num);
  if (newChange.length === 0) return null;
  let remainder = num - newChange[0];

  if (remainder === 0)
  return [newChange[0]];
  else {
    let change = makeChange(remainder, newChange);
    if (change === null)
      return null;
    else
      return [newChange[0]].concat(change);
  }
}
// console.log(makeChange(7, [10, 7, 1]));
// [ 7 ]
// console.log(makeChange(14, [10, 7, 1]));
// [ 10, 1, 1, 1, 1 ]


function mergeSort(array) {
  if (array.length < 2) return array;
  let left = array.slice(0, Math.floor(array.length / 2));
  let right = array.slice(Math.floor(array.length / 2));

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const merged = [];
  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0])
      merged.push(left.shift());
    else
      merged.push(right.shift());
  }
  return merged.concat(left.concat(right));
}
// console.log(mergeSort([3, 5, 7, 1, 19, 14, 8]));


function subsets(array) {
  if (array.length < 1) return [[]];

  let last = array.pop();
  let lastSubsets = subsets(array);
  return lastSubsets.concat(lastSubsets.map(el => {
    return el.concat(last);
  }));
}
console.log(subsets([]));
// [[]]
console.log(subsets([1]));
// [[], [1]]
console.log(subsets([1, 2]));
// [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3]));
// [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
