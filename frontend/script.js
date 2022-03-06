const cancel = document.querySelector('.cancel');
const send = document.querySelector('.send');
let name = document.querySelector('input[type=text]');
let email = document.querySelector('input[type=email]');
let number = document.querySelector('input[type=tel]');
let msg = document.getElementById("msg");

cancel.addEventListener("click",()=> {
  name.value = '';
  email.value = '';
  number.value = '';
  msg.value = '';
});

send.addEventListener('click', ()=> {
let msgArr = Array.from(msg.value);

if (email.value == '' || name.value == '' || msg.value == '' || number.value == '') {
  alert('all input boxes must be filled');
}
else if (msgArr.lenght > 180) {
alert('message cannot be more than 180');
}
else {
  alert('welcome $[name.value]');
}
});
