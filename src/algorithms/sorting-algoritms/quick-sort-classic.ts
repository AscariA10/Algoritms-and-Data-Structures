const swap = (array, firstIndex, secondIndex) => {
   let current = array[firstIndex];
   array[firstIndex] = array[secondIndex];
   array[secondIndex] = current;
};

const partition = (array, leftElement, rightElement) => {
   let pivot = array[Math.floor((leftElement + rightElement) / 2)];
   let left = leftElement;
   let right = rightElement;

   while (left <= right) {
      while (array[left] < pivot) {
         left += 1;
      }
      while (array[right] > pivot) {
         right -= 1;
      }
      if (left <= right) {
         swap(array, left, right);
         left += 1;
         right -= 1;
      }
   }
   return left;
};

const quickSortQS = (array, left?, right?) => {
   let index;
   if (array.length > 1) {
      left = typeof left != "number" ? 0 : left;
      right = typeof right != "number" ? items.length - 1 : right;
      index = partition(items, left, right);
      if (left < index - 1) {
         quickSortQS(array, left, index - 1);
      }
      if (right > index) {
         quickSortQS(array, index, right);
      }
   }
   return array;
};

const items = [9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const resultQS = quickSortQS(items);
console.log(resultQS);
