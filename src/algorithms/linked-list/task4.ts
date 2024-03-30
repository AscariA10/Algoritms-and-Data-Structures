// ? rearrange list around given value

// I try to do it around 1 list and sending values to head and tail

import { LinkedList } from "../../data-structures/linked-list";

const readjustment = (currentNode, middleValue) => {
   let head = currentNode;
   let tail = currentNode;

   while (currentNode !== null) {
      let nextNode = currentNode.next;
      if (currentNode.value < middleValue) {
         currentNode.next = head;
         head = currentNode;
      } else {
         tail.next = currentNode;
         tail = currentNode;
      }
      currentNode = nextNode;
   }

   tail.next = null;
   return head;
};

var printList = function (a) {
   while (a !== null) {
      console.log(a.value);
      a = a.next;
   }
};

var a24 = new LinkedList(3);
var b24 = new LinkedList(5);
var c24 = new LinkedList(8);
var d24 = new LinkedList(5);
var e24 = new LinkedList(10);
var f24 = new LinkedList(2);
var g24 = new LinkedList(1);

a24.next = b24;
b24.next = c24;
c24.next = d24;
d24.next = e24;
e24.next = f24;
f24.next = g24;

const newa24 = readjustment(a24, 5);
printList(newa24);
