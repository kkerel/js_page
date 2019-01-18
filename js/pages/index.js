//모듈 호출
startJs();

define(['jquery','jquery-ui','layout'], function($) {
	indexFunctions();
});

//index Functions
function indexFunctions() {
	setTimeout(function(){
		$('.js').show();
		$('.intro').hide();
		bodyCheck();
	},7000);
	browserCheck();
    title();
    heightCheck();
	contentsFade();
    firstRotate();
    scrollActive();
	controlFunctions();
}