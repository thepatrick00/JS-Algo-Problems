//the challenge is I can't use new Set or .filter()

function removeDuplicateValues(arr) {
    const result = arr.reduce((accumulator, value) => {
        console.log('acc', accumulator, 'value', value)
        return accumulator.includes(value) ? accumulator : [...accumulator, value]
    }, [])

    return result
}

console.log(removeDuplicateValues(['a', 'b', 'c', 'c', 'c', 'd']));

 // reduce will always return 1 value at the end. We make sure it's the []
 // 1. Our first iteration is an empty array. We check if the empty array has a value of 'b'. obviously
 // it does not so we return it in an array with the accumulator

// this really helps us understand how reduce works, and that the accumulator (current, prev) whatever you want to call the first argument.
// it always is the argument that get everything added to it and ulitmialty get's returned.