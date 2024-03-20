//? if all chaaracters in string unique?

function isUniqueSymbol(testString: string): boolean {
   if (testString.length > 128) {
      return false;
   }
   const boolTable: object = {};

   for (let i = 0; i < testString.length; i++) {
      const value: string = testString[i];

      if (boolTable[value]) {
         return false;
      }
      boolTable[value] = true;
      console.log(boolTable);
   }

   return true;
}

// isUniqueSymbol("qqqq");
// isUniqueSymbol("qwer");
// isUniqueSymbol("fgdhjljkancbgyuqior4y67439802");

//? without aditional data sytuctures?

function isUniqueSlow(testValue: string): boolean {
   for (let i = 0; i < testValue.length; i++) {
      for (let j = i + 1; j < testValue.length; j++) {
         if (testValue[i] === testValue[j]) {
            console.log(i, j);
            return false;
         }
      }
   }
   return true;
}

console.log(isUniqueSlow("fgdhjljkancbgyuqior4y67439802"));
