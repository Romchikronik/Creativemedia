$(document).ready(function () {
    new WOW().init();
    var onOff = true;
    var onOff2 = true;
    $('.header-menu__link, site-menu__link').click(function(e){
        e.preventDefault();
        var navHeight = $('.header-nav').outerHeight() - 10;
        var href = $(this).attr('href');
        var target = $(href).offset().top - navHeight;
        $('html').animate({
           scrollTop: target
        }, 800)
        if($('.header-menu').hasClass('menu-open')){
            $('.header-nav').addClass('fixed-top');
            $('.header-menu').removeClass('menu-open');
            $('.header-menu__burger').removeClass('open');
        }
    })
    $('.header-menu__burger').click(function(){
        if(!$(this).hasClass('open')){
            $(this).addClass('open');
            $('.header-menu').addClass('menu-open');
            $('.header-nav').addClass('fixed-top');
            onOff2 = false;
        }
        else{
            $(this).removeClass('open');
            $('.header-menu').removeClass('menu-open');
            if(onOff == true){
                $('.header-nav').removeClass('fixed-top');
            }
            onOff2 = true;
        }
    })
    $(window).scroll(function(){
        if($(this).scrollTop() >= $('.header').outerHeight() - $('.header-nav').outerHeight() && onOff == true && onOff2 == true){
            $('.header-nav').addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1
            }, 800)
            onOff = false;
        }
        else if($(this).scrollTop() < $('.header').outerHeight() - $('.header-nav').outerHeight() && onOff == false && onOff2 == true){
            $('.header-nav').animate({
                opacity: 0
            }, 800, function(){
                $('.header-nav').removeClass('fixed-top').css('opacity', 1);
            }) 
            onOff = true;
        }
        $('.header-menu__link, site-menu__link').each(function(){
            var href = $(this).attr('href');
            var target = $(href).offset().top - $('.header-nav').outerHeight() - 10;
            if(target <=  $(window).scrollTop()){
                $('.header-menu__link').removeClass('header-menu__link_active');
                $(this).addClass('header-menu__link_active');
            }
        })
        if($(this).scrollTop() > 350){
            $('#top').fadeIn();
        }
        else{
            $('#top').fadeOut();
        }
        
        
     /*    if($(this).scrollTop() > $('.smm-prices').outerHeight()){
            $('.smm-advantages-left__title').animate({
                top: 800
            }, 30000)
        } */
    })
    $('#top').click(function(){
        $('html').animate({
          scrollTop: 0  
        }, 1200)
    })
    $('.btn_open-form').click(function(e){
        e.preventDefault();
       $('.overlay').show().css('overflow-y', 'auto');
       $('body').css('overflow-y', 'hidden');
       $('.content-form').animate({
          top: '50%'
       })
    })
    $('.content-form__close, .overlay').click(function(){
        $('.overlay').hide();
        $('body').css('overflow-y', 'scroll');
        $('.content-form').animate({
            top: '-150%'
         })
     })
     $('.footer-contact-social__vacancy').click(function(e){
        e.preventDefault();
       $('.overlay').show().css('overflow-y', 'auto');
       $('body').css('overflow-y', 'hidden');
       $('.vacancy').animate({
          left: '50%'
       })
    })
    $('.content-form__close, .overlay').click(function(){
        $('.overlay').hide();
        $('body').css('overflow-y', 'scroll');
        $('.vacancy').animate({
            left: '-150%'
         })
     })
     $('.input_file input[type=file]').change(function() {
        var t = $(this).val();
        if (t.indexOf('C:\\fakepath\\') + 1) t = t.substr(12);
        var e = $(this).next().find('.fake_file_input');
        e.val(t);
    });
   /*  $('.clear_input').click(function(e) {
        e.preventDefault();
        var a = $(this).parent();
        var e = a.find('.fake_file_input');
        var t = a.find('input[type=file]');
        t.replaceWith('<input type="file" name="" >');
        e.val('');
    }); */
    var i = 0;
    var txt = 'Мы - точка роста вашего бизнеса. Проанализируем вашу компанию и предложим лучший вариант реализации в интернете';
    var speed = 50;
    function typeWriter() {
    if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    document.getElementById("demo-mobile").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
    }
    
    window.onload = function(){
        typeWriter();
    }
      
     dragElement(document.getElementById(("mydiv")));

    function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
    }
    
    
    $('.smm-prices-block__header').click(function(){
        if(!$(this).hasClass('open')){
            $('.smm-prices-block__content').slideUp();
            $(this).next().slideDown().css('display', 'flex');
            $(this).addClass('open');
        }
        else{
            $('.smm-prices-block__header').removeClass('open');
            $('.smm-prices-block__content').slideUp();
        }
     }) 
     
     
});