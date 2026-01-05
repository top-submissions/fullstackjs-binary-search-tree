# Binary Search Trees

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-Lesson-red)](https://www.theodinproject.com/lessons/javascript-binary-search-trees)

> A hands-on exploration of balanced Binary Search Trees built with JavaScript as part of The Odin Project curriculum. This repository documents my learning journey through implementing fundamental computer science data structures and algorithms.

## 📋 Table of Contents

- [Binary Search Trees](#binary-search-trees)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Building for Production](#building-for-production)
  - [📚 What I Learned](#-what-i-learned)

## ✨ Features

- **Balanced Tree Construction** - Automatically builds balanced BSTs from arrays with O(log n) operations
- **Complete CRUD Operations** - Insert, delete, and find operations that maintain tree structure
- **Multiple Traversal Methods** - Level-order (BFS), in-order, pre-order, and post-order (DFS) implementations
- **Tree Analysis Tools** - Calculate height, depth, and check balance status of any node
- **Smart Rebalancing** - Automatically rebalance unbalanced trees to maintain optimal performance
- **Visual Tree Display** - Pretty print function to visualize tree structure in the console
- **Comprehensive Testing** - Full test suite with 30+ test cases covering all functionality

## 🚀 Getting Started

Want to run this project locally? Here's how:

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (comes with Node.js)
- Git for version control
- A code editor (VS Code recommended)

### Installation

1. Clone the repository

```bash
git clone https://github.com/top-submissions/fullstackjs-binary-search-tree.git
cd fullstackjs-binary-search-tree
```

1. Install dependencies (if any are added in the future)

```bash
npm install
```

1. Run the driver script to see the BST in action

```bash
npm start
```

1. Run the test suite

```bash
node tests/bst.test.js
```

### Building for Production

1. The project uses ES6 modules, ensure your Node.js version supports them

```bash
node --version  # Should be v14.0.0 or higher
```

1. Import the Tree class in your own projects

```javascript
import { Tree } from './src/bst.js';

const myTree = new Tree([1, 2, 3, 4, 5]);
```

1. Use the BST methods as documented in the source code

```javascript
myTree.insert(6);
myTree.find(3);
myTree.levelOrderForEach((node) => console.log(node.data));
```

## 📚 What I Learned

- How to split an array into subarrays with `splice` to be used for traversing trees
- Using recursive functions as helper functions
- Deleting a node when it's a leaf node, it only has 1 child or both children
- Traversing each node via level order (with a `callback` that allows me to do an action for each node)
- Doing the same but via inorder, preorder and postorder
- Getting the height and depth of a node
- Checking if a node is balanced then rebalancing it

---

<div align="center">

Built with 💡 and ☕ as part of my journey through <a href="https://www.theodinproject.com/">The Odin Project</a>

</div>
