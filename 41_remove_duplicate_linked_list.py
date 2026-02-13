class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def deleteDuplicates(head):
    curr = head

    while curr and curr.next:
        if curr.val == curr.next.val:
            curr.next = curr.next.next
        else:
            curr = curr.next

    return head


def array_to_linked_list(arr):
    if not arr:
        return None
    
    head = ListNode(arr[0])
    curr = head

    for val in arr[1:]:
        curr.next = ListNode(val)
        curr = curr.next

    return head


def print_list(head):
    while head:
        print(head.val, end = " -> ")
        head = head.next

    print("None")


head = array_to_linked_list([1, 1, 2, 3, 3])

head = deleteDuplicates(head)
print_list(head)
