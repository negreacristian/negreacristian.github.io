document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling functionality for anchor links
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800
    });
  
    // Navbar and scroll indicator logic
    const navbar = document.querySelector('.navbar');
    const scrollIndicator = document.querySelector('.scroll-indicator');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('visible');
        scrollIndicator.style.opacity = '0'; // Hide the scroll indicator when scrolled
      } else {
        navbar.classList.remove('visible');
        scrollIndicator.style.opacity = '1'; // Show the scroll indicator when at the top
      }
    });
  
    // Carousel functionality to slide one item at a time
    $('#projectsCarousel').on('slide.bs.carousel', function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $('.carousel-item').length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // Append slides to end to keep the carousel looping smoothly
          if (e.direction === 'left') {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
          } else {
            $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
        }
      }
    });
  });
  