// ? find k-last element from tale of the list

// 1st variant if length is known, just iterate length - k

var linkedList = function (value) {
   this.value = value;
   this.next = null;
};

const findKthToLast = (k, head) => {
   let slowPointer = head;
   let fastPointer = head;

   for (let i = 0; i < k; i += 1) {
      if (!fastPointer) {
         return "out";
      }
      fastPointer = fastPointer.next;
   }

   while (fastPointer != null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next;
   }

   return slowPointer?.value;
};

/* TESTS */
var a22 = new linkedList("1");
var b22 = new linkedList("2");
var c22 = new linkedList("3");
var d22 = new linkedList("4");
var e22 = new linkedList("5");
var f22 = new linkedList("6");
var g22 = new linkedList("7");

a22.next = b22;
b22.next = c22;
c22.next = d22;
d22.next = e22;
e22.next = f22;
f22.next = g22;

console.log(findKthToLast(1, a22));
console.log(findKthToLast(2, a22));

console.log(findKthToLast(3, a22));
console.log(findKthToLast(4, a22));
console.log(findKthToLast(5, a22));
// console.log(findKthToLast(0, a22));
console.log(findKthToLast(6, a22));
// console.log(findKthToLast(3, a22));
// console.log(findKthToLast(10, a22));
// console.log(findKthToLast(-1, a22));
