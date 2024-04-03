// ? for binary tree create method, which returns every layer as LL

import { BST } from "../../data-structures/utils/bst";
import { Queue } from "../../data-structures/utils/queue";
import { LinkedList } from "../../data-structures/linked-list";

const listOfDepths = bst => {
   // ! variables for data

   const listOfLists = [];
   let list = null;
   let newNode = null;
   let q = new Queue();
   let nextQ = new Queue();
   let currentNode = bst;

   // * add nodes to queue
   q.add(currentNode);

   while (!q.isEmpty()) {
      // * adding node to linked list or creating if new
      currentNode = q.remove();
      newNode = new LinkedList(currentNode.value);
      //   @ts-ignore
      newNode.next = list;
      list = newNode;

      // * adding nodes to linked list if they exist
      if (currentNode.left !== null) {
         nextQ.add(currentNode.left);
      }
      if (currentNode.right !== null) {
         nextQ.add(currentNode.right);
      }

      // * add linked list of current level to array with lists
      if (q.isEmpty()) {
         // @ts-ignore
         listOfLists.push(list);
         list = null;
         q = nextQ;
         nextQ = new Queue();
      }
   }
   return listOfLists;
};

/* TEST */
// 1, 2, 3, 4, 5, 6, 7
var tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(listOfDepths(tree));
