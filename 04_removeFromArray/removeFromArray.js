const removeFromArray = function(fullArray) {
    let args = [];
    for (let index = 1; index < arguments.length; index++) {
        args[index-1] = arguments[index];
    }
    filteredArray = fullArray.filter(matchArrayValue);

    function matchArrayValue(checkValue) {
        args.includes(checkValue);
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
