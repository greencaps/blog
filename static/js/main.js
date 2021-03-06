;
(function () {

  'use strict';

  // iPad and iPod detection
  function isiPad() {
    return (navigator.platform.indexOf("iPad") != -1);
  };

  function isiPhone() {
    return (
      (navigator.platform.indexOf("iPhone") != -1) ||
      (navigator.platform.indexOf("iPod") != -1)
    );
  };

  // Parallax
  function parallax() {
    $(window)
      .stellar();
  };

  // Burger Menu
  function burgerMenu() {
    $('body')
      .on('click', '.js-fh5co-nav-toggle', function (event) {
        event.preventDefault();

        var navbar = $('#navbar');
        if (navbar
          .is(':visible')) {
          $(this)
            .removeClass('active');
          navbar
            .removeClass('in');
        } else {
          $(this)
            .addClass('active');
          navbar
            .addClass('in');
        }
      });
  };

  function goToTop() {
    $('.js-gotop')
      .on('click', function (event) {
        event.preventDefault();

        $('html, body')
          .animate({
            scrollTop: $('html')
              .offset()
              .top
          }, 500);

        return false;
      });
  };

  // Page Nav
  function clickMenu() {
    $('a[data-nav-section]')
      .click(function (event) {
        var section = $(this)
          .data('nav-section'),
          navbar = $('#navbar');

        if ($('[data-section="' + section + '"]')
          .length) {
          $('html, body')
            .animate({
              scrollTop: $('[data-section="' + section + '"]')
                .offset()
                .top
            }, 500);
        }

        if (navbar.is(':visible')) {
          navbar.removeClass('in');
          navbar.attr('aria-expanded', 'false');
          $('.js-fh5co-nav-toggle')
            .removeClass('active');
        }

        event.preventDefault();
        return false;
      });
  };

  // Reflect scrolling in navigation
  function navActive(section) {
    var $el = $('#navbar > ul');
    $el.find('li')
      .removeClass('active');
    $el.each(function () {
      $(this)
        .find('a[data-nav-section="' + section + '"]')
        .closest('li')
        .addClass('active');
    });
  };

  function navigationSection() {
    var $section = $('section[data-section]');

    $section.waypoint(function (direction) {

      if (direction === 'down') {
        navActive($(this.element)
          .data('section'));
      }
    }, {
      offset: '150px'
    });

    $section.waypoint(function (direction) {
      if (direction === 'up') {
        navActive($(this.element)
          .data('section'));
      }
    }, {
      offset: function () {
        return -$(this.element)
          .height() + 155;
      }
    });
  };

  // Window Scroll
  function windowScroll() {
    var lastScrollTop = 0;

    $(window)
      .scroll(function (event) {

        var header = $('#fh5co-header'),
          scrlTop = $(this)
          .scrollTop();

        if (scrlTop > 500 && scrlTop <= 2000) {
          header.addClass('navbar-fixed-top fh5co-animated slideInDown');
        } else if (scrlTop <= 500) {
          if (header.hasClass('navbar-fixed-top')) {
            header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
            setTimeout(function () {
              header.removeClass(
                'navbar-fixed-top fh5co-animated slideInDown slideOutUp'
              );
            }, 100);
          }
        }

      });
  };

  // Animations
  // Home

  function homeAnimate() {
    if ($('#fh5co-home')
        .length > 0) {

      $('#fh5co-home')
        .waypoint(function (direction) {

          if (direction === 'down' && !$(this.element)
              .hasClass('animated')) {

            setTimeout(function () {
              $('#fh5co-home .to-animate')
                .each(function (k) {
                  var el = $(this);

                  setTimeout(function () {
                    el.addClass('fadeInUp animated');
                  }, k * 200, 'easeInOutExpo');

                });
            }, 200);

            $(this.element)
              .addClass('animated');

          }
        }, {
          offset: '80%'
        });

    }
  };

  function introAnimate() {
    if ($('#fh5co-intro')
        .length > 0) {

      $('#fh5co-intro')
        .waypoint(function (direction) {

          if (direction === 'down' && !$(this.element)
              .hasClass('animated')) {

            setTimeout(function () {
              $('#fh5co-intro .to-animate')
                .each(function (k) {
                  var el = $(this);

                  setTimeout(function () {
                    el.addClass('fadeInRight animated');
                  }, k * 200, 'easeInOutExpo');

                });
            }, 1000);

            $(this.element)
              .addClass('animated');

          }
        }, {
          offset: '80%'
        });

    }
  };

  function workAnimate() {
    if ($('#fh5co-work')
        .length > 0) {

      $('#fh5co-work')
        .waypoint(function (direction) {

          if (direction === 'down' && !$(this.element)
              .hasClass('animated')) {

            setTimeout(function () {
              $('#fh5co-work .to-animate')
                .each(function (k) {
                  var el = $(this);

                  setTimeout(function () {
                    el.addClass('fadeInUp animated');
                  }, k * 200, 'easeInOutExpo');

                });
            }, 200);

            $(this.element)
              .addClass('animated');

          }
        }, {
          offset: '80%'
        });

    }
  };

  function servicesAnimate() {
    var services = $('#fh5co-services');
    if (services.length > 0) {

      services.waypoint(function (direction) {

        if (direction === 'down' && !$(this.element)
            .hasClass('animated')) {

          var sec = services.find('.to-animate')
            .length,
              sec = parseInt((sec * 200) + 400);

          setTimeout(function () {
            services.find('.to-animate')
              .each(function (k) {
                var el = $(this);

                setTimeout(function () {
                  el.addClass('fadeInUp animated');
                }, k * 200, 'easeInOutExpo');

              });
          }, 200);

          setTimeout(function () {
            services.find('.to-animate-2')
              .each(function (k) {
                var el = $(this);

                setTimeout(function () {
                  el.addClass('bounceIn animated');
                }, k * 200, 'easeInOutExpo');

              });
          }, sec);

          $(this.element)
            .addClass('animated');

        }
      }, {
        offset: '80%'
      });

    }
  };

  function aboutAnimate() {
    var about = $('#fh5co-about');
    if (about.length > 0) {

      about.waypoint(function (direction) {

        if (direction === 'down' && !$(this.element)
          .hasClass('animated')) {

          setTimeout(function () {
            about.find('.to-animate')
              .each(function (k) {
                var el = $(this);

                setTimeout(function () {
                  el.addClass('fadeInUp animated');
                }, k * 200, 'easeInOutExpo');

              });
          }, 200);

          $(this.element)
            .addClass('animated');

        }
      }, {
        offset: '80%'
      });

    }
  };

  function contactAnimate() {
    var contact = $('#fh5co-contact');
    if (contact.length > 0) {

      contact.waypoint(function (direction) {

        if (direction === 'down' && !$(this.element)
          .hasClass('animated')) {

          setTimeout(function () {
            contact.find('.to-animate')
              .each(function (k) {
                var el = $(this);

                setTimeout(function () {
                  el.addClass('fadeInUp animated');
                }, k * 200, 'easeInOutExpo');

              });
          }, 200);

          $(this.element)
            .addClass('animated');

        }
      }, {
        offset: '80%'
      });

    }
  };

  // Magnific Popup
  function magnificPopup() {
    $('.image-popup')
      .magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery: {
          enabled: false
        },
        image: {
          verticalFit: false
        },
        alignTop: true,
        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it

          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function

          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function (openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement :
              openerElement.find('img');
          }
        }
      });
  }

  // Document on load.
  $(function () {
    parallax();

    burgerMenu();

    clickMenu();

    windowScroll();

    navigationSection();

    goToTop();

    magnificPopup();

    // Animations
    homeAnimate();
    introAnimate();
    workAnimate();
    servicesAnimate();
    aboutAnimate();
    contactAnimate();
  });
}());
