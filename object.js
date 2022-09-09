// 1. create object using object literals
const player = {};
player.name = 'small asif'
player.speciality = 'batsman'
player.bat = function () {
    console.log('sweing your bat');
}
console.log(player)
player.bat()

const student = {
    name: 'panda',
    job: 'khai anda',
    ball: function () {
        console.log('throw the ball')
    },
    salary: 100000
}

// 2.object constructor
const person = new Object();
// const person =  Object();
console.log(person)

// 3. object method
const item = Object.create(null)
const test = Object.create(student)
console.log(test.name)

// 4. class 
class Person {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }
}

const person1 = new Person(56);
console.log(person1);

// 5. Function

function car(model, price) {
    this.model = model;
    this.price = price;
}

const tesla = new car('elon', 32);