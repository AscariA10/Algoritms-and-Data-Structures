const merge = (firstArr, secondArr) => {
   const newArr = [];
   let firstInd = 0;
   let secondInd = 0;
   while (firstInd < firstArr.length && secondInd < secondArr.length) {
      if (firstArr[firstInd] < secondArr[secondInd]) {
         // @ts-ignore
         newArr.push(firstArr[firstInd]);
         firstInd += 1;
      } else {
         // @ts-ignore
         newArr.push(secondArr[secondInd]);
         secondInd += 1;
      }
   }
   return [...newArr, ...firstArr.slice(firstInd), ...secondArr.slice(secondInd)];
};

const mergeSort = arr => {
   if (!arr || !arr.length) {
      return null;
   }
   if (arr.length <= 1) {
      return arr;
   }
   const middle = Math.floor(arr.length / 2);
   const arrLeft = arr.slice(0, middle);
   const arrRight = arr.slice(middle);
   return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

const testitems = [9, 8, 7, 6, 5, 4, 3, 2, 4, 5, 6, 7, 8, 9, 0];

const MSresult = mergeSort(testitems);
console.log(MSresult);
