
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.background = "#000000";
        document.body.style.color = "#ffffff";
        logo.setAttribute("src", "byui-logo-dark.png");
    } else {
        document.body.style.background = "none";
        document.body.style.color = "#000000";
        logo.setAttribute("src", "byui-logo-blue.webp");
    }
}           
                    