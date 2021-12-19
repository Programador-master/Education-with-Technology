var form = document.querySelector('main section.form')

const btnForm = document.querySelector('a.btnForm')
const imgForm = document.querySelector('main section.content img.img')
var form = document.querySelector('main section.form')

btnForm.addEventListener('click', event => {
    
    imgForm.classList.toggle('active')
    form.classList.toggle('active')

    event.preventDefault()
})


const inpQuestion = document.querySelector('form .question')

const number1 = parseInt(Math.random() *9)
const number2 = parseInt(Math.random() *9)

const question = `${number1} + ${number2} =`
const answerTrue = number1 + number2
console.log(answerTrue)

inpQuestion.innerHTML = question


const btnSubmit = document.querySelector('form button.btnSubmit')

btnSubmit.
addEventListener("click", event => {

    let inpQuestion = document.querySelector('form #verification').value

    if(answerTrue != inpQuestion){
        alert("Resultado esta errado")
        event.preventDefault()
    
    }else {
        const email = document.querySelector('form #email').value

    }

})
