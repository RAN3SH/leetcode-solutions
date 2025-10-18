#include <vector>
#include <string>
#include <algorithm>

class Stack {
    std::vector<char> arr;
public:
    void push(char x) {
        arr.push_back(x);
    }

    void pop() {
        if (!arr.empty()) arr.pop_back();
    }

    int size() const {
        return arr.size();
    }
};

class Solution {
public:
    int maxDepth(std::string s) {
        Stack st;
        int maxSize = 0;
        for (char ch : s) {
            if (ch == '(') {
                st.push(ch);
                maxSize = std::max(maxSize, st.size());
            } else if (ch == ')') {
                st.pop();
            }
        }
        return maxSize;
    }
};
