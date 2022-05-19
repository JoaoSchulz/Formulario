const form = document.getElementById('form') 
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

document.getElementById('botao').disabled = true
document.getElementById('botao').style.color = "grey"


var newUser = [];
var newEmails = [];

    username.addEventListener('blur', function(){

        const usernameValue = username.value.trim()
        if(usernameValue === '') { 
            setErrorFor(username, 'Preencha esse campo') 
        } else if(usernameValue.length < 3){ 
            setErrorFor(username, 'Numero de Caracteres invalido')
        } else if (newUser.includes(usernameValue)){ 
            setErrorFor(username, 'username ja esta em uso')
        } else {
            setSuccessFor(username)
        }
    });
    
    email.addEventListener('blur', function(){

        const emailValue = email.value.trim()
        if(emailValue === '') { 
            setErrorFor(email, 'Preencha esse campo') 
        } else if (!isEmail(emailValue)) { 
            setErrorFor(email, 'Email inválido') 
        } else if (newEmails.includes(emailValue)){ 
            setErrorFor(email, 'Email ja esta em uso')
        } else {
            setSuccessFor(email) 
        }
    });
    
    password.addEventListener('blur', function(){

        const passwordValue = password.value.trim()
        if(passwordValue === '') { 
            setErrorFor(password, 'Preencha esse campo') // ''
        } else if(passwordValue.length < 8) {  
            setErrorFor(password, 'password deve ter mais que 8 caracteres') 
        } else {
            setSuccessFor(password)
        }
    })

    passwordtwo.addEventListener('blur', function(){

        const passwordtwoValue = passwordtwo.value.trim()
        const passwordValue = password.value.trim()
        if(passwordtwoValue === '') {
            setErrorFor(passwordtwo, 'Preencha esse campo')
        } else if(passwordValue !== passwordtwoValue) { 
            setErrorFor(passwordtwo, 'passwords não são iguais')
        } else {
            setSuccessFor(passwordtwo)
            botaoOk();
        }
    })


function setErrorFor(input, message) { 
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small') 

    small.innerText = message 

    formControl.className = 'form-control error' 
}

function setSuccessFor(input) { 
    const formControl = input.parentElement; 

    formControl.className = 'form-control success' 
}

function isEmail(email) { 
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

/*function botaoOk(){
    document.getElementById('botao').style.color = "#FC9A26"
    document.getElementById('botao').disabled = false;


    newUser.push(usernameValue)
    newEmails.push(emailValue)
    usernameValue = '';
    emailValue = '';
    passwordValue = '';
    passwordtwoValue = '';

}*/