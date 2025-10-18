var firstUniqChar = function (s) {
  let qCharAndItsFirstIndex = new Queue2()
 
  let count = new Array(26).fill(0); // 0 to 25
  let i = -1;
  for (let ch of s) {
    i++;
 
    let ascii_ch = ch.charCodeAt(0); // >=97
    let ascii_a = 'a'.charCodeAt(0); //   97 // ascii_ch >= ascii_a
    let ch_i = ascii_ch - ascii_a; // 0 - 25
 
    if (count[ch_i] === 0) {
      qCharAndItsFirstIndex.enqueue([ch_i, i]) // [0-25, indexInS]
    }
    count[ch_i]++;
  }
  for (let [ch_i, i] of qCharAndItsFirstIndex) {
    if (count[ch_i] === 1) {
      return i
    }
  }
 
  return -1
};
