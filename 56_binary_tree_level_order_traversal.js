var levelOrder = function(root) {
    if(!root) return [];

    let result = [];
    let queue = [root];

    while(queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];

        for(let i = 0; i < levelSize; i++){
            let node = queue.shift()
            currentLevel.push(node.val)

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        result.push(currentLevel)
    }
    return result;
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

let arr =[3,9,20,null,null,15,7]
let root = buildTree(arr);

console.log(levelOrder(root))