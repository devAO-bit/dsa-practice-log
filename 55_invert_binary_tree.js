var invertTree = function(root) {
    if(root === null) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
}

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(arr) {
    if(!arr.length) return null;

    let root = new TreeNode(arr[0])
    let queue = [root];
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

let arr = [4, 2, 7, 1, 3, 6, 9];
let root = buildTree(arr);

console.log(root)

console.log("===========================")

console.log(invertTree(root)); // 3
