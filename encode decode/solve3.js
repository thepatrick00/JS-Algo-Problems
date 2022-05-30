// function encode(str) {
//     const letters = str.split('');
//     let answer = '';

//     for (let i=0; i < letters.length; i++){
//         let count = 1;
//         while (letters[i] === letters[i+1]) {
//             count++
//             i++
//         }
//         answer += count + letters[i]
//     }
    
//     return answer
// }

//The above way of encoding is very imperative and possibly confusing. A way easier and more declarative way to encode & DECODE! is with .replace() string method.

function encode(str) {
    const regex = /(\w)\1+/g;
    const result = str.replace(regex, function(match, char) {
        const length = match.length
        return length + char
    });

    return result;
}

function decode(str) {
    const regex = /\d\w/g
    const result = str.replace(regex, function(match) {
        const num = match[0];
        const char = match[1];
        return char.repeat(num)
    })
    return result
}

console.log(encode('wwwiiuuuu'));
console.log(decode('2L3o4l'));