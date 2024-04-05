// const quickSort = (array: Array<number>) => {
//    if (array.length < 2) return array;

//    const pivot: number = array[0];
//    const leftArray: Array<number> = [];
//    const rightArray: Array<number> = [];

//    for (let i = 0; i < array.length; i += 1) {
//       if (array[i] <= pivot) {
//          leftArray.push(array[i]);
//       }
//       if (array[i] > pivot) {
//          rightArray.push(array[i]);
//       }
//    }

//    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
// };

// const myArray = [2, 3, 4, 5, 66, 9, 1, 0, 5, 3, 34, 56, 67, 12, 3422, 534675687, 6];

// console.log(quickSort(myArray));
