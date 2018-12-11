$(document).ready(() => {
  let windowSize = $(window).height();

  let isIE = navigator.userAgent.search("MSIE") > 0;
  // Edge 20+
  let isEdge = !isIE && !!window.StyleMedia;

  let resizeIntro = () => {
     // Set height for welcome section
    $('#intro-container').height(windowSize);
  };

   resizeIntro();

  //Resize the height for welcome section if screen changes
  $(window).resize(() => {
    windowSize = $(window).height();
    resizeIntro();
  });

  $('#explore-button').click(() => {
      $('#main-wrapper').animate({
        scrollTop: windowSize
      }, 2000);
  });

  // Change active class for nav a tags
  $('.nav-title').click((e)=>{
    let $nav_container = $('#nav');
    $nav_container.find('.active').removeClass('active');
    $(e.currentTarget).addClass('active');
  });

  // Make nav fixed once past intro
  if(isIE || isEdge){
    $('#main-wrapper').scroll(()=> {
    let container_width = $("#main-wrapper").width();
    let offset = $('#about').offset().top - 150;
    let $nav = $('#nav');
    let top = $('#main-wrapper').offset().top;
    if(top >= offset){
      $nav.addClass('fixed');
      $nav.width(container_width);
    }
    if(top < offset) {
      $nav.removeClass('fixed');
    }
  });
  }

  // Navbar smooth scroll
  $('#nav a').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      let target = $(this).attr("href").substring(1);
      // perform animated scrolling by getting top-position of target-element and set it as scroll target
    document.getElementById(target).scrollIntoView({block: 'start', behavior: 'smooth'});
  });

  // Scrollspy Implementation
  $('#main-wrapper').scroll(function() {
    let viewHeight = $('#main-wrapper').outerHeight();
    let nav = $('#nav');

    // Assign active class to nav links while scolling
    $('.page-section').each(function() {
      let sectionTop = $(this).offset().top;
      let sectionHeight = $(this).outerHeight();
      let id = $(this).attr('id');


      if (sectionTop <= (0.60 * viewHeight) && sectionTop >= 0) {
        nav.find('a').removeClass('active');
        $(`a[href='#${id}']`).addClass('active');
      }
      if(sectionHeight + sectionTop >= (0.75 * viewHeight) && sectionTop <= 0){
        nav.find('a').removeClass('active');
        $(`a[href='#${id}']`).addClass('active');
      }
    });
  });

  /*$('#send-mail').bind('click', function(){
    console.log('submit clicked');
    $('#email-form').submit();
  });*/


});
