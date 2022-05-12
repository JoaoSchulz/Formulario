const form = document.getElementById('form') //criando uma variavel constante usando getElement com a variavel form
const username = document.getElementById('username')//criando uma variavel constante usando getElement com a variavel username
const email = document.getElementById('email')//criando uma variavel constante usando getElement com a variavel email
const password = document.getElementById('password')//criando uma variavel constante usando getElement com a variavel password
const passwordtwo = document.getElementById('password-two')//criando uma variavel constante usando getElement com a variavel password-two
const botao = document.getElementsByTagName('button')

var newUser = [];
var newEmails = [];

form.addEventListener('reset', (e) => { //cria uma espera de um evento do tipo submit 
    e.preventDefault()//impede q as condições impostas pelo navegador de funcionar (como salvar password)

    checkInputs()

})

function checkInputs() { //função criada para verificar os inputs

    const usernameValue = username.value.trim() //constante criada para receber o valor proposto no input do username
    const emailValue = email.value.trim() //constante criada para receber o valor proposto no input do email
    const passwordValue = password.value.trim() //constante criada para receber o valor proposto no input do password
    const passwordtwoValue = passwordtwo.value.trim() //constante criada para receber o valor proposto no input do passwordtwo

    if(usernameValue === '') { //condição para caso nao tenha nada escrito no input
        setErrorFor(username, 'Preencha esse campo') //função com os parametros username e a mensagem caso de erro no input
    } else if(usernameValue.length < 3){ // se o usernameValue tiver menos que 3 caracteres
        setErrorFor(username, 'Numero de Caracteres invalido')
    } else if (newUser.includes(usernameValue)){ //verificar se o usernameValue esta incluido na array newUser
        setErrorFor(username, 'username ja esta em uso')
    } else {
        setSuccessFor(username)
    }

    if(emailValue === '') { //condição para caso nao tenha nada escrito no input
        setErrorFor(email, 'Preencha esse campo') //função '' parametro '' erro
    } else if (!isEmail(emailValue)) { //condição criada a partir de uma função absurda para verificar o email, n faço ideia
        setErrorFor(email, 'Email inválido') //função '' parametro '' email e mensagem
    } else if (newEmails.includes(emailValue)){ //verificar se o emailValue esta incluido na array newEmail
        setErrorFor(email, 'Email ja esta em uso')
    } else {
        setSuccessFor(email) //função '' sucesso
    }

        
    if(passwordValue === '') { //condição para caso nao tenha nada escrito no input
        setErrorFor(password, 'Preencha esse campo') // ''
    } else if(passwordValue.length < 8) {  // condição para verificar se a password tem mais de 8 caracteres
        setErrorFor(password, 'password deve ter mais que 8 caracteres') 
    } else {
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
        setErrorFor(passwordtwo, 'Preencha esse campo')
    } else if(passwordValue !== passwordtwoValue) { // condição para caso a password e o confirmar password sejam diferentes, mostrar a mensagem
        setErrorFor(passwordtwo, 'passwords não são iguais')
    } else {
        setSuccessFor(passwordtwo)
    }

    newUser.push(usernameValue)
    newEmails.push(emailValue)

}


function setErrorFor(input, message) { //função para mostrar a cor vermelha e a mensagem de erro embaixo do input
    const formControl = input.parentElement; //input.parentElement é para pegar a tag filha input que esta mais proxima da tag pai
    const small = formControl.querySelector('small') //seleciona o seletor para a tag small

    small.innerText = message //troca a mensagem do small para a frase da mensagem

    formControl.className = 'form-control error' //troca o username da class para form-control error
}

function setSuccessFor(input) { //função para mostrar a borda verde
    const formControl = input.parentElement; //input.parentElement é para pegar a tag filha input que esta mais proxima da tag pai

    formControl.className = 'form-control success' //troca o username da class para form-control error
}

function isEmail(email) { //me recuso a entender isso, função da internet
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}