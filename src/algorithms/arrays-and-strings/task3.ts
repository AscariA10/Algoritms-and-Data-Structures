// change all spaces to "%20"
// 1st var
// const wordToChange: string = "Mr John Smith    ";

// const transform = (word: string, wordLength: number): string => {
//    const wordArr: string[] = word.split("");
//        console.log(wordArr);
//    let pointer: number = 0;

//    while (pointer < wordLength) {
//       if (wordArr[pointer] === " ") {
//          wordArr[pointer] = "%20";
//            console.log(wordArr, wordArr.length);
//       }

//       pointer += 1;
//    }
//    return wordArr.join("");
// };

// const test1 = transform(wordToChange, 13);

// console.log(test1);

// 2nd var
const wordToChange: string = "Mr John Smith";

const transformFunc = word => {
   const wordArray = word.split("");
   let pointer = word.length;
   while (pointer > 0) {
      if (wordArray[pointer] === " ") {
         wordArray[pointer] = "%20";
      }
      pointer -= 1;
   }
   return wordArray.join("");
};

const result = transformFunc(wordToChange);

console.log(result);
