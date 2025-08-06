from collections import deque

class Solution:
    def firstUniqChar(self, s: str) -> int:
        count = [0] * 26
        q = deque()

        for i, ch in enumerate(s):
            ch_i = ord(ch) - ord('a')
            if count[ch_i] == 0:
                q.append((ch_i, i
