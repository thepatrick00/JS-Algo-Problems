// function map(arr) {
//     return arr.reduce((acc, current) => {
//         const add = current + 1;
//         acc.push(add);
//         console.log(acc)
//         return acc;
//     }, [])
// }

// console.log(map([1,2,3]))

/* Now using the call back as a parmater */

function map(arr, callback) {
    return arr.reduce((accumulator, value) => {
        return [...accumulator, callback(value)]
    }, [])
}

console.log(map([1,2,3], (v) => v + 1))

// 1. arr.reduce gets initial value of []
// 2. we iterate through the arr and get access to acc and value
// 3. so the first iteration we are spreading an empty array into the array, and returning the callback function with the value paramter, which ends up being 2. This array is our new accumulator
// 4. 