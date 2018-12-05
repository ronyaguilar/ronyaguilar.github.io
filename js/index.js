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

  $('a').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      let target = $(this).attr("href").substring(1);
      // perform animated scrolling by getting top-position of target-element and set it as scroll target
    document.getElementById(target).scrollIntoView({block: 'start', behavior: 'smooth'});
  });

  $('#main-wrapper').scroll(function() {
    let viewportTop = $('#main-wrapper').scrollTop();
    let nav = $('#nav');
    let nav_height = nav.outerHeight();
          // Assign active class to nav links while scolling
    $('.page-section').each(function() {
      let sectionTop = $(this).offset().top - $('#main-wrapper').offset().top;
      
      let sectionBottom = sectionTop + $(this).outerHeight();
      console.log($(this).attr('id') + ': ' + sectionBottom);
      if (0 <= sectionTop) {
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
      if(sectionTop < 0){
        nav.find('a').removeClass('active');
      }
    });
  });
});
