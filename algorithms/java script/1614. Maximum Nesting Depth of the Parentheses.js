/**
 * @param {string} s
 * @return {number}
 */

var maxDepth= function (s) {
  let st = new Stack();
  let maxSize = 0;

  for (let ch of s) {
    if (ch === '(') {
      st.push(ch);
      let newSize = st.size();
      if (newSize > maxSize) maxSize = newSize;
    } else if (ch === ')') {
      st.pop();
    }
  }

  return maxSize;
};

class Stack {
  arr = [];

  constructor(a = []) {
    for (let e of a) this.push(e);
  }

  push(x) {
    this.arr.push(x);
    return this;
  }

  pop() {
    return this.arr.pop();
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  size() {
    return this.arr.length;
  }
}
