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

var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1

    if(l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}

function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}


let l1 = arrayToLinkedList([1,2,4]);
let l2 = arrayToLinkedList([1,3,4]);

let merged = mergeTwoLists(l1, l2);
printList(merged);