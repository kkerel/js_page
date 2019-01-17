//헤더 푸터 퀵매뉴 호출(공통 레이아웃) //추후 삭제
ajaxHtmlCall('.js__header','GET','layout/header.html','html', true, headerFunctions);
ajaxHtmlCall('.js__quick','GET','layout/quick.html','html', true, quickFunctions);


$('.js').show();

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
