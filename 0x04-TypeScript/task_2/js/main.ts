import { Dir } from "fs"

export interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

export interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

class Director implements DirectorInterface{
    workFromHome() {
        return 'Working from home'
    }

    getCoffeeBreak() {
        return 'Getting a coffee break'
    }

    workDirectorTasks() {
        return 'Getting to director tasks'
    }

}

class Teacher implements TeacherInterface{
    workFromHome() {
        return 'Cannot work from home'
    }

    getCoffeeBreak(){
        return 'Cannot have a break'
    }

    workTeacherTasks(){
        return 'Getting to work'
    }
}

export interface createEmployee {
    (salary: number): number | string
}
function createEmployee(salary: string | number): Director | Teacher  {
    if (typeof salary === 'number'){
        if (salary < 500) {
            return new Teacher()
        }else {
            return new Director()
        }
    }
}

function isDirector(employee: (Director | Teacher)){
    return employee instanceof Director
}

function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

type Subjects = 'Math' | 'History'

function teachClass(todayClass: string) {
    if (todayClass === 'Math') {
        return 'Teaching Math'
    } else if (todayClass === 'History') {
        return 'Teaching History'
    }
}
