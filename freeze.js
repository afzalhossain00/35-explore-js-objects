const bottle = {
    color: 'yellow',
    price: 50,
    isClened: true,
    capacity: 1
};
const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pair = Object.entries(bottle)
// console.log(keys, values, pair);
const twoDimension = [['color', 'yellow'], ['price', 50], ['isClened', true], ['capacity', 1]]

console.log(bottle)
// Object.seal(bottle)
Object.freeze(bottle)
delete bottle.isClened;
bottle.price = 1000
bottle.height = 12
console.log(bottle)