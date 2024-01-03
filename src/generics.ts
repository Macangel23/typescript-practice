const inputEl = document.querySelector<HTMLInputElement>("#inputElement") as HTMLInputElement;


console.dir(inputEl);
inputEl.value = "Test meow meow";

interface Identities {
   id: number,
   name: string
}


function identity<T>(input: T): T {
   return input;
}


identity<Identities>({id: 1, name: "test"});


function generateRandomElement<T>(list: T[]): T {
   const randomIdx = Math.floor(Math.random() * list.length);
   return list[randomIdx];
}


const randomElement = generateRandomElement<string>(["asa", "ka", "hehe"]);
console.log(randomElement);

function merge<T,U>(object1: T, object2: U) {
   return {
      ...object1,
      ...object2
   }
}

const mergeSample = merge({name: "test"}, {pets: ["dog", "cats"]});
console.log(mergeSample);


interface Lengthy {
   length: number
}

function getDoubleValue<T extends Lengthy>(number: T): number {
   return number.length * 2;
}


const Dog = getDoubleValue("dsadsahjkdsa");
// getDoubleValue(23565);

console.log(Dog);



