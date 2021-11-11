let navLink = document.getElementById("navJava");
let hamburgerMenu = document.getElementById("menuJava");

navLink.classList.add("active");

hamburgerMenu.addEventListener("click", function(){
	
	navLink.classList.toggle("active");

});

$(document).ready(function(){
  $('.slickMain').slick({
    slidesToShow: 1,		  
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    infinite: true,		 
    speed: 2200,
    fade: true, 
  });
});