//  ? make sum of two numbers which write in 2 LL

import { LinkedList, printList } from "../../data-structures/linked-list";

const sumList = (list1, list2) => {
   let node1 = list1;
   let node2 = list2;
   let node3: any = null;
   let head3 = null;

   let ones = 0;
   let tens = 0;
   let sum = 0;

   while (node1 !== null || node2 !== null) {
      if (node1 === null) {
         sum = node2.value;
      } else if (node2 === null) {
         sum = node1.value;
      } else {
         sum = node1.value + node2.value;
      }

      sum += tens;
      ones = sum % 10;
      tens = Math.floor(sum / 10);

      if (node3 === null) {
         head3 = new LinkedList(ones);
         node3 = head3;
      } else {
         node3.next = new LinkedList(ones);
         node3 = node3.next;
      }

      if (node1 !== null) {
         node1 = node1.next;
      }
      if (node2 !== null) {
         node2 = node2.next;
      }
      //*   end of cycle
   }
   if (tens > 0) {
      node3.next = new LinkedList(tens);
      node3 = node3.next;
   }
   return head3;
};

// const sumList = (firstList, secondList, carry = 0) => {
//    const head = new ListNode(0);
//    const resultList = new TestLinkedList(head);
//    if (!firstList && !secondList && !carry) {
//       return null;
//    }
//    let currentValue = carry;

//    if (firstList !== null) {
//       currentValue += firstList.data;
//    }
//    if (secondList !== null) {
//       currentValue += secondList.data;
//    }
//    head.data = currentValue % 10;
//    if (firstList !== null || secondList !== null) {
//       let more = new ListNode(
//          sumList(
//             firstList === null ? null : firstList.next,
//             secondList === null ? null : secondList.next,
//             currentValue >= 10 ? 1 : 0
//          )
//       ).data;
//       resultList.add(more);
//    }
//    console.log("res", resultList);
//    return resultList;
// };

/* TEST */

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912
// const firstLL = new ListNode(7);
// const testLL1 = new TestLinkedList(firstLL);
// testLL1.add(1);
// testLL1.add(6);

// const secondLL = new ListNode(5);
// const testLL2 = new TestLinkedList(secondLL);
// testLL2.add(9);
// testLL2.add(2);

// console.log(testLL1);
// console.log(testLL2);

const a = new LinkedList(9);
const b = new LinkedList(3);
const c = new LinkedList(9);

a.next = b;
b.next = c;

const d = new LinkedList(9);
const e = new LinkedList(5);
const f = new LinkedList(9);

d.next = e;
e.next = f;

const newHead = sumList(a, d);
console.log(newHead);
printList(newHead);
