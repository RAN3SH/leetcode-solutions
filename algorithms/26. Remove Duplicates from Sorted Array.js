var removeDuplicates = function (a) {
    let n = a.length

    let l = 0, r = 0
    for (let r = 0; r < n; r++) {
        if (a[r - 1] !== a[r]) {
            a[l] = a[r]
            l++
        }
    }
    return l
};

var removeDuplicates22222222 = function (a) {
    let set = new Set(a)

    let i = 0
    for (let x of set) {
        a[i] = x
        i++
    }
    return i
};
