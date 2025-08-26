$(document).ready(function(){
  
    const sections =document.querySelectorAll('section[id]');
    window.addEventListener('scroll', scrollActive);

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 85;
            sectionId = current.getAttribute('id');

            if(scroll > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active')
            }else {
                document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active')  
             }

        })
    }

    $(window).scroll(function(){
if($(this).scrollTop() >= 500){
    $(".back-to-top").fadeIn(200);
}else {
    (".back-to-top").fadeOut(200);   
}


})


$(function(){
        $('.toggle-overlay').click(function(){
            $('.search-overlay').toggleClass('open');
        })
    })

    
$('.menu-toggle').click(function(){
    $('.menu-toggle').toggleClass('active');
})

$(".gallery-button").click(function (){
    var name = $(this).attr('data-filter');
    if(name = "all"){
        $(".shot-thumbnail").show('2000');
    }else{
        $(".shot-thumbnail").not("."+ name).hide('2000');
        $(".shot-thumbnail").filter("."+ name).show('2000');
        
    }

    
  $('.gallery-button').on('click', function(){
    const filter = $(this).data('filter');

    
    $('.gallery-button').removeClass('active');
    $(this).addClass('active');

    
    if(filter === 'all') {
      $('.team').show(400);
    } else {
      $('.team').hide(400);
      $('.team.' + filter).show(400);
    }
  });


})

$('.navigation a').click(function(){
    $(this).addClass("active").siblings().removeClass('active');
})

$('#our-team').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

  $('.toggle-info .pic').on('click', function(){
    
    $('.content-team').not($(this).next('.content-team')).slideUp();

    
    $(this).next('.content-team').slideToggle();
  });


  $('#newsletter-form').on('submit', function(e) {
    e.preventDefault(); 

    let email = $('#newsletter-email').val().trim();

    if (email && email.includes('@')) {
      $('#newsletter-message').fadeIn();

      setTimeout(function() {
        $('#newsletter-message').fadeOut();
        $('#newsletter-email').val('');
      }, 3000);
    } else {
      alert("❗ Please enter a valid email address.");
    }
  });



   
  })



