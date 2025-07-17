let str = "apple apple apple";
let result = str.match(/apple/);    // No flag
console.log(result);                // Only ['apple']

let result2 = str.match(/apple/g );  // With 'g' flag
console.log(result2);
