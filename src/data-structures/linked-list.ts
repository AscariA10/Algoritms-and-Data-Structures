interface IlistNode {
   data: any;
   next: IlistNode | null;
}

interface IlinkedList {
   head: IlistNode | null;
   add(data: any): void;
   remove(data: any): IlistNode | null;
   getSize(): number;
   getFirst(): IlistNode | null;
   getLast(): IlistNode | null;
   clear(): void;
}

export const LinkedList = function (value) {
   this.value = value;
   this.next = null;
};

export const printList = function (a) {
   while (a !== null) {
      console.log(a.value);
      a = a.next;
   }
};

export class ListNode implements IlistNode {
   next;
   constructor(public data) {
      this.data = data;
      this.next = null;
   }
}

export class TestLinkedList implements IlinkedList {
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

const testNode1 = new ListNode(5);
const testNode2 = new ListNode(10);
const testNode3 = new ListNode(15);
testNode1.next = testNode2;
testNode2.next = testNode3;

// export const testLinkedList = new LinkedList(testNode1);
// export const emptyLinkedList = new LinkedList(null);
// console.log(testLinkedList);
