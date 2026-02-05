console.log("Start")

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
    return head
}

var detectCycle = function(head) {
    if(!head || !head.next) return null;

    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next

        if(slow === fast) {
            let entry = head
            while(entry !== slow) {
                entry = entry.next
                slow = slow.next
            }
            return entry;
        }
    }
    return null;
}

let head = arrayToLinkedList([1,2,3,4,5]);
head.next.next.next.next.next = head.next.next; // cycle at 3

let start = detectCycle(head);
console.log(start ? start.val : null); // 3