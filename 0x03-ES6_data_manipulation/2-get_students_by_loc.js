function getStudentsByLocation(arr, location) {
    const res = arr.filter(arr => arr.location === location)
    return res
}

export default getStudentsByLocation;