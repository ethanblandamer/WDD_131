// 1. add event listener to the button
document.querySelector('#rollButton').addEventListener("click", event => {
    // animate the dice
        // switch src to die rolling gif
    const images = document.querySelectorAll('#gameboard img');
    images.forEach(image => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif"; 
        }
        
    });
    // change value of each die randomly
        // change src img
    setTimeout(() => {
        // run what is in here after x milliseconds
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                const randomNumber = Math.floor(Math.random() * 6) + 1;
                image.src = `assets/white_dice_${randomNumber}.gif`;
            }
    });
    }, 750);
});

// dont roll selected dice
function isDieUnlocked(dieImage) {
    // is the checkbox checked? return false
    const checkboxes = document.querySelectorAll('#gameboard input');
    // return a new array of just the checked ones
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(unchecked => unchecked.className === dieImage.className);

}