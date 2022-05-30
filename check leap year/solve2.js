function isLeapYear(y) {
    const year = parseInt(y)

    if(year % 100 === 0 && year % 400 !== 0){
        return false
    } else if(year % 4 === 0) {
        return true
    } else {
        return false
    }
}

function isLeapYear2(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}

//the second solution is clever. If the conditional part of the ternary is true it returns the true part. So if the second one returns true or false itself.

//if the conditional statment of the ternary is false, it means it won't be divisible by 400 so it obviously skips that and it checks if it is divislbe by 4 and returns true or false for that.

console.log(isLeapYear2('2020'))