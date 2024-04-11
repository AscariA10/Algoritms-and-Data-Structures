// ? transform string into coded letter_numOfRepeats or initial if longer

type TstringCompressor = (string1: string) => string;

const stringCompressor: TstringCompressor = (initialString: string) => {
   let compressedStr: string = "";
   let currentCharacter: string = "";
   let currentCount: any = "";
   // let maxCount: number = 1;

   for (let i = 0; i < initialString.length; i += 1) {
      if (currentCharacter != initialString[i]) {
         compressedStr = compressedStr + currentCharacter + currentCount;
         // maxCount = Math.max(currentCount, maxCount);
         currentCharacter = initialString[i];
         currentCount = 1;
         // console.log(currentCharacter, initialString[i], maxCount);
      } else {
         currentCount += 1;
      }
   }
   compressedStr = compressedStr + currentCharacter + currentCount;
   // maxCount = Math.max(currentCount, maxCount);

   // return maxCount === 1 ? initialString : compressedStr;
   return initialString.length <= compressedStr.length ? initialString : compressedStr;
};

console.log(stringCompressor("aaaaaa"));
console.log(stringCompressor("aabcccccaaa"));
console.log(stringCompressor("qqwweerrttyyuuiii"));
console.log(stringCompressor("qwertyuiopppppppppppppppppppppppppppppppppppp"));
console.log(
   stringCompressor(
      "ggggggggggggdasaaafdsafdsafkkkkkkkkkkkkkknsfmdsabfnbdnnnnnnneeeellllchchcyyyyyy"
   )
);
