$(document).ready(function(){

  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 800,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });

  $('#backTop').backTop({

    // the scroll position in px from the top
    'position' : 400,
  
    // scroll animation speed
    'speed' : 500,
  
    // red, white, black or green
    'color' : 'red',
  });
});
$(document).ready(function(){
  $('.search').click(function(){
      $('.serch_bar').show();
  });
  $('.back').click(function(){
      $('.serch_bar').hide();
  });
  // Active link

  $("nav a").click(function(){
    $("nav a").removeClass("active");
    $(this).addClass("active");
});

// SMOOTH Scroll FOR safari/IE/edge

$("a").on('click',function(event){
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){
            window.location.hash = hash;
        })
    }
})
});
$(document).ready(function(){
$(".sticky_menu").waypoint(function(direction){
    if (direction == "down"){
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
});


});
function openNav() {
 document.getElementById("myNav").style.width = "100%"
}
function closeNav() {
 document.getElementById("myNav").style.width = "0%"
}
!function(o){o.fn.backTop=function(e){var n=this,i=o.extend({position:400,speed:500,color:"white"},e),t=i.position,c=i.speed,d=i.color;n.addClass("white"==d?"white":"red"==d?"red":"green"==d?"green":"black"),n.css({right:40,bottom:40,position:"fixed"}),o(document).scroll(function(){var e=o(window).scrollTop();console.log(e),e>=t?n.fadeIn(c):n.fadeOut(c)}),n.click(function(){o("html, body").animate({scrollTop:0},{duration:200})})}}(jQuery);
