class Solution:
    class Stack:
        def __init__(self):
            self.arr = []

        def push(self, x):
            self.arr.append(x)

        def pop(self):
            if self.arr:
                return self.arr.pop()
            return None

        def size(self):
            return len(self.arr)

    def maxDepth(self, s: str) -> int:
        st = self.Stack()
        max_size = 0
        for ch in s:
            if ch == '(':
                st.push(ch)
                max_size = max(max_size, st.size())
            elif ch == ')':
                st.pop()
        return max_size
