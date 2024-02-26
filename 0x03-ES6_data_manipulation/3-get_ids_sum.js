function getStudentIdsSum(arr) {
    const sum = arr.map(student => student.id).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)
    return sum;
}

export default getStudentIdsSum;
