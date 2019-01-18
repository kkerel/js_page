// header height
function heightCheck(){
    headerHeight = $(window).height()
    $('.home').css('height', headerHeight);
    $(window).resize(function() {
        headerHeight = $(window).height()
        $('.home').css('height', headerHeight);
    });
}

// header text block
function title() {
    var text = $('.js__header--text');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            text.removeClass('hidden');
        } else {
            text.addClass('hidden');
        }
    });
}

// section body addclass
function bodyCheck() {
    var $body = $("body");
    var numberOfSections = 3;
    var sectionOffsets = [];
    for(var i = 0; i < numberOfSections + 1; i++) {
        sectionOffsets.push($('article').eq(i).offset());
    }
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop() + 100;

        for(var i = 0; i < numberOfSections + 1; i++) {
            if(scrollTop > sectionOffsets[i].top) {
                $body.removeClass().addClass("section" + (i + 1));
            }
        }
    });
}

// brower ben
function browserCheck() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("chrome") != -1) {
       console.log('chrome');
    } else {
        $('body').remove();
        alert("현재 브라우저에서는 제공되지 않습니다.\n\n 크롬 브라우저를 사용해주시기 바랍니다.");
        window.open('about:blank','_self').self.close();  // IE에서 묻지 않고 창 닫기
    }
}

// visual text
function headerText() {
    var dummy_text = Array(500).join('j u n e s u');
    $('.home--visual').text(dummy_text);
}

// icon rotate
function firstRotate() {
    $(window).scroll(function() {
        var Value = ($(window).scrollTop() / 8 );
        var RotateValue = ($(window).scrollTop() / 500 );
        $('.section2 .profile__bg__3').css({ 'transform' : 'rotate(' + Value + 'deg)'});
        $('.section2 .profile__bg__2,.section2 .profile__bg__5').css({ 'transform' : 'rotate('+ RotateValue +'deg) translate3d(0px,' + Value + 'px, 0px)'});
    });
}

// contents fade
function contentsFade(){
    $(window).scroll(function(){
        $('.inner__section__contents').each( function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 370;
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('active');
            }else if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('active');
            }
        });

        $('.photo__contents').each( function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 370;
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('active');
            }else if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('active');
            }
        });

        $('.title--effect').each( function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 370;
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('active');
            }else if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('active');
            }
        });

    })
}

//Scroll active
function scrollActive() {
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $('article').each(function (i) {
            if($(this).position().top  <= scrollDistance) {
                $('a[href*="#"]:not([href="#"]).on').removeClass('on');
                $('.menu > a').eq(i).addClass('on');
            }
        });

    }).scroll();
}

// Scroll Achor
function scrollAchor() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if(location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if(target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
}

function intro() {
    var title = $(".intro__title");
    var line = $(".intro__line");
    var text = $(".intro__text");
    
    title.delay(1000).animate({top: "0", opacity: "1"}, 1000, function() {
        line.delay(500).animate({marginLeft: "0"}, 800, function() {
            text.delay(1000).animate({bottom: "0", opacity: "1"}, 1000)
        });
    });
}
    
    