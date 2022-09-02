const leapYears = function(year) {
    let leapYear;
    if (
        year % 400 == 0) {
    leapYear = true;
} else if (
    year % 4 == 0 &&
    year % 100 !== 0) {
    leapYear = true;
} else {
    leapYear = false;
}
return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
