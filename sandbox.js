let phone_input = document.getElementById('phone');
function validatePhone(phone_input){
    return(phone_input.replace(/\d/g,'').length == 9)
};

phone_input.addEventListener('invalid', () => {
    if(phone_input.value === '') {
      phone_input.setCustomValidity('Wymagany numer telefonu');
    } else {
      phone_input.setCustomValidity('Twój numer telefonu powinien być w formacie: 123456789');
    }
});

let code_input = document.getElementById('code');

code_input.addEventListener('invalid', () => {
  if(code_input.value === '') {
    code_input.setCustomValidity('Wymagany kod odbioru');
  } else {
    code_input.setCustomValidity('Kod powinien zawierać 4 cyfry');
  }
});

document.addEventListener('submit', () => {
  const code =  document.getElementById('code');
  const phoneNumber = document.getElementById('phone');

});


// document.querySelectorAll('#phone, #code').forEach((el) => {

// })


 function checkForm()
 {
    const phone = document.getElementById('phone');
    const code = document.getElementById('code');
    const btn = document.querySelector('.buttonPackage');

    if (phone.value && code.value) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  };

