// Create a function to console.log the steps to your favorite recipie

// Use the space below to declare the same function as an arrow function 
function logInstructions(arrInstructions) {
  arrInstructions.forEach(step => {
    console.log(step);
  })
}

let myFavoriteRecipe = [
  `Step 1: Getting Started`,
  `Step 2: Make a Well in the Center of the Dough`,
  `Step 3: Knead the Dough`,
  `Step 4: Cover the Dough in Plastic Wrap`,
  `Step 5: Check to See If the Dough Is Done`,
  `Step 6: Divide the Dough`,
  `Step 7: Shape the Dough`,
  `Step 8: Top the Pizza and Bake`,
]

logInstructions(myFavoriteRecipe);