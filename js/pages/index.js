//모듈 호출
startJs();

define(['jquery','jquery-ui','layout'], function($) {
	indexFunctions();
});

//index Functions
function indexFunctions() {
	setTimeout(function(){
		$('.js').show();
	},7000);
	setTimeout(function(){
		$('.intro').hide();
	},7000);
	browserCheck();
    title();
    heightCheck();
    bodyCheck();
	contentsFade();
    firstRotate();
    scrollActive();
	controlFunctions();
}