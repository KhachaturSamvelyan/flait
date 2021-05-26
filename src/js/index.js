var swiper = new Swiper('.swiper1', {
  pagination: {
    el: '.sw1',
  },
  navigation: {
    nextEl: '.next',
  },
  loop: true,
  autoplay: false,
  shortSwipes	: false,
  breakpoints: {
  
    319: {
      shortSwipes	: true,
      navigation: {
        nextEl: '.next_mob',
        prevEl: '.left_mob',

      },

    },
    1024: {
      shortSwipes	: false,

    },
    
  }
});

var swiper = new Swiper('.swiper2', {
pagination: {
  el: '.sw',
},
navigation: {
  nextEl: '.next2',
  prevEl: '.prev',

},
loop: true,
autoplay: false,


});

var swiper = new Swiper('.swiper3', {
slidesPerView: 3,
allowSlidePrev	: false,
allowSlideNext : false,
pagination: {
  el: '.sw3',
},
navigation: {
  nextEl: '.next4',
  prevEl: '.prev4',

},
loop: false,
autoplay: false,

breakpoints: {
  
  319: {
    slidesPerView: 1,
    allowSlidePrev	: true,
    allowSlideNext : true,
    loop: true,
    navigation: {
      nextEl: '.next4',
      prevEl: '.prev4',

    },

  },
  1024: {

    slidesPerView: 3,
    allowSlidePrev	: false,
    allowSlideNext : false,

  },
  
}


});


$(".one_type").click(function(event){
event.preventDefault();
});

$(".one_type_2").click(function(event){
event.preventDefault();
});

$(".tour_li a").click(function(event){
event.preventDefault();
});

$(".fancybox").click(function(event){
$('.modal_one').show()
$('body').css("overflow", "hidden");


});

$(".one_type").click(function(){
$('.mega_menu1').slideToggle('slow',function (){
$('.mega_menu2').css("display", "none");
$('.mega_menu3').css("display", "none");

if($('.mega_menu1').is(":visible")){
  $('.path_arr1').css("stroke", "#1857A3");
        $('.top_level').css("display", "none");

}
else{
  $('.path_arr1').css("stroke", "black");
        $('.top_level').css("display", "block");


}

});
})

$(".one_type_2").click(function(){
$('.mega_menu2').slideToggle('slow',function (){
$('.mega_menu1').css("display", "none");
$('.mega_menu3').css("display", "none");
if($('.mega_menu2').is(":visible")){
  $('.path_arr2').css("stroke", "#1857A3");
        $('.top_level').css("display", "none");

}
else{
  $('.path_arr2').css("stroke", "black");
  $('.top_level').css("display", "block");

}
});
})


$(".top_level").click(function(){
$('.mega_menu3').slideToggle('slow',function (){
$('.mega_menu1').css("display", "none");
$('.mega_menu2').css("display", "none");
});
})








$(".burger").click(function(){
$('.mobile_menu').slideToggle('slow',function (){
      $(".burger").hide()
      $(".mega_menu3").hide()
      $(".top_level").hide()


      $(".burger1").show()
});
})
$(".burger1").click(function(){
$('.mobile_menu').slideToggle('slow',function (){
      $(".burger").show()
      $(".burger1").hide()
      $(".top_level").show()

});
})




$(".contact").click(function(){
$('html, body').animate({
 scrollTop:$("#contact").position().top
}, 500);
});


$(".ab").click(function(){
$('html, body').animate({
 scrollTop:$("#about").position().top
}, 500);
});



$(".tr").click(function(){
$('html, body').animate({
 scrollTop:$("#tour").position().top
}, 500);
});


$(".fd").click(function(){
$('html, body').animate({
 scrollTop:$("#feedback").position().top
}, 500);
});


$(".x").click(function(){
$(this).parent('li').hide()
});

$(".show").click(function(){
$('.modal_one').show();
$('body').css("overflow-y", "hidden");


});

$(".mod").click(function(){
$('.modal_one').hide();
$('body').css("overflow-y", "scroll");


});


$(".tour_li ul li a").click(function(){
$(this).parent('li').appendTo('.modal_black ul')
});






$(".add_blok").click(function(){
$('.tour_li_content').slideToggle('slow',function (){


});
})

$(".datep").flatpickr();



