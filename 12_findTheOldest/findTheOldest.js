const getAge = function(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth;
}

const findTheOldest = function(arr) {
    const oldest = arr.sort(function(a, b) {
        const lastPerson = getAge(a.yearOfBirth, a.yearOfDeath);
        const nextPerson = getAge(b.yearOfBirth, b.yearOfDeath);
        return lastPerson < nextPerson ? 1 : -1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
