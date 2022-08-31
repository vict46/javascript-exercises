const removeFromArray = function(fullArray) {
    let args = [];
    let filteredArray = fullArray;
    for (let index = 1; index < arguments.length; index++) {
        filteredArray = filteredArray.filter(val => val !== arguments[index]);
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
