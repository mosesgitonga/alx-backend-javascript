export default function createEmployeesObject(departmentName, employees) {
    const mydict = {
        [departmentName]: employees
    }
    return mydict
}