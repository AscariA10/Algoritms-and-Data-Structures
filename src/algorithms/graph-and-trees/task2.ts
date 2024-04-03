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
   console.log(bst);
   return bst;
};

/* TEST */
const arr1 = [1, 2, 3, 4, 5, 6];
const tree1 = insertBalanced(arr1);
// console.log(tree1.printLevelOrder());
