interface IlistNode {
   data: any;
   next: IlistNode | null;
}

interface IlinkedList {
   head: IlistNode | null;
   getSize(): number;
}

class ListNode implements IlistNode {
   next;
   constructor(public data) {
      this.data = data;
      this.next = null;
   }
}

class LinkedList implements IlinkedList {
   constructor(public head) {
      this.head = head || null;
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
}

const testNode1 = new ListNode(5);
const testNode2 = new ListNode(10);
const testNode3 = new ListNode(15);
testNode1.next = testNode2;
testNode2.next = testNode3;

export const testLinkedList = new LinkedList(testNode1);

// console.log(testLinkedList);
