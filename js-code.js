// var key word

var code
code = "java script"
document.write(code)


// let key word

let codefee
codefee = 2000;
console.log(codefee)


// const key word

const mode = "online or offline"
console.log(mode)



// primitive data type
// string data type

// string literals

let courcedetail = "java script";
console.log(courcedetail);
console.log(typeof courcedetail);

// string constructore

let courcemode=new String('online or offline');
console.log(courcemode);
console.log(typeof courcemode);


// undefine
let courcecompleat;
console.log(courcecompleat);

// null

let iscourceempty=null;
console.log(iscourceempty);
console.log(typeof iscourceempty);

// /////////////////////////////////type converstion/////////////////////////////

let numericnumber='2025';
console.log(numericnumber);

let res= Number(numericnumber)
console.log(res);

// ////////////////////////////////number to string ///////////////////////////////

let str = 2025;
console.log(str);

let srtres= String(str);
console.log(srtres);

// /////////////////////////////boolean////////////////////////////////////////
 console.log(Boolean(''));
 console.log(Boolean('0'));
 console.log(Boolean(undefined));
 console.log(Boolean(null));

//  /////////////// statement ////////////////////////
 let age =10;

 if( age >=89){
    console.log("hello");  
 }else if(age >=20 && age <=60){
    console.log( "hai");
    
      
 }else{
    console.log("byee");
    
 }
//  //////////////////
//  for(let i=1;i<=5;i++){
//    if(i==4){
//       continue
//    }
//    console.log("hello java  ",i);
// }
    

for( let w=5;w>=1;w--){
   console.log(w);
   
} 
// /////////////////////////string methode////////////////////

let stry="UI developer";
console.log(stry);
console.log(stry.indexOf("e"));
console.log(stry.lastIndexOf("e"));
console.log(stry.charAt(3));
console.log(stry.charCodeAt("v"));
console.log(stry.substring(3,7));

// ///////////////////////array///////////////////////////////

let detail=['kathiravan','erumapatti','front end developere'];
console.log(detail);
console.log(typeof detail);

// //////////////////////array method/////////////////////////

detail.push(26);
console.log(detail);
detail.pop();
console.log(detail);
detail.shift();
console.log(detail);
detail.unshift("Nithish");
console.log(detail);
console.log(detail.includes(26));
detail.reverse();
console.log(detail);

// /////////////////////////object///////////////////////////

let personaldetail={
   firstname:"kathir",
   lastname:"chndran",
   place:"namakkal",
}
// console.log(personaldetail);
// console.log(personaldetail.place);

// let personobj = personaldetail.hasOwnProperty("firstname") 
// console.log(personobj);
// ////////// object.keys method/////////////////

// let key = Object.keys(personaldetail);
// console.log(key);

// //////////object.value methode////////////

// let value= Object.values(personaldetail);
// console.log(value);
let free=Object.freeze(personaldetail)

personaldetail.qulification = "mca";
personaldetail.firstname="kathiravan";
console.log(personaldetail);









 



 
 
 





