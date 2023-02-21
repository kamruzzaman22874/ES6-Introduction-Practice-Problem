
// for array of objects 
const users = [
    {name: 'jamal' , id: 2, job: 'Engineer'}
]
// console.log(users[0].name);

// for object of array 

const data = {
    count: 500,
    data: [
        {name: 'jamal', id: 2, job: 'Engineer'},
        {name: 'kamal', id: 3, job: 'doctor'}
    ]
}

// console.log(data.data[0].job);

// for object of object


const user = {
    id: 1,
    name: 'jamal',
    address: {
        street: {
            first: '35/A uttara',
            second: '3rd floor'
        },
        postOffice: 'Uttara',
        city: 'Dhaka'
    }
}

console.log(user.addres?.postOffice);