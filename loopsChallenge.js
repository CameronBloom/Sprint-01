function exerciseTwo(){
  let count = 0;
  // In this exercise write your own for loop
  // It should loop 10 times and count by 2
  // Create a variable called count
  // For each loop reassign count to the current value of count + i such that your final `count` is 0 + 2 + 4 + 6 + ... = 90
  for (let i = 0; i < 10; i++) {
    count += (i * 2);
  }


  //Please write your answer in the line above. 
  return count;
}

console.log(exerciseTwo());