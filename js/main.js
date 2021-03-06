
$(document).ready(function () {
  // document.querySelector('#root ~ div').style.display = "none";
 

  //------------open menu ------------
  $("ul.menu-one").find('li a').each(function () {
    if ($(this).next().length > 0) {
      $(this).parent('li').append('<span class="dd-trigger"></span>');
    }
  })
 
  //
  $('ul.menu-one').find('li .dd-trigger').on('click', function (e) {
    e.preventDefault();
    $(this).parent('li').toggleClass('active');

  });
  // open menu
  $('.navbarToggler').on('click', () => {
    $('.Khung-Menu').toggleClass('open-menu')
    $('.navbarToggler').toggleClass('active');
  })
  // close menu 
  $('.cross-wrap').on('click', () => {
    $('.Khung-Menu').removeClass('open-menu')
    $('.navbarToggler').removeClass('active');
  })
 
  $('button.scrollTop').on('click', () => {
    $("html ,body").animate({ scrollTop: 0 }, 800);

  })

  //------------open menu ------------
  // //------------scroll//------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.ground-menu').addClass('active');
      $('.scrollTop').addClass('active');
    } else {
      $('.ground-menu').removeClass('active');
      $('.scrollTop').removeClass('active');
    }
  });

  //------------------------slider------------------------

})
