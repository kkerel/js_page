//모듈 호출
startJs();

define(['jquery','jquery-ui','layout'], function($) {
	indexFunctions();
});

//index Functions
function indexFunctions() {
    title();
    heightCheck();
    bodyCheck();
    contentsFade();
    // browserCheck();
    firstRotate();
    scrollActive();
}