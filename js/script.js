//LOADER
$(window).on('load', () => {
  const loader = $ ('.loader');
    loader.delay(1000).fadeTo(1800, 0);
  setTimeout( () => {
    $(".loader").hide();
  }, 2400);
});


//Lazy image loading
$(window).on('load', () => {
  $('.lazy').lazy();
});

//AOS ANIMATION INIT
AOS.init();

//MENU BURGER SHOW/HIDE
$(document).ready( () => {

  $('.burger-btn').click( (e) => {
      e.stopPropagation();
      $('.dropdown-menu').slideToggle();
  });
  
  $(document).click( () => {
      $('.dropdown-menu').slideUp(); //Slide menu when user click outside
  });
});

//SLICK SETTINGS FIRST CAROUSEL
$(document).ready( () => {

  $('.slider').slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3200,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    cssEase: 'ease-in-out',
    prevArrow:'<button class="prev-btn"> < </button>',
    nextArrow:'<button class="next-btn"> > </button>',
    lazyLoad: 'ondemand',
    dots: true,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).data('title');
      return '<span style="font-size: 40px; color: grey; position: relative; top: -20px; left: 30px;">..............................</span><br><p style="width: 150px; position: relative; right: 55px;">' +
        title + '</p>';
    },
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      }
    ]
  })
});

//PARTNERS SLICK SETTINGS
$(document).ready( () => {

  $('.customer-logos').slick({
          slidesToShow: 4,
          lazyLoad: 'ondemand',
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 800,
          speed: 1000,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 3
              }
          }, {
              breakpoint: 520,
              settings: {
                  slidesToShow: 2
              }
          }]
      });
  });

//SCROLL INTOVIEWJS
  function scrollInToView(){
    const scrollDown =  $("span.bouncing, .learn-more");
    const scrollUp = $(".scroll-up");

    scrollDown.click( () => {
      $(".container-content").scrollintoview({duration: 2400});
    });
    scrollUp.click( () => {
      $("header").scrollintoview({duration: 1000});
    });
    
    $(window).on('mousewheel', () => {
      $('html, body').stop(); //Stop animation if user scroll
    });
  }

  $(document).ready( () => {
    scrollInToView();
  });

//COMMENTS SLIDE
const $status = $('.paging-info');
const $slickElement = $('.slideshow');

   $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
       let i = (currentSlide ? currentSlide : 0) + 1;
       $status.text(i + ' of ' + slick.slideCount);
   });

   // SLICK SLIDER FUNCTION
   $slickElement.slick({
       slide: '.content-wrapper',
       autoplay: false,
       infinite: true,
       dots: false,
       speed: 1000,
       lazyLoad: 'ondemand',
       pauseOnHover: false,
       arrows: true,
       fade: true,
       prevArrow:'<button class="prev"> < </button>',
       nextArrow:'<button class="next"> > </button>'
   });

   //NAVBAR ON SCROLL, SCROLL UP & DOWN BUTTON
  function checkHeaderStatus() {

    const scrollPosition = $(window).scrollTop();
    const navbar = $('nav');
    const navbarBtn = $('.button');
    const logo = $('.logo-EA');
    const scrollUp = $('.scroll-up');
    const scrollDown = $('.bouncing');
    const burgerMenuBtn = $('.burger-btn');
    const burgerMenu = $('.dropdown-menu');
    const loginBtn = $('.login-btn');
    const demoBtn = $('.demo');

    if (scrollPosition === 0 || scrollPosition < 300){
        navbar.css("background-color", "black");
        navbar.css("box-shadow", "none");
        navbarBtn.css("color", "white");
        demoBtn.css("color" , "white");
        loginBtn.css("color" , "white");
        loginBtn.css("border", "1px solid grey");
        loginBtn.on({
          mouseenter: () => {
            loginBtn.css("background", "white");
            loginBtn.css("color", "black");
          },
          mouseleave: () => {
            loginBtn.css("background", "transparent");
            loginBtn.css("color", "white");
          }
        });
        logo.attr("src", "Pictures/full-white.png");
        burgerMenuBtn.css("color", "white");
        burgerMenu.css("background", "black");
        scrollDown.show();
        scrollUp.hide();
        $("#mainMenu a").css("color" , "white");
        $('.dropdown-menu a').css("color", "white");

  
    } else if (scrollPosition > 600) {
        navbar.css("background", "white");
        navbar.css("box-shadow", "2px 2px 8px rgba(0, 0, 0, 0.5)");
        navbarBtn.css("color", "black");
        logo.attr("src", "Pictures/full-color.png");
        burgerMenuBtn.css("color", "black");
        burgerMenu.css("background", "white");
        demoBtn.css("color" , "white");
        navbarBtn.css("color" , "black");
        loginBtn.css("color" , "black");
        loginBtn.on({
          mouseenter: () => {
            loginBtn.css("font-weight", "bold");
          },
          mouseleave: () => {
            loginBtn.css("font-weight", "normal");
            loginBtn.css("color" , "black");
          }
        });
        logo.attr("src", "Pictures/full-color.png");
        scrollDown.hide();
        scrollUp.show();
        $("nav a.active").css("color" , "white");
        $(".menu a").css("color", "white");
        $(".button.active").css("color" , "white");
        $('.dropdown-menu a').css("color", "rgb(45, 116, 196)");
    }
  };

  $(document).ready( () => {
    checkHeaderStatus();
    $(window).scroll( () => {
        checkHeaderStatus();
    });
});

//TYPEDJS SETTINGS
const typed = new Typed(".animate-text", {
  strings:[
    'To <strong>Reduce</strong> by 5 your churn ratio',
    'To Increase your <strong>customer retention</strong> by 80%',
    'To <strong>Predict</strong> which customer is leaving and why',
    'To Get a better <strong>understanding</strong> of your customers'
      ],
      typeSpeed:40,
            backSpeed:15,
            backDelay:1000,
      loop:true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
      smartBackspace: true
});

//DISMISS BTN COOKIE BAR
const closeCookieBar = $(".dissmiss-btn, .close");
const cookieBar = $(".cookie-bar");

closeCookieBar.click( () => {
    cookieBar.hide();
});