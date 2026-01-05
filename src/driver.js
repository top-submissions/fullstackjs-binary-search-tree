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

/**
 * Main driver script to demonstrate BST functionality
 */
function main() {
  console.log('🌳 Binary Search Tree - Driver Script\n');
  console.log('='.repeat(60));

  // Step 1: Create a binary search tree from random numbers < 100
  console.log('\n1️⃣  Creating BST from random numbers < 100...');
  const randomArray = generateRandomArray(15, 100);
  console.log('Random array:', randomArray);

  const tree = new Tree(randomArray);
  console.log('\n🌲 Initial Tree Structure:');
  prettyPrint(tree.root);

  // Step 2: Confirm that the tree is balanced
  console.log('\n2️⃣  Checking if tree is balanced...');
  console.log(`✅ Tree is balanced: ${tree.isBalanced()}`);

  // Step 3: Print out all elements in different orders
  console.log('\n3️⃣  Printing all elements in different orders:');
  printAllOrders(tree);

  // Step 4: Unbalance the tree by adding numbers > 100
  console.log('\n4️⃣  Unbalancing tree by adding numbers > 100...');
  const numbersToAdd = [101, 150, 200, 175, 300, 250, 400];
  console.log('Adding:', numbersToAdd.join(', '));

  numbersToAdd.forEach((num) => tree.insert(num));

  console.log('\n🌲 Unbalanced Tree Structure:');
  prettyPrint(tree.root);

  // Step 5: Confirm that the tree is unbalanced
  console.log('\n5️⃣  Checking if tree is balanced...');
  console.log(`❌ Tree is balanced: ${tree.isBalanced()}`);

  // Step 6: Balance the tree
  console.log('\n6️⃣  Rebalancing the tree...');
  tree.rebalance();

  console.log('\n🌲 Rebalanced Tree Structure:');
  prettyPrint(tree.root);

  // Step 7: Confirm that the tree is balanced
  console.log('\n7️⃣  Checking if tree is balanced...');
  console.log(`✅ Tree is balanced: ${tree.isBalanced()}`);

  // Step 8: Print out all elements in different orders
  console.log('\n8️⃣  Printing all elements in different orders:');
  printAllOrders(tree);

  // Additional demonstrations
  console.log('\n' + '='.repeat(60));
  console.log('\n🔍 Additional Feature Demonstrations:\n');

  // Test find operation
  const searchValue = tree.root.data;
  console.log(`Finding node with value ${searchValue}:`);
  const foundNode = tree.find(searchValue);
  console.log(`Found: ${foundNode ? `Yes (data: ${foundNode.data})` : 'No'}`);

  // Test height calculation
  const heightValue = tree.root.data;
  console.log(
    `\nHeight of node ${heightValue}: ${tree.height(heightValue)} edges`
  );

  // Test depth calculation
  const depthValue = tree.root.left?.data;
  if (depthValue !== undefined) {
    console.log(
      `Depth of node ${depthValue}: ${tree.depth(depthValue)} edges from root`
    );
  }

  // Test delete operation
  console.log(`\n🗑️  Deleting node with value ${searchValue}...`);
  tree.deleteItem(searchValue);
  console.log('\n🌲 Tree after deletion:');
  prettyPrint(tree.root);

  // Error handling demonstration
  console.log('\n⚠️  Error Handling Demonstration:');
  try {
    tree.levelOrderForEach();
  } catch (error) {
    console.log(`Caught error: ${error.message}`);
  }

  console.log('\n' + '='.repeat(60));
  console.log('\n✨ Driver script completed successfully!\n');
}

// Run the driver script
main();
