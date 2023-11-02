import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
   button.addEventListener("click", () => {
      concatenation(input.value, "hello!");
   });
}

type Person = { name: string; age?: number };
let user: Person = { name: "Alice" };
user.age = 27;

type Dog = {
   bark: () => void;
};

type Cat = {
   meow: () => void;
};

function isDog(animal: Dog | Cat): animal is Dog {
   return "bark" in animal;
}

function isCat(animal: Dog | Cat): animal is Cat {
   return "meow" in animal;
}

function letAnimalTalk(animal: Dog | Cat) {
   if (isDog(animal)) {
      animal.bark();
   } else if (isCat(animal)) {
      animal.meow();
   }
}

const thomas: Cat = {
   meow: () => {
      console.log("meowmeow");
   },
};

const lobo: Dog = {
   bark: () => {
      console.log("gavgav");
   },
};

letAnimalTalk(thomas);
letAnimalTalk(lobo);
