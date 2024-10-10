$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
  });

  const sections = $('section');
  const navitems = $('.nav-item');

  $(window).on('scroll', function (){
    const header = $('header');
    let activeSectionIndex = 0;
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    if (scrollPosition <= 0){
        header.css('box-shadow', 'none');

    }
    else{
        header.css('box-shadow','5px 1px 5px rgba(0, 0, 0, 0.1)');
    }
    sections.each(function(i){
        const section = $(this);
        const sectionTop = section.offset().top -96;
        const sectionBottom = sectionTop+ section.outerHeight();

        if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
            activeSectionIndex =i;
            return false;
        }
    });
    navitems.removeClass('active');
    $(navitems[activeSectionIndex]).addClass('active');
  });

  ScrollReveal().reveal('#cta',{
    origin: 'left',
    duration: 2000,
    distance: '20px'
  });
  
  ScrollReveal().reveal('#pets',{
    origin: 'left',
    duration: 2000,
    distance: '20px'
  });
  ScrollReveal().reveal('#cards',{
    origin: 'left',
    duration: 2000,
    distance: '20px'
  });
  ScrollReveal().reveal('.adoteme',{
    origin: 'left',
    duration: 2000,
    distance: '20px'
  });
  ScrollReveal().reveal('#adoteme-banner',{
    origin: 'right',
    duration: 2000,
    distance: '20px'
  });

  const modal = document.querySelector("dialog")
  const buttonClose = document.querySelector("dialog button")

  $("#btn-contato").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato1").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato2").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato3").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato4").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato5").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato6").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato7").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato8").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato9").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato10").on('click', function(){
    modal.showModal();
  });
  $("#btn-contato11").on('click', function(){
    modal.showModal();
  });
  buttonClose.onclick = function(){
    modal.close();
  }