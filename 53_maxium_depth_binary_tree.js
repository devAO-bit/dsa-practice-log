class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
}

function buildTree(arr) {
    if(!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root]
    let i = 1;

    while(queue.length > 0 && i < arr.length) {
        let current = queue.shift()

        if(arr[i] !== null) {
            current.left = new TreeNode(arr[i])
            queue.push(current.left)
        }
        i++;

        if(i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i])
            queue.push(current.right)
        }
        i++;
    }
    return root;
}

var maxDepth = function(root) {
    if(root === null) return 0;

    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)

    return 1 + Math.max(leftDepth, rightDepth)
}

let arr = [3,9,20,null,null,15,7];
let root = buildTree(arr);

console.log(maxDepth(root)); // 3
