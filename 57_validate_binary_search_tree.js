var isValidBST = function(root) {
    function validate(node, min, max) {
        if(!node) return true;

        if(node.val <= min || node.val >= max) return false

        return validate(node.left, min, node.val) && validate(node.right, node.val, max)
    }
    return validate(root, -Infinity, Infinity)
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
    let queue = [root]
    let i = 1;

    while(queue.length > 0 && i < arr.length) {
        let current = queue.shift()

        if(arr[i] !== null) {
            current.left = new TreeNode(arr[i])
            queue.push(current.left)
        }
        i++;

         if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

        return root;

}

let arr =[2,1,3]
let root = buildTree(arr);

console.log(isValidBST(root))