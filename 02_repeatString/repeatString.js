const repeatString = function(string, num) {
    let finalString = '';
    for(let i = 0; i < num; i++) {
        finalString = finalString + string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;

