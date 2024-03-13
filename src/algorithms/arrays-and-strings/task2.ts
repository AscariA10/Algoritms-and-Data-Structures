// ? write down method for check: is one string consists of another

// * 1st method

const a: string = "qwertyuiop";
const b: string = "poiuytrewq";
const c: string = " qwerty uiop";
const d: string = "qwertyuiop ";

const stringSort = (testString): string => {
   return testString.split("").sort().toString();
};

const compare = (str1, str2): boolean => {
   return stringSort(str1) === stringSort(str2);
};

const test1 = compare(a, b);
const test2 = compare(a, c);
const test3 = compare(a, d);

console.log(test1);
console.log(test2);
console.log(test3);

// * 2nd method
