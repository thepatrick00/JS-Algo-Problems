function makeFlat(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(curr)
    }, [])
}

//Solution using recursion
const makeFlat2 = (array) => {
    return array.reduce((accumulator,value)=>{
        return Array.isArray(value) ? [...accumulator, ...makeFlat(value)] : [...accumulator,value]
    },[])
  }
  

console.log(makeFlat2( ["one", ["two", "three"], ["four", ["five"]]] ))