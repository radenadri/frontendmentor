const subscribeForm = document.getElementById('subscribe');
const email = document.getElementById('email');

subscribeForm.addEventListener('submit', e => {
	e.preventDefault();
	const emailVal = email.value;

	if (!validateEmail(emailVal)) {
		subscribeForm.classList.add('error');
	} else {
		subscribeForm.classList.remove('error');
		document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
	}
});

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}