console.log("start")

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToLinkedList(arr) {
    let head = new ListNode(arr[0])
    let curr = head
    for(let i = 1; i < arr.length; i++){
        curr.next = new ListNode(arr[i])
        curr = curr.next;
    }
    return head
}

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Move fast n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both pointers
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Delete node
    slow.next = slow.next.next;

    return dummy.next;
};

function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}


let head = arrayToLinkedList([1,2,3,4,5]);
head = removeNthFromEnd(head, 2);
printList(head);