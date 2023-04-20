const signInButton = document.querySelector('#signInButton');
const signUpButton = document.querySelector('#signUpButton');
const overlayContainer = document.querySelector('.container .overlay-container');
const overlay = document.querySelector('.container .overlay-container .overlay');
const signInform = document.querySelector('.container .sign-in-form');
const signUpform = document.querySelector('.container .sign-up-form');

signInButton.addEventListener('click', () => {
    overlayContainer.style.transform = 'translateX(100%)';
    overlay.style.transform = 'translateX(-50%)';
    signInform.classList.add('active');
    signUpform.classList.remove('active');
});
signUpButton.addEventListener('click', () => {
    overlayContainer.style.transform = 'translateX(0)';
    overlay.style.transform = 'translateX(0)';
    signUpform.classList.add('active');
    signInform.classList.remove('active');
})