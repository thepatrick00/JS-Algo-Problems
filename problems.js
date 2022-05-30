function toRainLanguage(num) {
    let answer;

    if(num % 3 === 0) answer = 'Pling';
    if(num % 5 === 0) answer = 'Plang';
    if(num % 7 === 0) answer = 'Plong';

    if(answer === undefined) return num;

    return answer;
};

console.log(toRainLanguage(8))