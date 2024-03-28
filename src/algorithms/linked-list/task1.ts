import { testLinkedList, emptyLinkedList, LinkedList } from "../../data-structures/linked-list";

import { DoubleLinkedList } from "../../data-structures/double-linked-list";

// const linkedList = new LinkedList(null);
// linkedList.add(5);
// linkedList.add(10);
// linkedList.add(15);

// console.log(linkedList);

// interface Post {
//    title: string;
// }

const myDoubleLinkedList = new DoubleLinkedList<string>();
myDoubleLinkedList.append("0");
myDoubleLinkedList.append("1");
myDoubleLinkedList.append("2");
myDoubleLinkedList.append("3");
const traverse = myDoubleLinkedList.traverse();
const node = myDoubleLinkedList.searchNode(title => title === "1");

console.log(myDoubleLinkedList);

myDoubleLinkedList.deleteNode(node);
console.log(myDoubleLinkedList.traverse());
