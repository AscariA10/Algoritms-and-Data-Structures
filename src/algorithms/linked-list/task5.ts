//  ? make sum of two numbers which write in 2 LL

import { LinkedList, printList } from "../../data-structures/linked-list";

const sumList = (list1, list2) => {};

const a = new LinkedList(7);
const b = new LinkedList(1);
const c = new LinkedList(6);

a.next = b;
b.next = c;

const d = new LinkedList(5);
const e = new LinkedList(9);
const f = new LinkedList(2);

d.next = e;
e.next = f;

// const newHead = sumList(a, d);

// printList(newHead);

// const sumList = (firstList, secondList, carry = 0) => {
//    if (!firstList && !secondList && !carry) {
//       return null;
//    }

//      const head = null;
//    let currentValue = carry;
//    const tail = new LinkedList(0);
//    if (firstList !== null) {
//       currentValue += firstList.value;
//    }
//    if (secondList !== null) {
//       currentValue += secondList.value;
//    }

//    if (firstList !== null || secondList !== null) {
//       let more = new LinkedList(
//          sumList(
//             firstList === null ? null : firstList.next,
//             secondList === null ? null : secondList.next,
//             currentValue >= 10 ? 1 : 0
//          )?.value
//       );
//       tail.value = currentValue % 10;
//       tail.next = more;
//    }
//    console.log("res", tail.value);
//    return tail;
// };

/* TEST */

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912
