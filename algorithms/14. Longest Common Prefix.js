var longestCommonPrefix = function (words) {
    let commonPrefixStr = ''

    OUTER___LOOP:
    for (let i = 0; i < words[0].length; i++) {
        for (let w of words) {
            if (words[0][i] === w[i]) {
                // good
            } else {
                break OUTER___LOOP;
            }
        }

        commonPrefixStr += words[0][i]
    }

    return commonPrefixStr
};

var longestCommonPrefix2222222222 = function (words) {
    let commonPrefixStr = ''

    let firstWord = words[0]
    OUTER___LOOP:
    for (let i = 0; i < firstWord.length; i++) {
        let firstWordCharAti = firstWord[i]

        for (let w of words) {
            let otherWordCharAti = w[i]
            if (firstWordCharAti === otherWordCharAti) {
                // good
            } else {
                break OUTER___LOOP;
            }
        }

        commonPrefixStr += firstWordCharAti
    }

    return commonPrefixStr
};
