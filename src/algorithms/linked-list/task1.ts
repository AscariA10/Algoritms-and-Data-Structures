// delete duplicates from linked list

interface IlistNode {
   data: any;
   next: IlistNode | null;
}

interface IlinkedList {
   head: IlistNode | null;
   add(data: any): void;
   remove(data: any): IlistNode | null;
   removeDups(): void;
   getSize(): number;
   getFirst(): IlistNode | null;
   getLast(): IlistNode | null;
   clear(): void;
}

class ListNode implements IlistNode {
   next;
   constructor(public data) {
      this.data = data;
      this.next = null;
   }
}

export class LinkedList implements IlinkedList {
   constructor(public head) {
      this.head = head || null;
   }

   add(data) {
      if (!this.head) {
         this.head = new ListNode(data);
      } else {
         let tale = this.head;
         while (tale.next) {
            tale = tale.next;
         }
         tale.next = new ListNode(data);
      }
   }

   removeDups() {
      const storage = {};
      let currentNode = this.head;
      let previousNode;
      while (currentNode != null) {
         if (storage.hasOwnProperty(currentNode.data)) {
            previousNode.next = currentNode.next;
         } else {
            storage[currentNode.data] = currentNode.data;
            previousNode = currentNode;
         }
         console.log(storage);
         currentNode = currentNode.next;
      }
   }

   remove(data) {
      if (!this.head) {
         return null;
      }
      let currentNode = this.head;
      let nextNode = currentNode.next;
      while (nextNode) {
         if (nextNode.data === data) {
            currentNode.next = nextNode.next;
            return nextNode;
         } else {
            currentNode = nextNode;
         }
      }
      return null;
   }

   getSize() {
      let head = this.head;
      let size = 0;
      while (head) {
         size += 1;
         head = head.next;
      }
      return size;
   }

   getFirst() {
      return this.head;
   }

   getLast() {
      let lastNode = this.head;
      if (lastNode) {
         while (lastNode.next) {
            lastNode = lastNode.next;
         }
      }
      return lastNode;
   }

   clear() {
      this.head = null;
   }
}

const linkedList11 = new LinkedList(null);
linkedList11.add(1);
linkedList11.add(2);
linkedList11.add(3);
linkedList11.add(3);
linkedList11.add(3);
linkedList11.add(4);
linkedList11.add(5);
linkedList11.add(5);
linkedList11.add(3);
linkedList11.add(5);
linkedList11.add(3);
linkedList11.add(5);
linkedList11.add(3);
linkedList11.removeDups();
console.log(linkedList11);

/* CLASS */
// const LinkedList = function (value) {
//    this.value = value;
//    this.next = null;
// };

/* FUNCTIONS */
// const checkDups = function (head, node) {
//    let currNode = head;
//    while (currNode !== node) {
//       if (currNode.value === node.value) {
//          return true;
//       }
//       currNode = currNode.next;
//    }
//    return false;
// };

// const printLinkedList = function (head) {
//    let node = head;
//    console.log("start of linked list");
//    while (node !== null) {
//       console.log(node.value);
//       node = node.next;
//    }
//    console.log("end of linked list");
// };

// function removeDub(head) {
//    let currentNode = head;
//    while (currentNode !== null) {
//       if (currentNode.next !== null && checkDups(currentNode, currentNode.next)) {
//          currentNode.next = currentNode.next.next;
//       } else {
//          currentNode = currentNode.next;
//       }
//    }
//    return head;
// }

// var a21 = new LinkedList("a");
// var b21 = new LinkedList("b");
// var c21 = new LinkedList("c");
// var d21 = new LinkedList("d");
// var e21 = new LinkedList("e");

// a21.next = b21;
// b21.next = c21;
// c21.next = d21;
// d21.next = e21;

// removeDub(a21);
// printLinkedList(a21);

// var f = new LinkedList("f");
// var g = new LinkedList("g");
// var h = new LinkedList("f");
// var i = new LinkedList("g");
// var j = new LinkedList("g");

// f.next = g;
// g.next = h;
// h.next = i;
// i.next = j;

// removeDub(f);
// printLinkedList(f);
