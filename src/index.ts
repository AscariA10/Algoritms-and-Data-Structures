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
