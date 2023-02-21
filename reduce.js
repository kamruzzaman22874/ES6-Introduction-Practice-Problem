const numbers = [12, 15, 17, 20, 80, 100, 30];
const number = numbers.reduce((current, previous) => current + previous, 0);
console.log(number);