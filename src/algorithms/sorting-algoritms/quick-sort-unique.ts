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

// function quickSort(arr) {
//     if (arr.length <= 1) {
//        return arr;
//     }

//     const pivot = arr[Math.floor(arr.length / 2)];
//     const less = [];
//     const greater = [];

//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i] < pivot) {
//           // @ts-ignore
//           less.push(arr[i]);
//        } else if (arr[i] > pivot) {
//           // @ts-ignore
//           greater.push(arr[i]);
//        }
//     }

//     return [...quickSort(less), pivot, ...quickSort(greater)];
//  }

//  // Приклад використання:
//  const array = [5, 3, 1, 6, 2, 4];
//  const sortedArray = quickSort(array);
//  console.log(sortedArray);

//  const myArray = [4, 2, 5, 7, 6, 7, 1];

//  console.log(quickSort(myArray));
