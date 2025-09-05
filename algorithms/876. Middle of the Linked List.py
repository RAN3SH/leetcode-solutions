class Node:
  def __init__(self, data1, next1 = None):
    self.data = data1
    self.next = next1
    
def convertArr2LL(arr):
    if not arr:
        return None
    head = Node(arr[0])
    temp = head
    print(head.data, end = "=>")
    for i in range(1, len(arr)):
        temp.next = Node(arr[i])
        temp = temp.next
        print(temp.data, end = '=>')
    print("None")
    return head
    
def middleNode(head):
  if not head:
    return None
  count = 0
  temp = head
  while temp:
    count += 1
    temp = temp.next

  temp = head

  middleNode = count // 2
  while(middleNode):
    middleNode -= 1
    temp = temp.next

  return temp
