// Write a conditional such that it will console.log if the number of letters in someone's name is even or odd and will throw an error if a non-string input is given

// For example, if name = "Sam", the conditional would console.log "There are an odd number of letters in 'name'"
// or if name = "Jake", the conditional would console.log "There are an even number of letters in 'name'"
// or if name = 2, the conditional would log "name is not a string" 

function evaluate(name) {
  const nameLength = name.length;
  if (typeof name !== 'string') {
    return `The provided name is not a string`
  } else if (nameLength % 2 === 0) {
    return `There are an even number of letters in ${name}`
  } else if (nameLength % 2 !== 0){
    return `There are an odd number of letters in ${name}`
  } else {
    return `Unaccounted for scenario.`
  }
}
console.log(evaluate('Sam'))
console.log(evaluate('Jake'))
console.log(evaluate(2))
console.log(evaluate([]))

