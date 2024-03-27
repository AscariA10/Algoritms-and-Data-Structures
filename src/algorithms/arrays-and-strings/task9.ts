// ? is string equal to another by cyclic shift

type TcyclicShift = (string1: string, string2: string) => boolean;

const cyclicShiftChecker: TcyclicShift = (str1, str2) => {
   if (str1.length != str2.length) {
      return false;
   }

   const concatenatedString = str1 + str1;
   return concatenatedString.includes(str2);
};

console.log(cyclicShiftChecker("string", "ringst"));
console.log(cyclicShiftChecker("string", "rinstg"));
