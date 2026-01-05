/**
 * Node class represents a single node in the binary search tree
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Tree class represents a balanced binary search tree
 */
class Tree {
  constructor(array) {
    // Remove duplicates and sort the array
    const uniqueSorted = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(uniqueSorted);
  }

  /**
   * Builds a balanced BST from a sorted array
   * @param {number[]} array - Sorted array of unique values
   * @returns {Node|null} Root node of the BST
   */
  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);

    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));

    return node;
  }

  /**
   * Inserts a value into the BST
   * @param {number} value - Value to insert
   */
  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(node, value) {
    // Base case: found the position to insert
    if (node === null) {
      return new Node(value);
    }

    // Avoid duplicates
    if (value === node.data) {
      return node;
    }

    // Traverse left or right
    if (value < node.data) {
      node.left = this._insertRec(node.left, value);
    } else {
      node.right = this._insertRec(node.right, value);
    }

    return node;
  }
}

export { Tree, Node };
