#include <string>
#include <queue>
#include <vector>
using namespace std;

class Solution {
public:
    int firstUniqChar(string s) {
        vector<int> count(26, 0);
        queue<pair<int, int>> q; // (char_index, original_index)

        for (int i = 0; i < (int)s.length(); ++i) {
            int ch_i = s[i] - 'a';
            if (count[ch_i] == 0) {
                q.emplace(ch_i, i);
            }
            ++count[ch_i];
        }

        while (!q.empty()) {
            auto [ch_i, idx] = q.front();
            if (count[ch_i] == 1) {
                return idx;
            }
            q.pop();
        }
        return -1;
    }
};
