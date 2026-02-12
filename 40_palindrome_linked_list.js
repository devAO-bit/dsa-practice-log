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

var isPalindrome = function(head) {
    if(!head || !head.next) return true;

    // Find Middle
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast= fast.next.next;
    }

    // Reverse second half
    let prev = null;
    let curr = slow;

    while(curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // Compare halves
    let first = head;
    let second = prev;

    while(second !== null) {
        if(first.val !== second.val) {
            return false;
        }
        first = first.next;
        second = second.next;
    }
    return true;
}

let list = arrayToLinkedList([1, 2, 3, 2, 1]);

let result = isPalindrome(list);
console.log(result); 
