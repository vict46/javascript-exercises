const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b){
        const currentYear = new Date().getFullYear();
        const lastPerson = (a.hasOwnProperty('yearOfDeath') ? a.yearOfDeath : currentYear) - a.yearOfBirth;
        const nextPerson = (b.hasOwnProperty('yearOfDeath') ? b.yearOfDeath : currentYear) - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
