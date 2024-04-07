// ? create an algorithm where anagrams of words
// ? sorted one after one

const anagramComparator = () => {};

const anagramGrouping = array => {
   const anagramModified = array.map(word => {
      return { original: word, sorted: word.split().sort().join("") };
   });

   anagramModified.sort((first, second) => (first.sorted < second.sorted ? 1 : -1));

   return anagramModified.map(word => word.original);
};

/* TEST */

const anagrams = [
   "motherinlaw",
   "debit card",
   "dormitory",
   "theearthquakes",
   "astronomer",
   "punishments",
   "schoolmaster",
   "hitlerwoman",
   "badcredit",
   "dirtyroom",
   "thequeershakes",
   "moonstarrer",
   "ninethumps",
   "theclassroom",
];

const anagramResult = anagramGrouping(anagrams);
console.log(anagramResult);
