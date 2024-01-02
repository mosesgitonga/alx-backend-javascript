export default function concatArrays(array1, array2, string) {
    const concatArr = [...array1, ...array2, ...string]
    return concatArr
}