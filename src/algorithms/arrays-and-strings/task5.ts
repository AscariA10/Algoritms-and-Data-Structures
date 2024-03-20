// ? write function, which determine, are two strings in length of one modification

const testString1: string = "pale";
const testString2: string = "ple";
const testString3: string = "pales";
const testString4: string = "bale";
const testString5: string = "bake";

type TcheckModFunc = (string1: string, string2: string) => boolean;

const oneEditReplace: TcheckModFunc = (str1, str2) => {
   return true;
};

const oneEditInsert: TcheckModFunc = (str1, str2) => {
   return true;
};

const checkSimilarity: TcheckModFunc = (firstStr, secondStr) => {
   if (firstStr.length === secondStr.length) {
      return oneEditReplace(firstStr, secondStr);
   } else if (firstStr.length + 1 === secondStr.length) {
      oneEditInsert(firstStr, secondStr);
   } else if (firstStr.length - 1 === secondStr.length) {
      oneEditInsert(secondStr, firstStr);
   }
   return false;
};
