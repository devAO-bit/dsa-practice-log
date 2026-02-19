class TreeNode{
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(arr) {
    if(!arr.length) return null;

    let root = new TreeNode(arr[0])
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

var isSameTree = function(p, q) {
    if(p === null && q === null) return true;
    if(p === null || q === null) return false;
    if(p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
let p = [1,2]
let q = [1,null,2]


let root1 = buildTree(p)
let root2 = buildTree(q)

console.log(isSameTree(root1, root2))
