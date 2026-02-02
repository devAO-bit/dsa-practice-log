function ListNode(val, next = null) {
    this.val = val;
    this.next = next
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while(curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function printList(head) {
    let result = []
    while(head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join("->"))
}

printList(head)
let reversedHead = reverseList(head);
printList(reversedHead);