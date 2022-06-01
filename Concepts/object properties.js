//iterables let us use for...of and forEach() and map() filter() reduce()

//Object.keys(obj)
//Object.values(obj)
//Object.entries(obj)
//these 3 will create an array from an object so we can use the above methods

let names = {
    name: 'patrick',
    car: 'honda',
    year: '2004'
}

console.log(names)
console.log(Object.entries(names))
