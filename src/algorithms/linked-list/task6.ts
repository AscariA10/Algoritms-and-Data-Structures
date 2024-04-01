// ? check is Linked list a palindrom

// * use iterational method with stack

import { LinkedList } from "../../data-structures/linked-list";

const isPalindromeChecker = head => {
   // ! variables for function
   let middle = head;
   let end = head;
   let isEven = true;
   let firstHalf: any = null;
   let frontNode: any = null;

   // ! cycle for creating reversed 1 st part
   while (end.next !== null) {
      isEven = true;
      if (firstHalf === null) {
         firstHalf = new LinkedList(middle.value);
      } else {
         // ! adding to head
         frontNode = firstHalf;
         firstHalf = new LinkedList(middle.value);
         firstHalf.next = frontNode;
      }

      middle = middle.next;
      end = end.next;
      console.log(firstHalf);
      // ! check for even
      if (end.next !== null) {
         end = end.next;
         isEven = false;
      }
   }

   if (!isEven) {
      middle = middle.next;
   }

   // ! check for equality every node
   while (middle !== null) {
      if (middle.value !== firstHalf.value) {
         return false;
      }
      middle = middle.next;
      if (firstHalf !== null) {
         firstHalf = firstHalf.next;
      }
   }
   return true;
   //! end of function
};

/* TEST */

var a = new LinkedList("a");
var b = new LinkedList("b");
var c = new LinkedList("c");
var d = new LinkedList("d");
var e = new LinkedList("c");
var f = new LinkedList("b");
var g = new LinkedList("a");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(isPalindromeChecker(a));
