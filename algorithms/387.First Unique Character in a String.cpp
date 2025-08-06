#include <string>
#include <queue>
#include <vector>
using namespace std;

int firstUniqChar(const string& s) {
    queue<pair<int, int>> q_char_and_first_idx; // (ch_i, index_in_s)
    vector<int> count(26, 0);
    for (int i = 0; i < s.length(); ++i) {
        int ch_i = s[i] - 'a';
        if (count[ch_i] == 0) {
            q_char_and_first_idx.emplace(ch_i, i);
        }
        count[ch_i]++;
    }
    while (!q_char_and_first_idx.empty()) {
        auto [ch_i, idx] = q_char_and_first_idx.front();
        q_char_and_first_idx.pop();
        if (count[ch_i] == 1) {
            return idx;
        }
    }
    return -1;
}
