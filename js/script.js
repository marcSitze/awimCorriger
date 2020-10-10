/* =========================================
                Clients
  ============================================ */
  console.log('This is working');
  $(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 2,
    autoplay: false,
    nav: true,
    smartSpeed: 700,
    loop: true,
    dots: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 2
        },
        // breakpoint from 480 up
        480: {
            items: 2
        },
        // breakpoint from 768 up
        768: {
            items: 2
        }
    }
  });


});


$(function(){
  
  $('.navbar-toggler').on('click', e => {

  });

});
