ListNode* middleNode(ListNode* head) {
    if (!head) return head;

    int ct = 0;
    ListNode* temp = head;
    while (temp) {
        ct++;
        temp = temp->next;
    }
    int half2ndNode = ct / 2;

    temp = head;
    while (half2ndNode) {
        half2ndNode--;
        temp = temp->next;
    }
    return temp;
}
