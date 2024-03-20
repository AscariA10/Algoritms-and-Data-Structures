// ? write function, which determine, are two strings in length of one modification

const testString1: string = "pale";
const testString2: string = "ple";
const testString3: string = "pales";
const testString4: string = "bale";
const testString5: string = "bake";

type TcheckModFunc = (string1: string, string2: string) => boolean;

const oneEditReplace: TcheckModFunc = (str1, str2) => {
   let isDifferent: boolean = false;
   for (let i = 0; i < str1.length; i += 1) {
      if (str1[i] !== str2[i]) {
         if (isDifferent) {
            return false;
         }
         isDifferent = true;
      }
   }
   return true;
};

const oneEditInsert: TcheckModFunc = (str1, str2) => {
   let index1 = 0;
   let index2 = 0;
   while (index2 < str2.length && index1 < str1.length) {
      if (str1[index1] !== str2[index2]) {
         if (index1 !== index2) {
            return false;
         }
         index2 += 1;
      } else {
         index1 += 1;
         index2 += 1;
      }
   }
   return true;
};

const checkSimilarity: TcheckModFunc = (firstStr, secondStr) => {
   if (firstStr.length === secondStr.length) {
      return oneEditReplace(firstStr, secondStr);
   } else if (firstStr.length + 1 === secondStr.length) {
      return oneEditInsert(firstStr, secondStr);
   } else if (firstStr.length - 1 === secondStr.length) {
      return oneEditInsert(secondStr, firstStr);
   }
   return false;
};

console.log(checkSimilarity(testString1, testString4));
console.log(checkSimilarity(testString1, testString2));
