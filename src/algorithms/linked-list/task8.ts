// ? lood detection by Floyds algoirthm

import { LinkedList } from "../../data-structures/linked-list";

const loopStartDetection = head => {
   let turtle = head;
   let rabbit = head;

   //* find intersection point
   while (rabbit !== null && rabbit.next !== null) {
      turtle = turtle.next;
      rabbit = rabbit.next.next;
      if (turtle === rabbit) {
         break;
      }
   }
   //* error check
   if (rabbit === null || rabbit.next === null) {
      return null;
   }

   //* find interssection point
   turtle = head;
   while (turtle !== rabbit) {
      turtle = turtle.next;
      rabbit = rabbit.next;
   }

   return turtle;
};

const loopDetection = head => {
   let turtle = head;
   let rabbit = head;
   while (rabbit !== null) {
      turtle = turtle.next;
      rabbit = rabbit.next;
      // * check for loop detection
      if (turtle === rabbit && rabbit !== head.next) {
         return turtle;
      }
      if (rabbit !== null) {
         rabbit = rabbit.next;
         if (rabbit === turtle) {
            return turtle;
         }
      }
   }
   return false;
};

/* TEST */
// A -> B -> C -> D -> E -> C

const a = new LinkedList("a");
const b = new LinkedList("b");
const c = new LinkedList("c");
const d = new LinkedList("d");
const e = new LinkedList("e");
const f = new LinkedList("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;

// console.log(loopDetection(a), true);
console.log(loopStartDetection(a), true);

const A = new LinkedList("a");
const B = new LinkedList("b");
const C = new LinkedList("c");
const D = new LinkedList("d");
const E = new LinkedList("e");
const F = new LinkedList("f");

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

// console.log(loopDetection(A), false);
console.log(loopStartDetection(A), false);
