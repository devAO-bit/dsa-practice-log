class ListNode{
    constructor(val = 0, next = null) {
        this.val = val;
        this.next =  next;
    }
}

function arrayToLinkedList(arr) {
    if(arr.length === 0) return null

    let head = new ListNode(arr[0]);
    let curr = head;

    for(let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i])
        curr = curr.next
    }
    return head
}

function printList(head) {
    let result = []
    while(head !== null) {
        result.push(head.val)
        head = head.next
    }
    console.log(result.join(" -> "))
}

var deleteDuplicate = function(head) {
    let curr = head;

    while(curr !== null && curr.next !== null) {
        if(curr.val === curr.next.val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head;
}

let head = arrayToLinkedList([1,1,2,3,3]);
head = deleteDuplicate(head);
printList(head);