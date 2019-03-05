(function ($) {


  $(document).ready(function() {
          // Transition effect for navbar
          $(window).scroll(function() {
            const logoImage = document.querySelector
            (".logo img");
            if($(this).scrollTop() > 80) {
              logoImage.style.height = "57px";
                $('.navbar').addClass('solid');
            } else {
                logoImage.style.height = "80px";
                $('.navbar').removeClass('solid');
            }
          });
  });



})(jQuery);

(function ($) {
$("[data-menu-underline-from-center] a").addClass("underline-from-center");
})(jQuery);
