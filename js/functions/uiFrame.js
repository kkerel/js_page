// header height
function heightCheck(){
    headerHeight = $(window).height()
    $('.js__header').css('height', headerHeight);
    $(window).resize(function() {
        headerHeight = $(window).height()
        $('.js__header').css('height', headerHeight);
    });
}

// header text block
function title() {
    var text = $('.js__header__inner__text');
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
    var browser = function() {
        // Return cached result if avalible, else get result then cache it.
        if (browser.prototype._cachedResult)
            return browser.prototype._cachedResult;
        // Opera 8.0+
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        // Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';
        // Safari 3.0+ "[object HTMLElementConstructor]"
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
        // Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;
        // Chrome 1+
        var isChrome = !!window.chrome && !!window.chrome.webstore;
        // Blink engine detection
        var isBlink = (isChrome || isOpera) && !!window.CSS;
        return browser.prototype._cachedResult =
            isOpera ? 'Opera' :
            isFirefox ? 'Firefox' :
            isSafari ? 'Safari' :
            isChrome ? 'Chrome' :
            isIE ? 'IE' :
            isEdge ? 'Edge' :
            isBlink ? 'Blink' :
            "Don't know";
    };
    console.log(browser());
    if (browser() !== 'Chrome' && browser() !== 'Firefox') {
        alert("본 사이트는 크롬,파이어폭스 브라우저에 최적화 되어있습니다.\n\n 크롬 브라우저를 사용해주시기 바랍니다.");
        window.open('about:blank','_self').self.close();  // IE에서 묻지 않고 창 닫기
    }
}

// visual text
function headerText() {
    var dummy_text = Array(500).join('j u n e s u');
    $('.js__header__inner__bg').text(dummy_text);
}

// icon rotate
function firstRotate() {
    $(window).scroll(function() {
        var rotateValue = ($(window).scrollTop() / 40 );
        $('.section1 .profile__bg__2,.section1 .profile__bg__3,.section1 .profile__bg__5').css({ transform: 'rotate(' + rotateValue + 'deg)' });
    });
}

// contents fade
function contentsFade(){
    $(window).scroll( function(){
        $('.inner__section__contents').each( function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 100;
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('active');
            }else if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('active');
            }
        });

        $('.photo__contents').each( function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() - 100;
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('active');
            }else if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('active');
            }
        });
    });
}

//Scroll active
function scrollActive() {
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $('article').each(function (i) {
            if($(this).position().top  <= scrollDistance) {
                $('a[href*="#"]:not([href="#"]).on').removeClass('on');
                $('a').eq(i).addClass('on');
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