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
