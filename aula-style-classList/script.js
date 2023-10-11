const login = document.querySelector('h2')

login.style.color = 'blue';
login.style.fontSize= "33px";

const buttonColor = document.querySelector('button')

buttonColor.style.color= 'blue';
buttonColor.style.border= '2px solid blue';
buttonColor.style.borderRadius = '13px';

const usernameInput = document.querySelector("#login-usuario")

usernameInput.classList.add('correct');

 

const errorMessage = document.querySelector('.error-text')

errorMessage.classList.add('correct');

const ErrorBG = document.querySelector("#login-senha")
ErrorBG.classList.add("error")

const errorTextElements = document.querySelectorAll('.error-text')
errorTextElements[1].classList.add('visible')
