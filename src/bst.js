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

  /**
   * Performs in-order (left-root-right) traversal
   * @param {Function} callback - Function to call on each node
   * @throws {Error} If no callback is provided
   */
  inOrderForEach(callback) {
    this.isCallbackExists(callback);

    this._inOrderRec(this.root, callback);
  }

  _inOrderRec(node, callback) {
    if (node === null) return;

    this._inOrderRec(node.left, callback);
    callback(node);
    this._inOrderRec(node.right, callback);
  }

  /**
   * Performs pre-order (root-left-right) traversal
   * @param {Function} callback - Function to call on each node
   * @throws {Error} If no callback is provided
   */
  preOrderForEach(callback) {
    this.isCallbackExists(callback);

    this._preOrderRec(this.root, callback);
  }

  _preOrderRec(node, callback) {
    if (node === null) return;

    callback(node);
    this._preOrderRec(node.left, callback);
    this._preOrderRec(node.right, callback);
  }

  /**
   * Performs post-order (left-right-root) traversal
   * @param {Function} callback - Function to call on each node
   * @throws {Error} If no callback is provided
   */
  postOrderForEach(callback) {
    this.isCallbackExists(callback);

    this._postOrderRec(this.root, callback);
  }

  _postOrderRec(node, callback) {
    if (node === null) return;

    this._postOrderRec(node.left, callback);
    this._postOrderRec(node.right, callback);
    callback(node);
  }

  /**
   * Returns the height of the node containing the given value
   * Height is the number of edges in the longest path from the node to a leaf
   * @param {number} value - Value to find
   * @returns {number|null} Height of the node, or null if not found
   */
  height(value) {
    const node = this.find(value);
    if (node === null) return null;

    return this._heightRec(node);
  }

  _heightRec(node) {
    if (node === null) return -1;

    const leftHeight = this._heightRec(node.left);
    const rightHeight = this._heightRec(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * Returns the depth of the node containing the given value
   * Depth is the number of edges from the node to the root
   * @param {number} value - Value to find
   * @returns {number|null} Depth of the node, or null if not found
   */
  depth(value) {
    return this._depthRec(this.root, value, 0);
  }

  _depthRec(node, value, currentDepth) {
    if (node === null) return null;

    if (node.data === value) return currentDepth;

    if (value < node.data) {
      return this._depthRec(node.left, value, currentDepth + 1);
    }

    return this._depthRec(node.right, value, currentDepth + 1);
  }

  /**
   * Checks if the tree is balanced
   * A tree is balanced if the height difference between left and right subtrees
   * is no more than 1 for every node
   * @returns {boolean} True if balanced, false otherwise
   */
  isBalanced() {
    return this._isBalancedRec(this.root) !== -1;
  }

  _isBalancedRec(node) {
    if (node === null) return 0;

    const leftHeight = this._isBalancedRec(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = this._isBalancedRec(node.right);
    if (rightHeight === -1) return -1;

    // Check balance condition for current node
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * Rebalances an unbalanced tree
   */
  rebalance() {
    const values = [];
    this.inOrderForEach((node) => values.push(node.data));
    this.root = this.buildTree(values);
  }
}

export { Tree, Node };
