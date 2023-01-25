// var is function scoped
// var is redefinable (change value)
// var is redeclarable (change variable memory location)
var myDog = 'Lilly';
console.log(myDog);

// const is block scoped
// const is NOT redefinable
// const is NOT redeclarable
const myName = 'Cameron';
console.log(myName);

// let is block scoped
// let is redefinable
// const is NOT redeclarable
let favFood = 'Steak';
console.log(favFood);
favFood = 'Cookies';
console.log(favFood);

const random = Math.random();
const ceil = Math.ceil(random);
const floor = Math.floor(random);
console.log(random);
console.log(ceil);
console.log(floor);

// Functions
// Parameters are private variables that only exist inside your function.
function dogGroomer(nameParameter, weight) {
  console.log(`${nameParameter} is a dog and they need a haircut.`);
  if (weight > 25) {
    return `Big dogs cost extra!`;
  } else {
    return `Little dogs cost less.`;
  }
}

// Invoking
const dogGroomerQuote = dogGroomer(`Chestnut`, 30);
console.log(dogGroomerQuote)