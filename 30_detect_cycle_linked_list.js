console.log("Start")

function ListNode(val, next = null) {
    this.val =  val;
    this.next = next;
}

function arrayToLinkedList(arr) {
    let head = new ListNode(arr[0])
    let curr = head;
    for(let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next
    }
    return head;
}

var hasCycle = function(head) {
    if(!head || !head.next) return false

    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next;


        if(slow === fast) {
            return true
        }
    }
    return false
}

let head = arrayToLinkedList([1,2,3,4,5]);
head.next.next.next.next.next = head.next.next; // cycle at 3

console.log(hasCycle(head)); // true