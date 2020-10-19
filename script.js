// Navbar Effect
$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 210) { 
          $('.navbar').addClass('solid');
          document.getElementById("navBrand").style.opacity = "1.0";
      } else {
          $('.navbar').removeClass('solid');
          document.getElementById("navBrand").style.opacity = "0.01";
      }
    });
});

// Modal Slides Section
function openModal(){
    document.getElementById('my-modal').style.display = "inline-flex";
    // hide the scroll bar when modal opens up
    document.body.style.overflow = "hidden";
    // hide navbar in modal view
    document.getElementById('navbar-example2').style.display = "none";
}
function closeModal(){
    document.getElementById('my-modal').style.display = "none";
    // Show the scroll bar again
    document.body.style.overflow = "auto";
   // Show navbar in modal view
    document.getElementById('navbar-example2').style.display = "flex";
}
            
var slideIndexJS = 1;
showSlides(slideIndexJS);

function changeSlides(n){
    showSlides(slideIndexJS += n);
}
function currentSlide(n){
    showSlides(slideIndexJS = n);
}
function showSlides(n){
    var i;
    var slidesJS = document.getElementsByClassName("my-slides");
    if (n >  slidesJS.length){
        slideIndexJS = 1;
    }
    if( n < 1){
        slideIndexJS = slidesJS.length;
    }
    for(i = 0; i < slidesJS.length; i++){
        slidesJS[i].style.display = "none";
    } 
    slidesJS[slideIndexJS - 1].style.display = "block";
}

// Hide Modal when click outside image
var modal = document.getElementById('my-modal');
window.onclick = function(event){
    if (event.target == modal){
        closeModal();
    }
}


