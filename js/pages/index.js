//모듈 호출
startJs();

define(['jquery','jquery-ui','layout'], function($) {
	indexFunctions();
});

//index Functions
function indexFunctions() {
	browserCheck();
    title();
    heightCheck();
    bodyCheck();
	contentsFade();
    firstRotate();
    scrollActive();
}