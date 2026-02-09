const navLinks = document.querySelector(".nav-links");
const authLink = document.querySelector(".auth");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
} )

