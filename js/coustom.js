/*global $ */
/* smooth scroll */
$(function () {
    'use strict';   
    
/* Start nice scroll with click on links */
    
    $('.nav li a').click(function () {
       $('html, body').animate({
        scrollTop : $('#' + $(this).data('value')).offset().top}, 1000);
    });
    
/* End nice scroll with click on links */

    
    
/* Start changing active link*/
    
    $('li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
/* End changing active link*/
    
    
    
    
/* Start fixed ul trick */

    $('.btn-nav').click(function () {
       $('.fix-nav').slideDown();
        $(this).hide();
        $(this).show(6000);
    });
    
    $(document).click(function () {
       $('.fix-nav').fadeOut(10000);
    });
    

/* End fixed ul trick */


    
    
/* Start description TRICK */

    $('.btn-description').click(function(){
        $('.description').slideDown(1500);
        $(this).hide();
    })
    
    $('.btn-desc').click(function(){
        $('.description').fadeOut();
        $('.btn-description').show();
    })
    
/* End description TRICK */
    
    
    
    
/* Trigger NiceScroll */

    $('html').niceScroll({cursorcolor:"#1abc9c", cursorborder:"none",cursorwidth: "7px"})

/* End Trigger NiceScroll */

    
    
   
    
    
   /* Start Loading Trick */

    
    $(window).load(function(){
        $('.loading').fadeOut(3000);
    })
   
   
   /* Start Loading Trick */
   
   
   
   
   
   /* Start Hide And show the button with the Scroll */
 
    $(window).scroll(function(){
       if($(this).scrollTop() >= 700)
           {
               $('.btn-nav').show();
           }
       else
           {
               $('.btn-nav').hide();
           }
   })

   
  /* End Hide And show the button with the Scroll */
    
    
    
 /* Start btn Read and Show Trick */
    $('.btn-one').click(function(){
        $('.btn-one ~ p').fadeToggle(2000);
    })
    
    $('.btn-two').click(function(){
        $('.btn-two ~ p').fadeToggle(2000);
    })
    
  
    
    $('.btn-show').click(function(){
        $('.show-more').fadeToggle(2000);
        $(this).hide();
    })

   $('.btn').click(function () {
       $('.livename').fadeToggle()
    });
});


