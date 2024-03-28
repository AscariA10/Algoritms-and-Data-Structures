interface IdoubleLinkedList<T> {
   prepend(data: T): NodeD<T>;
   append(data: T): NodeD<T>;
   getLastNode(node: NodeD<T>): NodeD<T>;
   //    deleteNode(node: NodeD<T>): void;
   //    traverse(): T[];
   //    size(): number;
   //    searchNode(comparator: (data: T) => boolean): NodeD<T> | null;
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

class DoubleLinkedList<T> implements IdoubleLinkedList<T> {
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
}
