$(document).ready(function () {
  new WOW().init();
  var onOff = true;
  var onOff2 = true;

  $(".header-menu__link").click(function (e) {
    e.preventDefault();
    var navHeight = $(".header-nav").outerHeight();
    var href = $(this).attr("href");
    var target = $(href).offset().top - navHeight;
    $("html").animate(
      {
        scrollTop: target,
      },
      800
    );
    if ($(".header-menu").hasClass("menu-open")) {
      $(".header-nav").addClass("fixed-top");
      $(".header-menu").removeClass("menu-open");
      $(".header-menu__burger").removeClass("open");
    }
  });
  $(".header-menu__burger").click(function () {
    if (!$(this).hasClass("open")) {
      $(this).addClass("open");
      $(".header-menu").addClass("menu-open");
      $(".header-nav").addClass("fixed-top");
      onOff2 = false;
    } else {
      $(this).removeClass("open");
      $(".header-menu").removeClass("menu-open");
      if (onOff == true) {
        $(".header-nav").removeClass("fixed-top");
      }
      onOff2 = true;
    }
  });
  $(window).scroll(function () {
    if (
      $(this).scrollTop() >=
        $(".header").outerHeight() - $(".header-nav").outerHeight() &&
      onOff == true &&
      onOff2 == true
    ) {
      $(".header-nav").addClass("fixed-top").css("opacity", 0).animate(
        {
          opacity: 1,
        },
        800
      );
      onOff = false;
    } else if (
      $(this).scrollTop() <
        $(".header").outerHeight() - $(".header-nav").outerHeight() &&
      onOff == false &&
      onOff2 == true
    ) {
      $(".header-nav").animate(
        {
          opacity: 0,
        },
        800,
        function () {
          $(".header-nav").removeClass("fixed-top").css("opacity", 1);
        }
      );
      onOff = true;
    }
    $(".header-menu__link").each(function () {
      var href = $(this).attr("href");
      var target = $(href).offset().top - $(".header-nav").outerHeight() - 10;
      if (target <= $(window).scrollTop()) {
        $(".header-menu__link").removeClass("header-menu__link_active");
        $(this).addClass("header-menu__link_active");
      }
    });
    if ($(this).scrollTop() > 350) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });
  $("#top").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1200
    );
  });
  $(".about-wrap__ask").click(function () {
    if (!$(this).hasClass("open")) {
      $(".about-wrap__answer").slideUp();
      $(this).next().slideDown();
      $(this).addClass("open");
    } else {
      $(".about-wrap__ask").removeClass("open");
      $(".about-wrap__answer").slideUp();
    }
  });

  function Slider(sliderClass) {
    this.li = document.querySelectorAll(
      sliderClass + " .work-process-slider__indicators li"
    );
    this.items = document.querySelectorAll(
      sliderClass + " .work-process-slider__item"
    );
    this.prev = document.querySelector(
      sliderClass + " .work-process-slider__prev"
    );
    this.next = document.querySelector(
      sliderClass + " .work-process-slider__next"
    );
    this.ul = document.querySelector(
      sliderClass + " .work-process-slider__indicators"
    );
    this.counter = 0;
    var context = this;
    var timer;
    var array = [this.ul, this.next, this.prev];

    for (var u = 0; u < array.length; u++) {
      array[u].onmouseover = function () {
        clearInterval(timer);
      };
      array[u].onmouseout = function () {
        autoplay();
      };
    }

    for (var i = 0; i < this.li.length; i++) {
      this.li[i].addEventListener("click", function () {
        for (var j = 0; j < context.li.length; j++) {
          context.li[j].classList.remove(
            "work-process-slider__indicators_active-li"
          );
          context.items[j].classList.remove("work-process-slider__item_active");
        }
        this.classList.add("work-process-slider__indicators_active-li");
        var slide = this.getAttribute("data-slide");
        context.items[slide].classList.add("work-process-slider__item_active");
        context.counter = slide;
      });
    }

    this.prev.addEventListener("click", left);
    this.next.addEventListener("click", right);

    function left() {
      context.items[context.counter].classList.remove(
        "work-process-slider__item_active"
      );
      context.li[context.counter].classList.remove(
        "work-process-slider__indicators_active-li"
      );
      context.counter--;
      if (context.counter < 0) {
        context.counter = context.items.length - 1;
      }
      context.items[context.counter].classList.add(
        "work-process-slider__item_active"
      );
      context.li[context.counter].classList.add(
        "work-process-slider__indicators_active-li"
      );
    }

    function right() {
      context.items[context.counter].classList.remove(
        "work-process-slider__item_active"
      );
      context.li[context.counter].classList.remove(
        "work-process-slider__indicators_active-li"
      );
      context.counter++;
      if (context.counter == context.items.length) {
        context.counter = 0;
      }
      context.items[context.counter].classList.add(
        "work-process-slider__item_active"
      );
      context.li[context.counter].classList.add(
        "work-process-slider__indicators_active-li"
      );
    }

    function autoplay() {
      timer = setInterval(right, 4000);
    }
    autoplay();
  }
  new Slider(".work-process-slider");

  // текст двигать можно
  /*  dragElement(document.getElementById(("mydiv"))); */

  /*   function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    }
     */
  // разваравчивать наши подробнее
  /*    $('.smm-prices-block__header').click(function(){
        if(!$(this).hasClass('open')){
            $('.smm-prices-block__content').slideUp();
            $(this).next().slideDown().css('display', 'flex');
            $(this).addClass('open');
        }
        else{
            $('.smm-prices-block__header').removeClass('open');
            $('.smm-prices-block__content').slideUp();
        }
     })  */
});
