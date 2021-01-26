// section slider
$(function () {

    $('.slider__img-inner').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        fade: true,
        zIndex: 1,
        dodts: true,
        focusOnSelect: true,
        speed: 500,
    });
});

// section map

$('.area').on('click', function () {
    $('.map__inner-content').html($(this).attr('community'));
    $('.map__inner-content').fadeIn(600);
    $('.map__inner-title').fadeOut(50);
    $ ('.map__text').addClass('active');
},
);
let area = $(".area");
let content = $(".map__inner-content");
let title = $(".map__inner-title");
let areaActive = $(".area__active")

$(document).mouseup(function (e) {
    if (!area.is(e.target) && area.has(e.target).length === 0 &&
        !content.is(e.target) && content.has(e.target).length === 0
    ) {
        content.fadeOut(600),
            title.fadeIn(600),
            area.removeClass('area__active');
    }
});
$('.area').on('click', function() {
    $('.area').removeClass('area__active');
    $(this).addClass('area__active');
});

// style select for popup

$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 500; 
    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
    $(window).on("load",function(){
        $(".new-select").mCustomScrollbar();
    });
});

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);


$('a[href^="#tab"]').on('click.smoothscroll',function (e) {
    e.preventDefault();

    const target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': window.pageYOffset});
        window.location.hash = target;
});

$(function (){
    $('.article__town-trigger').on('click', function(){
     
        const parent = $(this).parent();

        if (parent.hasClass('article__town--active')) {
            parent.remove('article__town--active')
        } else {
            $('.article__town').removeClass('article__town--active')
            parent.addClass ('article__town--active');
        }
        
    });
});

function myFunction() {
    let input, filter, ul, lil, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    lil = ul.getElementsByClassName("article__town-trigger");
    for (i = 0; i < lil.length; i++) {
      a = lil[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        lil[i].style.display = "";
    } else {
        $('.article__town').removeClass('article__town--active')
    }  
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        lil[i].style.display = "";
      } else {
        lil[i].style.display = "none"
      }
    }
}

