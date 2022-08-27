$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >=300) {
      $(".navbar-section").css('border-bottom', '1px solid rgba(255 ,255 ,255 ,0.31)') 
	   $(".navbar-section").css('box-shadow', ' 2px 10px 10px rgba(0,0,0,0.3)') 
    } else {
        $(".navbar-section").css('border-bottom' , 'none');
		 $(".navbar-section").css('box-shadow' , '0px 2px 10px rgba(0,0,0,0.3)');
    }
});

$(document).ready(function(){
  $(".menu_show").click(function(){
    $(".menu-items").toggle(900);
  });
});
