
function getListStudentIds(arr) {
    
    const students = [
        {firstName: 'Guillaume', id: 1, location: 'San Francisco'},
        {firstName: 'James', id: 2, location: 'Columbia'},
        {firstName: 'Serena', id: 5, location: 'San Francisco'}
    ]

    if (!Array.isArray(arr)) {
        return []
    }
    else {
        
        const ids = arr.map(student => student.id)
        return ids;
    }

}
export default getListStudentIds;