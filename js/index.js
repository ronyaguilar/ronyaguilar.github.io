$(document).ready(() => {
  let windowSize = $(window).height();
  
  let isIE = navigator.userAgent.search("MSIE") > 0;
  // Edge 20+
  let isEdge = !isIE && !!window.StyleMedia;
  
  let resizeSection = () => {
     // Set height for welcome section
    $('#intro-container').height(windowSize);
    $('#about').height(windowSize);
  };
  
   resizeSection();
    
  //Resize the height for welcome section if screen changes
  $(window).resize(() => {
    windowSize = $(window).height();
    resizeSection();
  });
  
  $('#explore-button').click(() => {
      $('#main-wrapper').animate({
        scrollTop: windowSize
      }, 2000);
  });
  
  // Change active class for nav a tags
  $('.nav-title').click((e)=>{
    console.log('nav title clicked')
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

      var target = $(this).attr("href"); // Set the target as variable
      var scrollDistance = $(target).position().top;
      console.log('initial top: ' + scrollDistance);
      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('#main-wrapper').stop().animate({
          scrollTop: scrollDistance
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
          console.log('end top: ' + $(target).position().top);
      });
      
      return false;
  });

 /* $('#main-wrapper').scroll(function() {
          var scrollDistance = $('#main-wrapper').scrollTop();
          // Assign active class to nav links while scolling
          $('.page-section').each(function(i) {
              if ($(this).position().top <= scrollDistance) {
                $('.active').removeClass('active');
                $('a').eq(i).addClass('active');
              }
          });
  }).scroll();*/
});
