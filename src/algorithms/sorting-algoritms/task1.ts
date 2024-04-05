// ? make merge of two sorted arrays
// ? one of them have enough place for two

const arrayMerge = (array1, array2, length1, length2) => {
   // array1 > array2
   let pointer1 = length1 - 1;
   let pointer2 = length2 - 1;
   let mergedPointer = length1 + length2 - 1;

   while (pointer2 >= 0) {
      if (pointer1 >= 0 && array1[pointer1] > array2[pointer2]) {
         array1[mergedPointer] = array1[pointer1];
         pointer1 -= 1;
      } else {
         array1[mergedPointer] = array2[pointer2];
         pointer2 -= 1;
      }
      mergedPointer -= 1;
   }

   // for (let i = mergedPointer; i >= 0; i -= 1) {
   //    console.log(array1[i]);
   //    if (array1[pointer1] > array2[pointer2] && pointer1 >= 0) {
   //       array1[i] = array1[pointer1];
   //       pointer1 -= 1;
   //    } else {
   //       array1[i] = array2[pointer2];
   //       pointer2 -= 1;
   //    }
   // }
   return array1;
};

const resultAM = arrayMerge([1, 3, 5, 7, 9, , , ,], [2, 4, 6, 8], 5, 4);
console.log(resultAM);
