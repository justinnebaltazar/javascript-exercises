const reverseString = function(string) {
    let stringLength = string.length - 1; 
    let reversedString = '';
    for(let i = stringLength; i >= 0; i--) {
        reversedString = reversedString + string[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
