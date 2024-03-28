interface IdoubleLinkedList<T> {
   prepend(data: T): NodeD<T>;
   append(data: T): NodeD<T>;
   getLastNode(node: NodeD<T>): NodeD<T>;
   deleteNode(node: NodeD<T> | null): void;
   traverse(): NodeD<T>[];
   size(): number;
   searchNode(comparator: (data: T) => boolean): NodeD<T> | null;
}

interface IdoubleNode<T> {
   next: IdoubleNode<T> | null;
   prev: IdoubleNode<T> | null;
}

class MyNode<T> implements IdoubleNode<T> {
   public next: MyNode<T> | null = null;
   public prev: MyNode<T> | null = null;
   constructor(public myNodeData: T) {}
}

class NodeD<T> {
   public next: NodeD<T> | null = null;
   public prev: NodeD<T> | null = null;
   constructor(public nodeData: T) {}
}

export class DoubleLinkedList<T> implements IdoubleLinkedList<T> {
   private head: NodeD<T> | null = null;
   getLastNode(node: NodeD<T>) {
      return node.next ? this.getLastNode(node.next) : node;
   }
   public prepend(data: T): NodeD<T> {
      const newNode = new NodeD(data);
      if (!this.head) {
         this.head = newNode;
      } else {
         this.head.prev = newNode;
         newNode.next = this.head;
         this.head = newNode;
      }
      return newNode;
   }

   public append(data: T): NodeD<T> {
      const newNode = new NodeD(data);
      if (!this.head) {
         this.head = newNode;
      } else {
         const lastNode = this.getLastNode(this.head);
         lastNode.next = newNode;
         newNode.prev = lastNode;
      }
      return newNode;
   }
   public deleteNode(node: any) {
      const prevNode = node.prev;
      const nextNode = node.next ? node.next : null;
      if (!node.prev) {
         this.head = node.next;
      } else {
         prevNode.next = node.next;
         nextNode.prev = prevNode;
      }
   }
   public traverse() {
      const nodeArray: NodeD<T>[] = [];
      if (!this.head) {
         return nodeArray;
      }
      let startNode: NodeD<T> | null = this.head;
      while (startNode) {
         nodeArray.push(startNode);
         startNode = startNode.next;
      }
      return nodeArray;
   }
   public size(): number {
      return this.traverse().length;
   }
   public searchNode(comparator: (data: T) => boolean): NodeD<T> | null {
      const checkNext = (node: NodeD<T>): NodeD<T> | null => {
         if (comparator(node.nodeData)) {
            return node;
         }
         return node.next ? checkNext(node.next) : null;
      };
      return this.head ? checkNext(this.head) : null;
   }
}
