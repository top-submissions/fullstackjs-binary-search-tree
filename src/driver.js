import { Tree } from './bst.js';
import prettyPrint from './utils/prettyPrint.js';

/**
 * Generates an array of random numbers less than the specified maximum
 * @param {number} size - Number of elements to generate
 * @param {number} max - Maximum value (exclusive)
 * @returns {number[]} Array of random numbers
 */
function generateRandomArray(size, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

/**
 * Prints all elements in different traversal orders
 * @param {Tree} tree - Binary search tree to traverse
 */
function printAllOrders(tree) {
  console.log('\n📊 Traversal Orders:');

  // Level Order
  const levelOrder = [];
  tree.levelOrderForEach((node) => levelOrder.push(node.data));
  console.log('Level Order:   ', levelOrder.join(', '));

  // Pre Order
  const preOrder = [];
  tree.preOrderForEach((node) => preOrder.push(node.data));
  console.log('Pre Order:     ', preOrder.join(', '));

  // In Order
  const inOrder = [];
  tree.inOrderForEach((node) => inOrder.push(node.data));
  console.log('In Order:      ', inOrder.join(', '));

  // Post Order
  const postOrder = [];
  tree.postOrderForEach((node) => postOrder.push(node.data));
  console.log('Post Order:    ', postOrder.join(', '));
}
