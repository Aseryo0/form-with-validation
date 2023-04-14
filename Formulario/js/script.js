const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("job")
const messageTextArea = document.querySelector("message")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    //Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("por favor, preencha o campo com seu nome")
        return
    }
    //valida o campo email
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("por favor, preencha o campo com seu email")
        return
    }
    //valida e verifica se o campo senmha está vazio
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no minimo 8 digitos")
        return
    }
    //veirifica se o campo select tem uma resposta
    if (jobSelect.value === "") {
        alert("por favor, selecione uma resposta")
        return
    }
    // Verifica se o campo de menssagem está completo
    if (messageTextArea.value === "") {
        alert("por favor, escreva uma menssagem")
        return
    }

    //se todos os campos estiverem corretos, envia o formulário
    form.submit()
})

//função que valida email
function isEmailValid(email) {
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    if (emailRegex.test(email)) {
        return true
    }
    return false

}

function validatePassword(password, minDigits) {
    if (password.lenght >= minDigits) {
        return true
    }
    return false
}