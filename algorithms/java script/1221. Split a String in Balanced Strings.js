var balancedStringSplit = function (s) {
    let balancedSubstringCount = 0

    let L = 0
    let R = 0
    for (let ch of s) {
        (ch === 'L') ? L++ : R++
        if (L === R) {
            balancedSubstringCount++
        }
    }
    return balancedSubstringCount
};
