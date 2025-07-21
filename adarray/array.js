let nums = [1,4,2,3];
nums.forEach(function(num) {
  console.log(num);
});
// ////////////////////map/////////

let name=nums.map(function (num) {
    return num * 2;
    
})

console.log(name);
// /////////////////filter///////////

let name1=nums.filter(function(num){
    return num % 2==0
})
console.log(name1);

// //////////////reduce//////////////////

let name2=nums.reduce(function(acc,val){
    return acc + val

},10)
console.log(name2);

////////////find/////////////////

let name3 = nums.find(function(num){

    return num>10;
})
console.log(name3);

// //////////some/////////////////
 let name4 = nums.some(function(num){
    return num % 2==0

 })
 console.log(name4);

//  //////////every/////////////////

 let name5 = nums.every(function(num){
    return num % 2==0
 })
console.log(name5);

//////////////sort//////////////////

 let name6 = nums.sort(function(a,b){
    return a-b
 })
 console.log(name6);
 


