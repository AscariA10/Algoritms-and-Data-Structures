import { Queue } from "./queue";

export const BST = function (value?) {
   this.value = value;
   this.left = null;
   this.right = null;
   this.isRightClose = false;
};

BST.prototype.insert = function (value) {
   if (value < this.value) {
      if (this.left === null) {
         this.left = new BST(value);
      } else {
         this.left.insert(value);
      }
   } else {
      if (this.right === null) {
         this.right = new BST(value);
      } else {
         this.right.insert(value);
         return;
      }
   }
};

BST.prototype.printLevelOrder = function () {
   let level = [];
   let q = new Queue();
   let nextq = new Queue();
   let currNode;

   q.add(this);
   while (!q.isEmpty()) {
      currNode = q.remove();
      // @ts-ignore
      level.push(currNode.value);
      if (currNode.left !== null) {
         nextq.add(currNode.left);
      }
      if (currNode.right !== null) {
         nextq.add(currNode.right);
      }
      if (q.isEmpty()) {
         console.log(level.join(","));
         level = [];
         q = nextq;
         nextq = new Queue();
      }
   }
};
/* TEST */
// 1, 2, 3, 4, 5, 6, 7
// @ts-ignore
// var bst = new BST();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// bst.printLevelOrder();
