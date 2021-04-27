const email = document.querySelector('.cta__email');
const message = document.querySelector('.cta__invaild');
const btn = document.querySelector('.cta--btn');
const regexPatten = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


btn.addEventListener('click', () => {
    !email.value.match(regexPatten) ?
        message.classList.add('show') :
        message.classList.remove('show');
})
