let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".main-nav");

menu.onclick =  () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}


