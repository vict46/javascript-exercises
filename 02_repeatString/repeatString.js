const repeatString = function(string, num) {
    let output;
    if (num < 0) {
        output = "ERROR";
    } else {
        output = "";
    };
    
    for (let index = 0; index < num; index++) {
        output = output + string;            
        };

    return output;
};

// Do not edit below this line
module.exports = repeatString;
