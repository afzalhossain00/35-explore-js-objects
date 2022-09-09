const numbers = [12, 25, 4, 56, 74]
for (const number of numbers) {
    // console.log(number);
}

//for of cannot be use with objects 
const bottle = { color: 'yellow', price: 50, isClened: true, capacity: 1 };

// first option to loop through an object
const keys = Object.keys(bottle);
console.log(keys);
/* 
3 ways to read objects properties
1. bottle.color
2. bottle['color']  when we know property name
3. bottle[key]  when property in the variable
*/
for (const key of keys) {
    // console.log(key, bottle[key]);
}

// for in loop
for (const key in bottle) {
    const value = bottle[key];
    console.log(key, value)
}

// advanced 
const pair = Object.entries(bottle)
console.log(pair)
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}


