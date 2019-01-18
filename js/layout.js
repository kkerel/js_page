ajaxHtmlCall('.intro','GET','layout/intro.html','html', true, headerFunctions);
ajaxHtmlCall('.js__header','GET','layout/header.html','html', true, headerFunctions);
ajaxHtmlCall('.js__quick','GET','layout/quick.html','html', true, quickFunctions);

controlFunctions();

//Layout Html CallBack Functions
function headerFunctions() {
	intro();
    headerText();
    title();
}
function footerFunctions() {}
function quickFunctions() {
	scrollAchor();
}
function controlFunctions() {}
