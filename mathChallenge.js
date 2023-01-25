const num1 = 1;       // a
const num2 = 2;       // b
const num3 = 10;      // c
const num4 = 13.56;   // x

// add together num1 and num2, log your results to the console.
let sum = num1 + num2;
console.log(sum);

// round num4 to the nearest whole number using a method of `Math`, log your results to the console.
let rounded = Math.round(num4);
console.log(rounded);


// raise num3 to the 2nd power, log your results to the console. 
let raisedValue = Math.pow(num3, 2);
console.log(raisedValue);

// continue to practice with more complicated calculations here. See if you can, for example, write the quadratic formula.
let quadValue = (num1 * Math.pow(num4, 2)) + (num2 * num4) + num3;
console.log(quadValue);