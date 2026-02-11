class ListNode{
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2){
    let dummy = new ListNode(0)
    let current = dummy;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 !== null ? l1.val : 0
        let val2 = l2 !== null ? l2.val : 0

        let total = val1 + val2 + carry;
        carry = Math.floor(total / 10)
        let digit = total % 10

        current.next = new ListNode(digit)
        current = current.next

        if(l1 !== null) l1 = l1.next
        if(l2 !== null) l2 = l2.next
    }

    return dummy.next;
}

function createLinkedList(arr) {
    let dummy = new ListNode(0)
    let current = dummy

    for(let num of arr) {
        current.next = new ListNode(num)
        current = current.next
    }

    return dummy.next
}

function linkedListToArray(head) {
    let result = []
    while(head !== null) {
        result.push(head.val)
        head = head.next;
    }
    return result
}

let l1 = createLinkedList([2, 4, 3])
let l2 = createLinkedList([5, 6, 4])

let result = addTwoNumbers(l1 , l2)

console.log(linkedListToArray(result))