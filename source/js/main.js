let subs = document.body.querySelectorAll('.sub');
for(let sub of subs) {
	
	sub.addEventListener('submit', function (event) {
		
		let inputs = event.target.querySelectorAll('input');
		
		let formData = new FormData();
		formData.append('name', inputs['0'].value);
		formData.append('phone', inputs[1].value);

		let xhr = new XMLHttpRequest();
		xhr.open("POST", "mail.php");
		xhr.send(formData);
		xhr.onreadystatechange = function() {
			if (this.readyState != 4) return;
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			if(dialog.open){
				dialog.close();
			}
		}
	});
}
