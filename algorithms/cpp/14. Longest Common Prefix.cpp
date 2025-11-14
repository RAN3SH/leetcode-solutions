#include <vector>
#include <string>
using namespace std;

string longestCommonPrefix(vector<string>& words) {
    string commonPrefixStr = "";
    for (int i = 0; i < words[0].size(); i++) {
        for (string& w : words) {
            if (words[0][i] == w[i]) {
    
            } else {
                return commonPrefixStr;
            }
        }
        commonPrefixStr += words[0][i];
    }
    return commonPrefixStr;
}

string longestCommonPrefix2222222222(vector<string>& words) {
    string commonPrefixStr = "";
    string firstWord = words[0];
    for (int i = 0; i < firstWord.size(); i++) {
        char firstWordCharAti = firstWord[i];
        for (string& w : words) {
            char otherWordCharAti = w[i];
            if (firstWordCharAti == otherWordCharAti) {
                // good
            } else {
                return commonPrefixStr;
            }
        }
        commonPrefixStr += firstWordCharAti;
    }
    return commonPrefixStr;
}
