function transposeMatrix(array) {
    
    return array[0].map((_, i) => {
        return array.map(v => v[i])
    })
        
};
// 1. Map through the very first array and get it's index.
// 2. Then start mapping through the whole array, (each individual array)
// and return the value of the index from the initial array.


//array of arrays and instead return their column instead of by row's how they are now.
console.log(transposeMatrix([
    [1,2,3],
    [1,2,3],
    [1,2,3]
]))