var dialog = document.querySelector('dialog');
var showModalButton = document.querySelectorAll('.show-dialog');
if (! dialog.showModal) {
	dialogPolyfill.registerDialog(dialog);
}
for (var prop in showModalButton){
	if( showModalButton.hasOwnProperty( prop ) ) {
		showModalButton[prop].addEventListener('click', function () {
			dialog.showModal();
		});
	}
}

var closes = dialog.querySelectorAll('.close');
for (var prop in closes){
	if( closes.hasOwnProperty( prop ) ) {
		closes[prop].addEventListener('click', function () {
			dialog.close();
		});
	}
}
