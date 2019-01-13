//헤더 푸터 퀵매뉴 호출(공통 레이아웃) //추후 삭제
ajaxHtmlCall('.header','GET','layout/header.html','html', true, headerFunctions);
ajaxHtmlCall('.quick','GET','layout/quick.html','html', true, quickFunctions);

$('.js__container').show();
controlFunctions();


//Layout Html CallBack Functions
function headerFunctions() {
    headerText();
    title();
    
}
function footerFunctions() {}
function quickFunctions() {
	scrollAchor();
}
function controlFunctions() {}
