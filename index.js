const form = document.getElementById('form') //criando uma variavel constante usando getElement com a variavel form
const nome = document.getElementById('nome')//criando uma variavel constante usando getElement com a variavel nome
const email = document.getElementById('email')//criando uma variavel constante usando getElement com a variavel email
const senha = document.getElementById('senha')//criando uma variavel constante usando getElement com a variavel senha
const senhadois = document.getElementById('senha-dois')//criando uma variavel constante usando getElement com a variavel senha-dois

var newUser = [];
var newEmails = [];

form.addEventListener('reset', (e) => { //cria uma espera de um evento do tipo submit 
    e.preventDefault()//impede q as condições impostas pelo navegador de funcionar (como salvar senha)

    checkInputs()

})

function checkInputs() { //função criada para verificar os inputs

    const nomeValue = nome.value.trim() //constante criada para receber o valor proposto no input do nome
    const emailValue = email.value.trim() //constante criada para receber o valor proposto no input do email
    const senhaValue = senha.value.trim() //constante criada para receber o valor proposto no input do senha
    const senhadoisValue = senhadois.value.trim() //constante criada para receber o valor proposto no input do senhadois

    if(nomeValue === '') { //condição para caso nao tenha nada escrito no input
        setErrorFor(nome, 'Preencha esse campo') //função com os parametros nome e a mensagem caso de erro no input
    } else if(nomeValue.length < 3){ // se o nomeValue tiver menos que 3 caracteres
        setErrorFor(nome, 'Numero de Caracteres invalido')
    } else if (newUser.includes(nomeValue)){ //verificar se o nomeValue esta incluido na array newUser
        setErrorFor(nome, 'Nome ja esta em uso')
    } else {
        setSuccessFor(nome)
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

        
    if(senhaValue === '') { //condição para caso nao tenha nada escrito no input
        setErrorFor(senha, 'Preencha esse campo') // ''
    } else if(senhaValue.length < 8) {  // condição para verificar se a senha tem mais de 8 caracteres
        setErrorFor(senha, 'Senha deve ter mais que 8 caracteres') 
    } else {
        setSuccessFor(senha)
    }

    if(senhadoisValue === '') {
        setErrorFor(senhadois, 'Preencha esse campo')
    } else if(senhaValue !== senhadoisValue) { // condição para caso a senha e o confirmar senha sejam diferentes, mostrar a mensagem
        setErrorFor(senhadois, 'Senhas não são iguais')
    } else {
        setSuccessFor(senhadois)
    }

    newUser.push(nomeValue)
    newEmails.push(emailValue)

}


function setErrorFor(input, message) { //função para mostrar a cor vermelha e a mensagem de erro embaixo do input
    const formControl = input.parentElement; //input.parentElement é para pegar a tag filha input que esta mais proxima da tag pai
    const small = formControl.querySelector('small') //seleciona o seletor para a tag small

    small.innerText = message //troca a mensagem do small para a frase da mensagem

    formControl.className = 'form-control error' //troca o nome da class para form-control error
}

function setSuccessFor(input) { //função para mostrar a borda verde
    const formControl = input.parentElement; //input.parentElement é para pegar a tag filha input que esta mais proxima da tag pai

    formControl.className = 'form-control success' //troca o nome da class para form-control error
}

function isEmail(email) { //me recuso a entender isso, função da internet
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}