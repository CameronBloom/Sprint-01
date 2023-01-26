// Below is a function for a smoothie maker that only makes one type of smoothie with variables in the global scope. 

const fruit1 = "bannana";
const fruit2 = "strawberry";
const liquid = "orange juice";
const thickener = "greek yogurt";

function smoothieMaker() {
  console.log(`1. Add the ${fruit1} and ${fruit2}`);
  console.log(`2. Cover the fruit with ${liquid}`);
  console.log(`3. Add one scoop of ${thickener}`)
  console.log('enjoy!')
  
}

smoothieMaker()

// Use the space below to re-write the function such that a user can input ingredients (try: mango, pineapple, almond milk, avocado) and return the steps 

function betterSmoothieMaker(fruit1, fruit2, liquid, thickener){
  console.log(`1. Add the ${fruit1} and ${fruit2}`);
  console.log(`2. Cover the fruit with ${liquid}`);
  console.log(`3. Add one scoop of ${thickener}`)
  console.log('enjoy!')
}

betterSmoothieMaker(`pineapple`, `strawberry`, `milk`, `yogurt`)
  

