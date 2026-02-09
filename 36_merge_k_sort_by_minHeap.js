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


var mergeKLists = function(lists) {
    let heap = []

    for(let node of lists) {
        if(node) heap.push(node)
    }

    heap.sort((a, b) => a.val - b.val)

    let dummy = new ListNode(0)
    let tail = dummy;

    while(heap.length > 0) {
        let node = heap.shift()
        tail.next = node
        tail = tail.next

        if(node.next) {
            heap.push(node.next)
            heap.sort((a, b) => a.val - b.val)
        }
    }

    return dummy.next
}

function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}


let l1 = arrayToLinkedList([1,4,5]);
let l2 = arrayToLinkedList([1,3,4]);
let l3 = arrayToLinkedList([2,6]);

let result = mergeKLists([l1, l2, l3]);
printList(result);