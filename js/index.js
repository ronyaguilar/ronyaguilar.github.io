$(document).ready(() => {

  $('.toggable-title').click((e) => {
    let $container = $(e.currentTarget).closest('.content-item');
    let $title = $container.find('.toggable-title');
    if($title.hasClass('active')){
      $container.find('.collapse-wrapper').animate({
        height: ["toggle"],
        marginLeft: "-30px",
        opacity: "toggle"
      },800);
      $title.removeClass('active');
    }else{
      $title.addClass('active');
      $container.find('.collapse-wrapper').animate({
        height: ["toggle"],
        marginLeft: "0px",
        opacity: "toggle"
      },800);
    }
  });
});
