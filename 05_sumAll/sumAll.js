const sumAll = function(min, max) {
    let totalSum = 0;
    // check if it is number or not
    if((!Number.isInteger(min) || !Number.isInteger(max))){
        return 'ERROR'
    }
    //error if negative number
    if(min < 0 || max < 0) {
        return 'ERROR'
    }
    //check if min is larger that max
    if(min > max){
        let tempMax = min;
        let tempMin = max;
        for (let i = tempMin; i <= tempMax; i++){
            totalSum += i
        }
    return totalSum
    } else {
        for (let i = min; i <= max; i++){
            totalSum += i
        }
    }
    return totalSum;
};

console.log(sumAll(4, 'tae'));

// Do not edit below this line
module.exports = sumAll;
