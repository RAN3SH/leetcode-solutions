var maximum69Number = function (num) {
    let s = '' + num
    let t = ''
    let changed = 0
    for (let d of s) {
        if (!changed) {
            if (d === '6') {
                d = '9'
                changed = 1
            }
        }
        t += d
    }
    return +t
};
