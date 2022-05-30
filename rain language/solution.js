function toRainLanguage(num) {
    let answer = '';

    if(num % 3 === 0) answer += 'Pling';
    if(num % 5 === 0) answer += 'Plang';
    if(num % 7 === 0) answer += 'Plong';

    return answer || num;
};

console.log(toRainLanguage(5))

// One line if statment shorthands are used for short if statments
// Shortcircuting with || or statment. Takes the first true statment