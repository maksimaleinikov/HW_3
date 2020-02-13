let fruits = [
    { name: 'banana', count: 10 },
    { name: 'orange', count: 15 },
    { name: 'apple', count: 7 },
    { name: 'pear', count: 9 },
    { name: 'pineapple', count: 3 }
]

function createArr(arr, selectedField) {
    return arr.map(function(val) {
        return val[selectedField]; //return arr.map(val => val[selectedField]) по ES6
    })
}

const result = createArr(fruits, 'name');
console.log(result);

const readers = [
    { name: 'Kate', books: ['1984', 'Alchemist', 'Harry Potter'] },
    { name: 'Tom', books: ['Flowers for Algernon', '1984', 'Shantaram'] },
    { name: 'Jane', books: ['Lord of the rings', 'Alchemist', 'Agency of fear'] },
    { name: 'Bruce', books: ['The Master and Margarita', 'Bible', 'Dandelion wine'] },
    { name: 'John', books: ['Shantaram', 'Agency of fear', '1984'] }
]
const listOfbooks = readers.reduce((acc, item) => {
    item['books'].forEach(function(book) {
        if (!acc.includes(book)) {
            acc.push(book);
        }
    })
    return acc
}, []);
console.log(listOfbooks);