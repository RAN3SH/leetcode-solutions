var middleNode = function (head) {
    if (!head) return head

    let ct = 0
    let temp;

    temp = head;
    while (temp) {
        ct++
        temp = temp.next;
    }
    let half2ndNode = Math.trunc(ct / 2)
    
    temp = head;
    while (half2ndNode) {
        half2ndNode--
        temp = temp.next;
    }
    return temp;
};
