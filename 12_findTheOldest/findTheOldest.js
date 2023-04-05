const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge = 0;
    const currentYear = 2023;
    people.forEach(person => {
        let age;
        if (person.yearOfDeath == null){
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > oldestAge){
            oldestPerson = person;
            oldestAge = age;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
