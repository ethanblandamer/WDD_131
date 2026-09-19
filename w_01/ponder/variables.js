
// declare a variable

let age = 23;

// like print in Python
console.log(age)

age = 25

// A constant variable
const name = "Ethan";

const policyDisclaimer = "no refunds";

const username = "billyjoe";

// Scope = where you can reference a variable by name

if(age == 21) {
    // a new scope
    console.log(username);
    let favoriteColor = "blue";
    console.log(favoriteColor);
}



document.querySelector("h1").style.color = "blue";