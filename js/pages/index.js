//모듈 호출
startJs();

define(['jquery','jquery-ui','layout'], function($) {
	indexFunctions();
});

//index Functions
function indexFunctions() {
    //배너 슬라이드
    bxSliders('.main-slide-banner .main-banner-slider', 200, 0, 4, '', true, true);
    quick();
    title();
    heightCheck();
    bodyCheck();
    asideAction();
    // browserCheck();
    // visualRotate();
}
