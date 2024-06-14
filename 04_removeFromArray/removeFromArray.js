const removeFromArray = function() {
    let finalArr = [];
    let originalArr = arguments[0];
    let argumentsArr = []; 
    for (let i = 1; i < arguments.length; i++) {
        argumentsArr[i] = arguments[i];
    }

    for (item of originalArr) {
        if(!(argumentsArr.includes(item))) {
            finalArr.push(item);
        }
    }
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
