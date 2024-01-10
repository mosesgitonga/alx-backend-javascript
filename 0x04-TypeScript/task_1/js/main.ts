const { JSDOM } = require('jsdom');


 export interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    contract: boolean
}

const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    yearsOfExperience: 5,
    fullTimeEmployee: true,
    location: "Kenya",
    contract: true
};


export interface Director extends Teacher {
    numberOfReports: number
}

const director1: Director = {
    firstName: "Moses",
    lastName: "Gitonga",
    yearsOfExperience: 5,
    fullTimeEmployee: true,
    location: "Kenya",
    contract: true,
    numberOfReports: 20
}

export interface printTeacherFunction{
    (firstName: string, lastName: string): string
}

function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`
}

export interface IStudentClassConstructor {
    firstName: string, 
    lastName: string
}

export interface IStudentClass {
    workOnHomework(): string
    displayName(): string
}

class StudentClass {
    firstName: string
    lastName: string

    constructor({ firstName, lastName }: IStudentClassConstructor) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework(){
        return 'Currently working';
    }

    displayName() {
        return `${this.firstName}`
    }


}

