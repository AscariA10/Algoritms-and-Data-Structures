//  check is string a changed palindrome
const testWord: string = "qwqwe";

const palindromeCheck = (word: string): boolean => {
   const palTable: {} = {};
   let palindromeCounter: number = 0;

   for (let i = 0; i < word.length; i += 1) {
      if (!palTable[word[i]]) {
         palTable[word[i]] = 1;
      } else {
         palTable[word[i]] += 1;
      }
   }

   for (const key in palTable) {
      if (palTable[key] % 2 !== 0) {
         palindromeCounter += 1;
      }
   }
   console.log(palindromeCounter);
   return !(palindromeCounter > 1);
};

const test1 = palindromeCheck(testWord);
console.log(test1);
