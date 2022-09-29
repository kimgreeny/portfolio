$(document).ready(function(){
  $('nav ul li:nth-of-type(1)').mouseenter(function(){
    $('this').children('div.submenu').stop().slideDown();
  });
  $('nav ul li:nth-of-type(1)').mouseleave(function(){
    $('this').children('div.submenu').stop().slideUp();
  });
})