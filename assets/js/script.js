const sideMenu = document.getElementById('side-menu')
let isOpen = false

const toggleMenu = () => {
    if (isOpen) {
        sideMenu.style.left = '-280px'
        isOpen = false
    } else {
        sideMenu.style.left = '0'
        isOpen = true
    }
}


// Get the button
const upButton = document.getElementById("up-btn");
const mainContent = document.getElementById("main-content");

// When the user scrolls down 20px from the top of the document, show the button
mainContent.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (mainContent.scrollTop > 40 || mainContent.scrollTop > 40) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    mainContent.scrollTop = 0;
    scrollTop = 0;
}