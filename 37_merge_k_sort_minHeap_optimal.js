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

class MinHeap {
    constructor() {
        this.heap = []
    }

    push(node) {
        this.heap.push(node)
        this.bubbleUp(this.heap.length - 1)
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {

            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent].val <= this.heap[index].val) break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]

            index = parent
        }
    }


    bubbleDown(index) {
        let length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left].val < this.heap[smallest].val) {
                smallest = left
            }

            if (right < length && this.heap[right].val < this.heap[smallest].val) {
                smallest = right
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

            index = smallest
        }
    }

    size() {
        return this.heap.length
    }

}

var mergeKLists = function(lists) {
    const heap = new MinHeap();

    for(let node of lists) {
        if(node) heap.push(node);
    }

    let dummy = new ListNode(0)

    let tail = dummy;


    while(heap.size() > 0) {
        let node = heap.pop();
        tail.next = node;
        tail = tail.next

        if(node.next) {
            heap.push(node.next)
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

// The time complexity here is O(N log K) and space is O(K)
// Here the K represent Number of lists and N represnt total nodes
// This version keeps the smallest node at the top without sorting every time.