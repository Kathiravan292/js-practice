// let names = ['Surya', 'Lokesh', 'harshith', 'Gayathri', 'Sandeep', 'Sanjay'];

// let [eleOne, eleTwo, ...others] = names;
// console.log(eleOne);
// console.log(eleTwo);
// console.log(others);

// function user(userOne, userTwo, ...restPara) {
//     console.log(userOne);
//     console.log(userTwo);
//     console.log(restPara);

// }
// user('hari', 'Jaswanth', 'Venkat', 'Pavan', 'Chakri', 'Kadhir')

// // //////////////////////////////////
// gexample:

// let names = ['Surya','Lokesh','harshith','Gayathri','Sandeep'];
// console.log(names);

// // Older way of extracting all the values from an array / Without destructurig:
// let resElem = names[0];
// console.log(resElem); // 'Surya'
// console.log(names[1]); // Lokesh

// // //////////////////////////////
// console.log(`********** With destructuring Array ************`);

// let [eleOne,,,eleFour,eleFive] = names;

// console.log(eleOne);
// console.log(eleFour);
// console.log(eleFive);

// ///////////////////////////call()/////////////////////////////
console.log(`********** With call method() ************`);
// let proces={
//     name : "kathir",
//     age : 21,
//     place : "nkl",
// }

// let proces1={
//     name : "dhiva",
//     age : 21,
//     place : 'tri',
// }
//  let detail=function (month,year) {
//     console.log(` and name${this.name} and ${this.age} and${this.place}this is my month ${month} and this is${year}`);
    
//  }
//  detail.call(proces1,2,2005)

//  ////////////////////////apply()///////////////////////

// console.log(`********** With apply method() ************`);
// let proces={
//     name : "kathir",
//     age : 21,
//     place : "nkl",
// }

// let proces1={
//     name : "dhiva",
//     age : 21,
//     place : 'tri',
// }
//  let detail=function (month,year) {
//     console.log(` and name${this.name} and ${this.age} and${this.place}this is my month ${month} and this is${year}`);
    
//  }
//  let vari = detail.call(proces1,[2],[2005]);
 
 console.log(`********** With bind method() ************`);

 let proces={
    name : "kathir",
    age : 21,
    place : "nkl",
}

let proces1={
    name : "dhiva",
    age : 21,
    place : 'tri',
}
 let detail=function (month,year) {
    console.log(` and name${this.name} and ${this.age} and${this.place}this is my month ${month} and this is${year}`);
    
 }
 let vari = detail.call(proces1,[2],[2005]);
