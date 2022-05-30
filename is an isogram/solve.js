function isIsogram(str) {
    const letters = str.toLowerCase().split('');
    return new Set(letters).size === letters.length
}

function isIsogram2(str) {
    const letters = str.toLowerCase().split('');
    return letters.every((char, index) => letters.indexOf(char) === index);
}

console.log(isIsogram2('patteRN'))

//2nd solution works because for EVERY character it checks "the first index of that char" using indexOf(). If a second index exists that means it will be false because indexOf() always returns the first index.

//This will trigger the .every() to return false because every char did not pass the test