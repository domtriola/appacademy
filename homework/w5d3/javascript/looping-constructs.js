/* Looping
*************/

const fizzBuzz = (array) => {
  let fizzBuzzed = [];
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    if (x % 3 === 0 && x % 5 === 0)
      continue;
    else if (!(x % 3))
      fizzBuzzed.push(x);
    else if (!(x % 5))
      fizzBuzzed.push(x);
  }
  return fizzBuzzed;
};
// console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]));
// [ 3, 5, 6, 9, 10 ]

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++)
    if (!(num % i)) return false;
  return true;
};
// console.log(isPrime(2)); // true
// console.log(isPrime(4)); // false
// console.log(isPrime(7)); // true
// console.log(isPrime(15)); // false
// console.log(isPrime(19)); // true

const firstNPrimes = (n) => {
  let primes = [];
  for (let i = 2; primes.length < n; i++)
    if (isPrime(i)) primes.push(i);
  return primes;
};
// console.log(firstNPrimes(10));
// [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]

const sumOfNPrimes = (n) => {
  return firstNPrimes(n).reduce((accum, prime) => accum + prime);
};
// console.log(sumOfNPrimes(5));
// 28


const allOrNothing = function() {
  const mod = arguments[0];
  for (let i = 1; i < arguments.length; i++)
    if (arguments[i] % mod) return false;
  return true;
};
// console.log(allOrNothing(3, 9, 12, 6));
// true
// console.log(allOrNothing(5, 1, 2, 10));
// true
