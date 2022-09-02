const sumAll = function(first, last) {
    let small;
    let large;
    let total;

    switch (true) {
        case typeof(first) !==  "number":
        case typeof(last) !== "number":
        case first < 0:
        case last < 0:
            total = "ERROR";            
            break;
        default:
            total = 0;
            
            if (last < first) {
                small = last;
                large = first;
            } else {
                small = first;
                large = last;
            }        
            
            for (let index = small; index < large + 1; index++) {
                total = total + index;
            }
            break;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
