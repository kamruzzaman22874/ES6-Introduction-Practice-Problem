// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

const numbers = [1, 3, 5, 7, 9];
const number = numbers.map((x) => x + 1);
console.log(number);

// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

const arrays = [33, 50, 79, 78, 90, 101, 30];

const array = numbers.filter(num => num % 10 === 0);
console.log(array);

// 3) Now do the same task of question 2. But do this using array.find()
// method. Then compare the output of question 2 & question 3.

const value = [33, 50, 79, 78, 90, 101, 30];

const divisible = numbers.find((num) => num % 10 === 0);
console.log(divisible);

// 4) You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.

// Using for loop
let summation = [1, 9, 17, 22];

let add = 0
for (let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    add += number;
}
console.log(add);

// using reduce
let variable = [1, 9, 17, 22];

const vary = numbers.reduce((current, previous) => current + previous, 0)
console.log(vary);

// 5) Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.
const apple = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Alia', age: 22}
]

const sum = apple.reduce((current, previous) => current + previous.age, 0);
console.log(sum);

// Problem - 06


const student = {
    name: 'karim',
    age: 26
}
console.log(student.name);
console.log(student.age);

// Problem - 07


let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longitude: '98.7 , 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
}

console.log(data.location[0].city);

// Problem - 08

const user = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo?.lat);
console.log(user.company.name);
// console.log(object);
// console.log(object);



