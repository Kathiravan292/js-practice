let names = ['Surya', 'Lokesh', 'harshith', 'Gayathri', 'Sandeep', 'Sanjay'];

let [eleOne, eleTwo, ...others] = names;
console.log(eleOne);
console.log(eleTwo);
console.log(others);

function user(userOne, userTwo, ...restPara) {
    console.log(userOne);
    console.log(userTwo);
    console.log(restPara);

}
user('Adhithya', 'Jaswanth', 'Venkat', 'Pavan', 'Chakri', 'Kadhir')

// //////////////////////////////////
gexample:

let names = ['Surya','Lokesh','harshith','Gayathri','Sandeep'];
console.log(names);

// Older way of extracting all the values from an array / Without destructurig:
let resElem = names[0];
console.log(resElem); // 'Surya'
console.log(names[1]); // Lokesh