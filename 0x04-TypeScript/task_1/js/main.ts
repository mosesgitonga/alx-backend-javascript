const { JSDOM } = require('jsdom');


interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    contract: boolean
}

const teacher: Teacher = {
    firstName: "Moses",
    lastName: "Gitonga",
    yearsOfExperience: 5,
    fullTimeEmployee: true,
    location: "Kenya",
    contract: true
};

console.log(teacher)