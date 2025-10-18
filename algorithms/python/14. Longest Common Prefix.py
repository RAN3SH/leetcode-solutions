def longestCommonPrefix(words):
    commonPrefixStr = ''
    for i in range(len(words[0])):
        for w in words:
            if words[0][i] == w[i]:
                # good
                pass
            else:
                return commonPrefixStr
        commonPrefixStr += words[0][i]
    return commonPrefixStr


def longestCommonPrefix2222222222(words):
    commonPrefixStr = ''
    firstWord = words[0]
    for i in range(len(firstWord)):
        firstWordCharAti = firstWord[i]
        for w in words:
            otherWordCharAti = w[i]
            if firstWordCharAti == otherWordCharAti:
                # good
                pass
            else:
                return commonPrefixStr
        commonPrefixStr += firstWordCharAti
    return commonPrefixStr
