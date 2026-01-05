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

  /**
   * Deletes a value from the BST
   * @param {number} value - Value to delete
   */
  deleteItem(value) {
    this.root = this._deleteRec(this.root, value);
  }

  _deleteRec(node, value) {
    if (node === null) {
      return null;
    }

    // Find the node to delete
    if (value < node.data) {
      node.left = this._deleteRec(node.left, value);
      return node;
    } else if (value > node.data) {
      node.right = this._deleteRec(node.right, value);
      return node;
    }

    // Node to delete found - handle three cases:

    // Case 1: Node with no children (leaf)
    if (node.left === null && node.right === null) {
      return null;
    }

    // Case 2: Node with one child
    if (node.left === null) {
      return node.right;
    }
    if (node.right === null) {
      return node.left;
    }

    // Case 3: Node with two children
    // Find inorder successor (smallest in right subtree)
    let successor = node.right;
    while (successor.left !== null) {
      successor = successor.left;
    }

    // Replace node's data with successor's data
    node.data = successor.data;

    // Delete the successor
    node.right = this._deleteRec(node.right, successor.data);

    return node;
  }

  /**
   * Finds and returns the node with the given value
   * @param {number} value - Value to find
   * @returns {Node|null} Node containing the value, or null if not found
   */
  find(value) {
    return this._findRec(this.root, value);
  }

  _findRec(node, value) {
    if (node === null || node.data === value) {
      return node;
    }

    if (value < node.data) {
      return this._findRec(node.left, value);
    }

    return this._findRec(node.right, value);
  }

  isCallbackExists(callback) {
    if (!callback) {
      throw new Error('Callback function is required');
    }
  }

  /**
   * Performs level-order (breadth-first) traversal
   * @param {Function} callback - Function to call on each node
   * @throws {Error} If no callback is provided
   */
  levelOrderForEach(callback) {
    this.isCallbackExists(callback);

    if (this.root === null) return;

    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  /**
   * Performs level-order traversal using recursion
   * @param {Function} callback - Function to call on each node
   * @throws {Error} If no callback is provided
   */
  levelOrderForEachRecursive(callback) {
    this.isCallbackExists(callback);

    const height = this.height(this.root?.data);
    if (height === null) return;

    for (let level = 0; level <= height; level++) {
      this._levelOrderAtLevel(this.root, level, callback);
    }
  }

  _levelOrderAtLevel(node, level, callback) {
    if (node === null) return;

    if (level === 0) {
      callback(node);
    } else {
      this._levelOrderAtLevel(node.left, level - 1, callback);
      this._levelOrderAtLevel(node.right, level - 1, callback);
    }
  }
}

export { Tree, Node };
