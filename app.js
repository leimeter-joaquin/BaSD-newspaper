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

   //ALL INPUTS i think I could get all inputs as an array as well. but I am not sure and I already started
   var nameInput = document.getElementById('name');
   var emailInput = document.getElementById('email');
   var passwordInput = document.getElementById('password');
   var confirmPasswordInput = document.getElementById('confirm-password');
   var ageInput = document.getElementById('age');
   var phoneInput = document.getElementById('phone');
   var adressInput = document.getElementById('city');
   var postalCodeInput = document.getElementById('postal-code');
   var idInput = document.getElementById('id');
   
   //REGULAR EXPRESSIONS
   var noNumbers = /\d/; //noNumbers.test(value) if there are numbers = true
   var noSpaces = /\s/; //noSpaces.test(value) if there is a space = true
   var hasAt = /@/;
   var hasDotCom = /.com/;
   var hasSymbol =  /\W/;;
   var noSpacesDashesParenthesis = /([)( -])/; //  /([)( -])\w+/
   
   //SHOW OR HIDE ERROR FUNCTIONS
   function showError(typeOfInput, indexOfSpan) {
      errorMessages[indexOfSpan].classList.remove('hidden');
      typeOfInput.classList.add('showing-error');
   }
   function hideError(typeOfInput, indexOfSpan) {
      errorMessages[indexOfSpan].classList.add('hidden');
      typeOfInput.classList.remove('showing-error');
   }

   //nameInput
   function checkName() {
      if (
         noNumbers.test(nameInput.value) === true || 
         nameInput.value.length < 7 || 
         !(noSpaces.test(nameInput.value))
         ) 
      {
         showError(nameInput, 0);
      } else {
         hideError(nameInput, 0);
      }
   }
   nameInput.addEventListener('blur', checkName);
   nameInput.addEventListener('onfocus', hideError);


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
   emailInput.addEventListener('onfocus', hideError);
   
   //passwordlInput 
   function checkPassword() {
      if(passwordInput.value.length > 7 && !(hasSymbol.test(passwordInput.value))) { 
         hideError(passwordInput, 2);
      } else {
         showError(passwordInput, 2);
      }
   }
   passwordInput.addEventListener('blur' , checkPassword);
   passwordInput.addEventListener('onfocus', hideError);

   //confirmPasswordInput 
   function checkConfirmPassword() {
      if(confirmPasswordInput.value === passwordInput.value) {
         hideError(confirmPasswordInput, 3);
      } else {
         showError(confirmPasswordInput, 3);
      }
   }
   confirmPasswordInput.addEventListener('blur' , checkConfirmPassword);
   confirmPasswordInput.addEventListener('onfocus', hideError);

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
   ageInput.addEventListener('onfocus', hideError);

   //ageInput 
   function checkPhone() {
      console.log(noSpacesDashesParenthesis.test(phoneInput.value));
      if(phoneInput.value >= 7 && !noSpacesDashesParenthesis.test(phoneInput.value)) {
         hideError(phoneInput, 5);
      } else {
         showError(phoneInput, 5);
      }
   }
   phoneInput.addEventListener('blur' , checkPhone);
   phoneInput.addEventListener('onfocus', hideError);
}

// check with value
//take valur
//function that validates true or false
// addeventlistener('evento', funcion () {
//    if true algo
//    else falso
// });
//quito hidden y agrego showingerror a input
