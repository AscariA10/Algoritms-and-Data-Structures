// change all spaces to "%20"

const wordToChange: string = "Mr John Smith    ";

const transform = (word: string, wordLength: number): string => {
   const wordArr: string[] = word.split("");
   //    console.log(wordArr);
   let pointer: number = 0;

   while (pointer < wordLength) {
      if (wordArr[pointer] === " ") {
         wordArr[pointer] = "%20";
         //  console.log(wordArr, wordArr.length);
      }

      pointer += 1;
   }
   return wordArr.join("");
};

const test1 = transform(wordToChange, 13);

console.log(test1);
