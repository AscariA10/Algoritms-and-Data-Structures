// ? delete node in the middle, not first not last
// we have data only from node, so just rewrite data from next
// node to current

const LinkedList = function (value) {
   this.value = value;
   this.next = null;
};
const deleteMidNode = node => {
   let currentNode = node;

   while (currentNode !== null && currentNode.next !== null) {
      currentNode.value = currentNode.next.value;
      if (currentNode.next.next === null) {
         currentNode.next = null;
      }
      currentNode = currentNode.next;
      console.log(1);
   }
   //    if (!nextNode) {
   //       return "this is last";
   //    }
};

/* TEST */

var printList = function (head) {
   while (head !== null) {
      console.log(head);
      head = head.next;
   }
   console.log("done printing");
};

var a23 = new LinkedList("a");
var b23 = new LinkedList("b");
var c23 = new LinkedList("c");
var d23 = new LinkedList("d");
var e23 = new LinkedList("e");
var f23 = new LinkedList("f");

a23.next = b23;
b23.next = c23;
c23.next = d23;
d23.next = e23;
e23.next = f23;

printList(a23);
deleteMidNode(e23);
printList(a23);
