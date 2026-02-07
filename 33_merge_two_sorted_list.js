function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToLinkedList(arr) {
    let head = new ListNode(arr[0])
    let curr = head

    for(let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i])
        curr = curr.next
    }
    return head;
}

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0)
    let tail = dummy;

    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }

    tail.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

function printList(head) {
    let result = []
    while(head !== null) {
        result.push(head.val);
        head = head.next;
    }

    console.log(result.join(" -> "))
}

let l1 = arrayToLinkedList([1,2,4]);
let l2 = arrayToLinkedList([1,3,4]);

let merged = mergeTwoLists(l1, l2);
printList(merged);