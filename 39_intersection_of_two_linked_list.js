class ListNode{
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


function arrayToLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}

var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;

    let pA = headA;
    let pB = headB;

    while(pA !== pB) {
        pA = (pA === null) ? headB : pA.next;
        pB = (pB === null) ? headA : pB.next
    }
    return pA
}

let common = arrayToLinkedList([8, 4, 5])

let headA = new ListNode(4)
headA.next = new ListNode(1)
headA.next.next = common

let headB = new ListNode(5)
headB.next = new ListNode(6)
headB.next.next = new ListNode(1)
headB.next.next.next = common

let intersection = getIntersectionNode(headA, headB)

console.log(intersection ? intersection.val : null)