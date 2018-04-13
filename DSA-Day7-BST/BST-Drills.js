        //    3
        //    /\
        //   /  \
        // 1     4
        //     /  \
        //         6
                

const BST = new BinarySearchTree();
const emptyBST = new BinarySearchTree()

BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);

function heightBST(bst) {
    if(bst.key === null) {
        return -1;
    }
    else if (bst.right && bst.left === null) {
        return 0
    }
else if (bst.right === null) {
    return 1 + heightBST(bst.right);
}
else if (bst.right === null) {
    return 1 + heightBST(bst.left);
}
else {
    return Math.max(heightBST(bst.left), heightBST(bst.right))
}
}
console.log(heightBST(BST));