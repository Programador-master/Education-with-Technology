var form = document.querySelector('main section.form')


const inpQuestion = document.querySelector('form .question')

const number1 = parseInt(Math.random() *9)
const number2 = parseInt(Math.random() *9)

const question = `${number1} + ${number2} =`
const answerTrue = number1 + number2
console.log(answerTrue)

inpQuestion.innerHTML = question


const btnSubmit = document.querySelector('form .btnSubmit')

btnSubmit.
addEventListener("click", event => {

    let inpQuestion = document.querySelector('form #verification').value

    if(answerTrue != inpQuestion){
        alert("Resultado esta errado")
        event.preventDefault()
    
    }else {
        const email = document.querySelector('form #email').value

        toggleDispay("Aguarde, você esta sendo redirecionado.")

    }

})

function toggleDispay(mensage) {

        const warning = document.querySelector('div.warning')
        const msm = document.querySelector('p.text')

        warning.classList.toggle('active')
        msm.innerHTML = mensage

}