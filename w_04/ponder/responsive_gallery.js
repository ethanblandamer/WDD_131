// retrive elements from the DOM
let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = dialog.querySelector('img');
let closeButton = dialog.querySelector('.close-viewer');

// add an event listener
gallery.addEventListener("click", function(event) {
    console.log(event.target.src);
    // swap src of dialog img
    if(event.target.src !== undefined) {
        dialogImage.src = event.target.src.replace("sm", "full");
        // show dialog box
        dialog.showModal();
    }
    
});

closeButton.addEventListener('click', function(event) {
    dialog.close();
});

dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});