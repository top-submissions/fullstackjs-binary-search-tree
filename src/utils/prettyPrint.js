/**
 * Pretty prints a binary search tree in a visual tree structure
 * @param {Node} node - Root node of the tree or subtree
 * @param {string} prefix - Prefix for the current line
 * @param {boolean} isLeft - Whether the node is a left child
 */
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }

  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }

  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

export default prettyPrint;
