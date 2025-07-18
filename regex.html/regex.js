// let str = "apple apple apple";
// let result = str.match(/apple/);    // No flag
// console.log(result);                // Only ['apple']

// let result2 = str.match(/apple/g );  // With 'g' flag
// console.log(result2);


// // //////////
// let str1 = "apple apple apple";
// let result1 = str.replace(/apple/);    
// console.log(result);                

// let result3 = str.replace(/apple/g,"banana" );  
// console.log(result3);

// ///////////
               
// let str12 = / apple/;
// let result31 = str12.test(" i have a apple" );  
// console.log(result31);

const user = document.getElementById('name')
const sp = document.getElementById('sp')
const btn = document.getElementById('btn')

function nameValidation() {
    const name1= user.value;
    if(name1.length === 0){
        sp.innerHTML= "Name is required"
        btn.disabled =true;
        return false;
    }
    if(!name1.match(/^[a-zA-Z]{3,}$/)){
        sp.innerHTML = "Enter the name in three charcter"
        btn.disabled =true;
        return false;
    }
        sp.innerHTML= "name is valid"
        btn.disabled =false;
        return true; 
}
user.addEventListener('keyup',nameValidation);

