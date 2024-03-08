const password = document.querySelector('#password');
const confirm = document.querySelector('#pw-confirm');
const message = document.querySelector('.error-msg');

confirm.addEventListener('keyup', () => {
  validatePassword(password, confirm)
});

function validatePassword(pw, confirm){
  if(pw.value===confirm.value){
    pw.classList.remove('error');
    confirm.classList.remove('error');
    message.classList.add('hidden');
  } else{
    pw.classList.add('error');
    confirm.classList.add('error');
    message.classList.remove('hidden');
  }
}