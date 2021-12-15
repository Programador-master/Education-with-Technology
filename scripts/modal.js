const btnForm = document.querySelector('.btnForm')
const imgForm = document.querySelector('main section.content img.img')
var form = document.querySelector('main section.form')

btnForm.addEventListener('click', () => {
    imgForm.classList.toggle('active')
    form.classList.toggle('active')
})