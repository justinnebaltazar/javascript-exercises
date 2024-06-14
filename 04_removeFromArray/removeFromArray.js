const removeFromArray = function(originalArr, values ) {
    let finalArr = [];
    for (num in originalArr) {
        if (values.includes(num)) {
            continue
        }
        finalArr.push(num);
    }
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
