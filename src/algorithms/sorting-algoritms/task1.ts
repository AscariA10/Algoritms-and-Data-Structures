// const quickSort = array => {
//    if (array.length <= 1) {
//       return array;
//    }

//    const pivot = array[Math.floor(array.length / 2)];
//    const leftArray = [];
//    const rightArray = [];

//    for (let i = 0; i < array.length; i += 1) {
//       if (array[i] < pivot) {
//          // @ts-ignore
//          leftArray.push(array[i]);
//       } else if (array[i] >= pivot) {
//          // @ts-ignore
//          rightArray.push(array[i]);
//       }
//    }
//    console.log("pivot", pivot);
//    console.log("leftArray", leftArray);
//    console.log("rightArray", rightArray);
//    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
// };

function quickSort(arr) {
   if (arr.length <= 1) {
      return arr;
   }

   const pivot = arr[Math.floor(arr.length / 2)];
   const less = [];
   const greater = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
         // @ts-ignore
         less.push(arr[i]);
      } else if (arr[i] > pivot) {
         // @ts-ignore
         greater.push(arr[i]);
      }
   }

   return [...quickSort(less), pivot, ...quickSort(greater)];
}

// // Приклад використання:
// const array = [5, 3, 1, 6, 2, 4];
// const sortedArray = quickSort(array);
// console.log(sortedArray);

const myArray = [4, 2, 5, 7, 6, 7, 1];

console.log(quickSort(myArray));
