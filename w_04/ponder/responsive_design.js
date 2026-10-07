
let menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener("click", function (e) {
    let nav = document.querySelector('nav');
    if (nav.style.display === ''){
        nav.style.display = 'flex';
        console.log("working?");
    }
    else {
        nav.style.display = '';
    }

    menuButton.classList.toggle('change');
});
