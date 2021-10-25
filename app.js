
window.onload = function () {
   // ERROR MESSAGES span array
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

   //ALL INPUTS AS AN ARRAY //could I have done this before with .getElementByClassName or Name?
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
   console.log(inputList)

   //FLAGS ARRAY FOR BUTTON AT THE END
   var flags = [];

   //INITIALIZE. A 0 means there is no input value or that the validation is not passed
   for (let i = 0; i < 10; i++) {
      flags[i] = 0;
   }

   //REGULAR EXPRESSIONS
   var hasNumbers = /\d/;
   var hasSpaces = /\s/;
   var hasLetters = /\D/;
   var hasAt = /@/;
   var hasDotCom = /.com/;
   var hasSymbol =  /\W/;
   var hasSpacesDashesParenthesis = /([)( -])/;

   //ASSIGN ONFOCUS TO ALL INPUTS
   for (var i = 0; i < 10; i++) {
		const span = errorMessages[i];
		inputList[i].onfocus = function() {
			span.style.visibility = 'hidden';
		}
	}

   //FUNCTIONS TO SHOW ERRORS AND SUCCESSES
   function showError(input, index) {
      errorMessages[index].style.visibility = 'visible'; //SHOW ERROR SPAN
      input.style.border= '2px solid red';
      flags[index] = 0; //FLAG 0 MEANS ERROR OR EMPTY
   }
   function hideError(input, index) {
      errorMessages[index].style.visibility = 'hidden'; //HIDE ERROR SPAN
      input.style.border= '2px solid green';
      flags[index] = 1; //FLAG 1 MEANS VALIDATED
   }

   //nameInput //all 10 functions work the same way with different if statements
   function checkName() {
      if (
         !hasNumbers.test(nameInput.value) && 
         nameInput.value.length > 7 && 
         hasSpaces.test(nameInput.value)
         )
      {
         hideError(nameInput, 0);
      } else {
         showError(nameInput, 0);
      }
   }
   nameInput.addEventListener('blur', checkName);

   //emailInput
   function checkEmail() {
      if (
         hasAt.test(emailInput.value) == true && 
         hasDotCom.test(emailInput.value)
         ) 
      {
         hideError(emailInput, 1);
      } else {
         showError(emailInput, 1);
      }
   }
   emailInput.addEventListener('blur' , checkEmail);

   //passwordlInput 
   function checkPassword() {
      if (
         passwordInput.value.length > 7 && 
         !(hasSymbol.test(passwordInput.value))
         ) 
      { 
         hideError(passwordInput, 2);
      } else {
         showError(passwordInput, 2);
      }
   }
   passwordInput.addEventListener('blur' , checkPassword);

   //confirmPasswordInput 
   function checkConfirmPassword() {
      if (confirmPasswordInput.value === passwordInput.value) 
      {
         hideError(confirmPasswordInput, 3);
      } else {
         showError(confirmPasswordInput, 3);
      }
   }
   confirmPasswordInput.addEventListener('blur' , checkConfirmPassword);

   //ageInput 
   function checkAge() {
      if (
         ageInput.value % 1 == 0 && 
         ageInput.value >= 18 && 
         ageInput.value < 150
         )
      {
         hideError(ageInput, 4);
      } else {
         showError(ageInput, 4);
      }
   }
   ageInput.addEventListener('blur' , checkAge);

   //phoneInput 
   function checkPhone() {
      if (
         phoneInput.value.length >= 7 && 
         !hasSpacesDashesParenthesis.test(phoneInput.value)
         ) 
      {
         hideError(phoneInput, 5);
      } else {
         showError(phoneInput, 5);
      }
   }
   phoneInput.addEventListener('blur' , checkPhone);

   //adressInput 
   function checkAdress() {
      if (
         hasNumbers.test(adressInput.value) && 
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
   postalCodeInput.addEventListener('blur', checkPostalCode);

   //id
   function checkId() {
      if (
         idInput.value.length >= 7 && 
         idInput.value.length <= 8
         )
      {
         hideError(idInput, 9);
      } else {
         showError(idInput, 9);
      }
   }
   idInput.addEventListener('blur' , checkId);

   //BUTTON
   var form = document.getElementById('form')
   form.addEventListener('submit', 
      function(event) {
         event.preventDefault();
         //VALIDATION
         var sum = 0;
         for (let i = 0; i < flags.length; i++) {
            sum += flags[i];
         }
         if(sum === 10) { 
            //set up the url to send parameters
            url = 'https://curso-dev-2021.herokuapp.com/newsletter';
            informationToSend = '?'; 
            //create the fullparameter list
            for (let i = 0; i < inputList.length; i++) {
               informationToSend = informationToSend + inputList[i].id + '=' + inputList[i].value + '&';
            }

            //replace spaces with %20
            var noSpacesInformationToSend = informationToSend.replace(/\s/g, '%20');

            //complete url
            fullUrl = url + noSpacesInformationToSend;

            fetch(fullUrl)
               .then(res => res.json())
               .then(data => showSuccessfulFetch(data))
               .catch(error => showErrorFetch(error))

         } else { showErrorValidation(); }
   })

   //FETCH FUNCTIONS
   var showSuccessfulFetch = (data) => {
      //show modal window
      modal.style.display = 'flex';
      modalTitle.innerHTML = "Successful Register!!";
      for (const property in data) {
         console.log(data[property]);
         modalContent.innerHTML += `<li>${property}: ${data[property]}</li>`
      }
      
      //saving data on local Storage
      for (const property in data) {
         localStorage.setItem(property, data[property])
      }
   }  

   var showErrorFetch = (err) => {
      modal.style.display = 'flex';
      modalContent.innerHTML = err;
      console.log(err);
      console.log('catch');
   }

   var showErrorValidation = () => {
      modal.style.display = 'flex';
      modalContent.innerHTML = 'validation not passed';
   }

   //MODAL
   //get modal elements
   var modalTitle = document.getElementById('modal__title');
   var modalContent = document.getElementById('modal__content');
   var modal = document.getElementById('modal');
   //add events to close the modal window
   document.getElementById('modal__button').addEventListener('click', () => clearModal())
   //function that clears modalContent and closes it
   var clearModal = () => {
      modal.style.display = 'none';
      modalContent.innerHTML = '';
   }

   //LOCAL STORAGE
   //checking local storage 
   for (let i = 0; i < inputList.length; i++) {
      if(localStorage.getItem(inputList[i].id) !== null) {
         //filling inputs
         inputList[i].value = localStorage.getItem(inputList[i].id);
         inputList[i].dispatchEvent(new Event('blur'));
      }
   }
}

//AUTO NAME
function getName(event) {
   var nameSpan = document.getElementById('nameh2');
   nameSpan.innerText = event.target.value;
}
