window.onload = function () {
   var button = document.getElementById('button').addEventListener('click', buttonClicked);

   function buttonClicked() {
      console.log('clicked');
   }
}