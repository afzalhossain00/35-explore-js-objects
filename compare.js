// const first = { a: 2 };
// const second = { a: 2 };
// const third = second;
// if (third === second) {
//     console.log('they are same')
// }
// else {
//     console.log('different')
// }

// do not use this method to compare object or array
const first = { a: 2, b: 5, d: 1 };
const second = { a: 2, c: 1, b: 5 };
const firstString = JSON.stringify(first)
const secondString = JSON.stringify(second)
console.log(firstString, secondString)

if (firstString === secondString) {
    console.log('same')
}
else {
    console.log('differernt ')
}

function compareObject(first, second) {
    const firstKeys = Object.keys(first)
    const secondKeys = Object.keys(second)
    if (firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== second[key]) {
                return false
            }
        }
        return true;
    }
    else {
        return false;
    }
}

const isSame = compareObject(first, second)
console.log(isSame)