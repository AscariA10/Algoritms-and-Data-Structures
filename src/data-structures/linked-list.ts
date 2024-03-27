interface IlistNode {
   data: any;
   next: IlistNode | null;
}

interface IlinkedList {
   head: IlistNode | null;
   add(data: any): void;
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
   //    private head: IlistNode | null = null;
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

const testNode1 = new ListNode(5);
const testNode2 = new ListNode(10);
const testNode3 = new ListNode(15);
testNode1.next = testNode2;
testNode2.next = testNode3;

export const testLinkedList = new LinkedList(testNode1);
export const emptyLinkedList = new LinkedList(null);
// console.log(testLinkedList);
