$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >=300) {
      $(".navbar-section").css('border-bottom', '1px solid rgba(255 ,255 ,255 ,0.31)') 
	    $(".navbar-section").css('box-shadow', ' 2px 10px 10px rgba(0,0,0,0.3)') 
	    $(".navbar-section .m-hide").css('padding', ' 2px 0px)') 
    } else {
        $(".navbar-section").css('border-bottom' , 'none');
		    $(".navbar-section").css('box-shadow' , '0px 2px 10px rgba(0,0,0,0.3)');
        $(".navbar-section .m-hide").css('padding', ' 10px 0px)') 
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const menuShow = document.querySelector('.menu_show');
  const menuClose = document.querySelector('.menu_close');
  const menuItems = document.querySelector('.menu-items');

  menuShow.addEventListener('click', function () {
      menuItems.classList.add('active');
      menuShow.style.display = 'none';
      menuClose.style.display = 'inline-block';
  });

  menuClose.addEventListener('click', function () {
      menuItems.classList.remove('active');
      menuShow.style.display = 'inline-block';
      menuClose.style.display = 'none';
  });
});