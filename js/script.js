$(document).ready(function () {
    new WOW().init();
    var onOff = true;
    var onOff2 = true;
    $('.header-menu__link').click(function(e){
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
        $('.header-menu__link').each(function(){
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
});