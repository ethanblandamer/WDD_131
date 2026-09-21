// How to manipulate the DOM with JavaScript

// Grab the first h1 from the page
let heading = document.querySelector("h1");

// grabs all h1s from the page
// let heading = document.querySelectorAll("h1")

console.log(heading);

// change the text of the element
heading.textContent = "Changed the heading to something else!";

// change the text color
heading.style.color = "purple";

// pick your own style and change it
heading.style.textAlign = "right";

// retrieve an ID element from the page
document.getElementById("topics").style.color = "red";
// document.querySelector("#topics").style.color = "red"

// select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"))

image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/b/b8/SatoruGojo.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled");

image.style.width = "150px"


let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                