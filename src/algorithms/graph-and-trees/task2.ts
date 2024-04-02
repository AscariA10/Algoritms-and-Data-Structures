// ? make from sorted array lovest-hight binary search tree

import { Queue } from "../../data-structures/utils/queue";
import { BST } from "../../data-structures/utils/bst";

const insertBalanced = array => {
   let bst = new BST();
   const queue = new Queue();

   queue.add(array);
   let currentArray;

   while (!queue.isEmpty()) {
      currentArray = queue.remove();
      bst.insert(currentArray[Math.floor(currentArray.length / 2)]);
      //   * take from start to middle
      if (currentArray.slice(0, Math.floor(currentArray.length / 2)).length > 0) {
         queue.add(currentArray.slice(0, Math.floor(currentArray.length / 2)));
      }
      //   * take from middle to end
      if (currentArray.slice(Math.floor(currentArray.length / 2) + 1)) {
         queue.add(currentArray.slice(Math.floor(currentArray.length / 2) + 1));
      }
   }
   return bst;
};

/* TEST */
const arr1 = [1, 2, 3, 4, 5, 6];
// const tree1 = insertBalanced(arr1);
// console.log(tree1.printLevelOrder());

// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const tree2 = insertBalanced(arr2);
// tree2.printLevelOrder();
// Define a TreeNode class to represent a node in the Binary Search Tree (BST)

class TreeNode {
   constructor(value?) {
      //@ts-ignore
      this.value = value; // The value of the node
      //@ts-ignore
      this.left = null; // Pointer to the left child node
      //@ts-ignore
      this.right = null; // Pointer to the right child node
   }
}

// Function to convert a sorted array to a Binary Search Tree (BST)
function sortedArrayToBST(arr) {
   if (!arr.length) return null; // If the array is empty, return null
   // Call the helper function to construct the BST and return the root of the BST
   return constructBST(arr, 0, arr.length - 1);
}

// Helper function to construct the BST from the sorted array
function constructBST(arr, start, end) {
   if (start > end) return null; // Base case: if start index is greater than end index, return null

   let mid = Math.floor((start + end) / 2); // Calculate the middle index of the array
   let node = new TreeNode(arr[mid]); // Create a new TreeNode with the middle element as the value

   // Recursively construct the left subtree using the left half of the array
   //@ts-ignore
   node.left = constructBST(arr, start, mid - 1);
   // Recursively construct the right subtree using the right half of the array
   //@ts-ignore
   node.right = constructBST(arr, mid + 1, end);

   return node; // Return the constructed node
}

// Example usage:
let sortedArray = [1, 2, 3, 4, 5, 6, 7];
// Convert the sorted array to a BST and get the root of the BST
let root = sortedArrayToBST(sortedArray);

// Helper function to print the tree using in-order traversal
function inOrderTraversal(root) {
   if (root !== null) {
      inOrderTraversal(root.left); // Traverse the left subtree
      // Print the value of the current node
      inOrderTraversal(root.right); // Traverse the right subtree
      console.log(root.value);
   }
}

// Perform in-order traversal on the constructed BST
inOrderTraversal(root);
