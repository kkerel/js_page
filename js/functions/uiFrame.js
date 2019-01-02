function bxSliders(obj, width, margin, count, controller, auto, loop) {
    var options = {
        mode: 'horizontal',
        speed: 300,
        pause: 4000,
        touchEnabled: true,
        auto: auto,
        responsive: true,
        autoHover: false,
        minSlides: 1,
        slideWidth:width,
        slideMargin:margin,
        maxSlides: count,
        infiniteLoop:loop,
        moveSlides: 1
    };
    options['controls'] = (controller == 'controls') ? true:(controller == 'all') ? true:false;
    options['pager'] = (controller == 'pager') ? true:(controller == 'all') ? true:false;
    var slider = $(obj).bxSlider(options);
}

function heightCheck(){
    headerHeight = $(window).height()
    $('.js__header').css('height', headerHeight);
    $(window).resize(function() {
        headerHeight = $(window).height()
        $('.js__header').css('height', headerHeight);
    });
}

function title() {
    var text = $('.js__header__inner__text');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= 1) {
            text.removeClass('hidden');
        } else {
            text.addClass('hidden');
        }
    });
}

function quick() {
    $('.js__header__nav--btn').on('click', function(){
        $(this).toggleClass('active');
        $('.js__header__menu').toggleClass('active');
        $('body').toggleClass('scroll--hidden');
    });
}

function bodyCheck() {
    var $body = $("body");
    var numberOfSections = 2;
    var sectionOffsets = [];
    for(var i = 0; i < numberOfSections + 1; i++) {
        sectionOffsets.push($('.js__container__contents').eq(i).offset());
    }
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();

        for(var i = 0; i < numberOfSections + 1; i++) {
            if(scrollTop > sectionOffsets[i].top) {
                $body.removeClass().addClass("bg" + (i + 1));
            }
        }
    });
}

function asideAction() {
    var actionBtn = $('.js__header__nav--btn');
    var actionViev = $('.js__header__menu');
    actionBtn.on('click',function(){
        actionViev.show();
    });
}

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

function headerText() {
    var dummy_text = Array(700).join('j u n e s u');
    $('.js__header__inner__bg').text(dummy_text);
}

function visualRotate() {
    $(window).scroll(function() {
        var rotateValue = ($(window).scrollTop() / 10 );
        $('.profile__bg__2,.profile__bg__3,.profile__bg__5').css({ transform: 'rotate(' + rotateValue + 'deg)' });
    });
}