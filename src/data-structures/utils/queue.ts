import { LinkedList } from "../linked-list";

export const Queue = function () {
   this.front = null;
   this.back = null;
};

Queue.prototype.add = function (value) {
   var node = new LinkedList(value);
   if (this.front === null) {
      this.front = node;
      this.back = node;
   } else {
      var prevBack = this.back;
      this.back = node;
      prevBack.next = this.back;
   }
};

Queue.prototype.remove = function () {
   var removed: any = this.front;
   if (this.front === this.back) {
      this.front = null;
      this.back = null;
   } else {
      this.front = this.front.next;
   }
   return removed !== null ? removed.value : null;
};

Queue.prototype.peek = function () {
   return this.front !== null ? this.front.value : null;
};

Queue.prototype.isEmpty = function () {
   return this.front === null;
};
