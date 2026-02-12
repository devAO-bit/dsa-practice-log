class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def isPalindrome(head):
    if not head or not head.next:
        return True
    
    # Find Middle
    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    # Reverse SEcond Half
    prev = None
    curr = slow

    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp

    first = head
    second = prev

    while second:
        if first.val != second.val:
            return False
        first = first.next 
        second = second.next 

    return True


# Helper function to test
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
        print(head.val, end=" -> ")
        head = head.next
    print("None")

head = array_to_linked_list([1, 2, 2, 1])

print_list(head)
print(isPalindrome(head))