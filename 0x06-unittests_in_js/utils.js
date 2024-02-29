class Utils {
    static calculateNumber(type, a, b) {
    
        if (type === 'SUM') {
            a = Math.round(a)
            b = Math.round(b)
            res = a + b;
        } else if (type === 'SUBTRACT') {
            a = Math.round(a)
            b = Math.round(b)
            res = a - b;
        } else if (type === 'DIVIDE') {
            a = Math.round(a)
            b = Math.round(b)
            if (b === 0) {
                res = 'Error'
            } else {
                res = a / b
            }
        }
        return res;
    }
}

module.exports = Utils
