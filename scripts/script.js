//start NavBarre
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
    }
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    window.onscroll.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    }
//End NavBarre
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides((slideIndex = n));
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
