const sumAll = function(begin, end) {
    let typeOfBegin = typeof begin;
    let typeOfEnd = typeof end;

    if (begin < 0 || end < 0 || typeOfBegin != 'number'|| typeOfEnd !=  'number') {
        return 'ERROR';
    }
    
    let sum = 0; 
    if (begin > end) {
        let temp = begin;
        begin = end; 
        end = temp;
    }

    for (let i = begin; i < (end + 1); i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

