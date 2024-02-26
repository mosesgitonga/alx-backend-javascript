function updateStudentGradeByCity(students, city, grades) {
    return students 
        .filter(student => student.location === city)
        .map(student => {
            const gradeObj = grades.find(grade => grade.studentId === student.id);
            if (gradeObj) {
                return {
                    id: student.id,
                    firstName: student.firstName,
                    location: student.location,
                    grade: gradeObj.grade
                }
            } else {
                return {
                    id: student.id,
                    firstName: student.firstName,
                    location: student.location,
                    grade: 'N/A'
                };
            }
        })
}
export default updateStudentGradeByCity;