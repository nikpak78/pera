window.addEventListener('scroll', function() {
  const logoImage = document.querySelector
  (".logo img");
  const mainNav = document.getElementByid
  (".mainNav");

if ( window.pageYOffset > 100) {
logoImage.style.height = "64px";
mainNav.classList.add("pg-black");
mainNav.classList.add("txt-white");
} else {
  logoImage.style.height = "84px";
  mainNav.classList.remove("pg-black");
  mainNav.classList.remove("txt-white");
}


  
});
