// const msgStatus = document.querySelector('.msg-status')

// if (document.location.search === '?mail_status=sent') {
//     msgStatus.classList.add('success')
//     msgStatus.textContent = 'Wiadomość została wysłana!'

//     setTimeout(() => {
//         msgStatus.classList.remove('success')
//     }, 3000);
// } else {
//     msgStatus.classList.add('error')
//     msgStatus.textContent = 'Wystąpił błąd. Spróbuj ponownie później.'

//     setTimeout(() => {
//         msgStatus.classList.remove('error')
//     }, 3000);
// }

// https://www.youtube.com/watch?v=mXjBuq9yS18

const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear();