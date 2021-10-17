window.onload = function () {
   // ERROR MESSAGES span string
   // 1 name
   // 2 email
   // 3 pass
   // 4 confirmpass
   // 5 age
   // 6 phone
   // 7 adress
   // 8 city
   // 9 postcode
   // 10 id
   var errorMessages = document.getElementsByClassName('error-message');
   //console.log(errorMessages);

   //ALL INPUTS
   var nameInput = document.getElementById('name');
   var emailInput = document.getElementById('email');
   var passwordInput = document.getElementById('password');
   var confirmPasswordInput = document.getElementById('confirm-password');
   var ageInput = document.getElementById('age');
   var phoneInput = document.getElementById('phone');
   var adressInput = document.getElementById('adress');
   var cityInput = document.getElementById('city');
   var postalCodeInput = document.getElementById('postal-code');
   var idInput = document.getElementById('id');

   //ALL INPUTS AS AN ARRAY
   var inputList = [
      nameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      ageInput,
      phoneInput,
      adressInput,
      cityInput,
      postalCodeInput,
      idInput
   ]

   //REGULAR EXPRESSIONS
   var hasNumbers = /\d/; //hasNumbers.test(value) if there are numbers = true
   var hasSpaces = /\s/; //hasSpaces.test(value) if there is a space = true
   var hasLetters = /\D/;
   var hasAt = /@/;
   var hasDotCom = /.com/;
   var hasAlphanumChar = /\w/;
   var hasSymbol =  /\W/;
   var hasSpacesDashesParenthesis = /([)( -])/;

   // for (let i = 0; i < 9; i++) {
   //    var span = errorMessages[i];
   // }
   
   for (var i = 0; i <= 9; i++) {
		const span = errorMessages[i];
		inputList[i].onfocus = function() {
			span.style.visibility = 'hidden';
		}
	}

   //SHOW and HIDE ERROR
   function showError(input, index) {
      errorMessages[index].style.visibility = 'visible';
      input.style.border= '2px solid red';
   }
   function hideError(input, index) {
      errorMessages[index].style.visibility = 'hidden';
      input.style.border= '2px solid green';
   }

   //nameInput
   function checkName() {
      if (
         hasNumbers.test(nameInput.value) === true || 
         nameInput.value.length < 7 || 
         !(hasSpaces.test(nameInput.value))
         ) 
      {
         showError(nameInput, 0);
      } else {
         hideError(nameInput, 0);
      }
   }
   nameInput.addEventListener('blur', checkName);
  
   //emailInput
   function checkEmail() {
      if(hasAt.test(emailInput.value) == true && hasDotCom.test(emailInput.value)) {
         console.log('nice mail bro');
         hideError(emailInput, 1);
      } else {
         showError(emailInput, 1);
      }
   }
   emailInput.addEventListener('blur' , checkEmail);
   
   //passwordlInput 
   function checkPassword() {
      if(passwordInput.value.length > 7 && !(hasSymbol.test(passwordInput.value))) { 
         hideError(passwordInput, 2);
      } else {
         showError(passwordInput, 2);
      }
   }
   passwordInput.addEventListener('blur' , checkPassword);

   //confirmPasswordInput 
   function checkConfirmPassword() {
      if(confirmPasswordInput.value === passwordInput.value) {
         hideError(confirmPasswordInput, 3);
      } else {
         showError(confirmPasswordInput, 3);
      }
   }
   confirmPasswordInput.addEventListener('blur' , checkConfirmPassword);

    //ageInput 
    function checkAge() {
      console.log(ageInput.value % 1 == 0) 
      if(ageInput.value % 1 == 0 && ageInput.value >= 18) {
         hideError(ageInput, 4);
      } else {
         showError(ageInput, 4);
      }
   }
   ageInput.addEventListener('blur' , checkAge);

   //phoneInput 
   function checkPhone() {
      if(phoneInput.value >= 7 && !hasSpacesDashesParenthesis.test(phoneInput.value)) {
         hideError(phoneInput, 5);
      } else {
         showError(phoneInput, 5);
      }
   }
   phoneInput.addEventListener('blur' , checkPhone);

   //adressInput 
   function checkAdress() {
      console.log();
      if(hasNumbers.test(adressInput.value) && 
         hasSpaces.test(adressInput.value) && 
         hasLetters.test(adressInput.value)
         )
      {
         hideError(adressInput, 6);
      } else {
         showError(adressInput, 6);
      }
   }
   adressInput.addEventListener('blur' , checkAdress);

   //cityInput 
   function checkCity() {
      if(cityInput.value.length >= 3)
      {
         hideError(cityInput, 7);
      } else {
         showError(cityInput, 7);
      }
   }
   cityInput.addEventListener('blur' , checkCity);

   //post
   function checkPostalCode() {
      if(postalCodeInput.value.length >= 3)
      {
         hideError(postalCodeInput, 8);
      } else {
         showError(postalCodeInput, 8);
      }
   }
   postalCodeInput.addEventListener('blur' , checkPostalCode);

   //id
   function checkId() {
      if(idInput.value.length >=7 && idInput.value.length <= 8)
      {
         hideError(idInput, 9);
      } else {
         showError(idInput, 9);
      }
   }
   idInput.addEventListener('blur' , checkId);
}