var passwordInput = document.getElementById("password");
var letter = document.getElementById("lowerCase");
var capital = document.getElementById("upperCase");
var character = document.getElementById("specialCharacter");
var number = document.getElementById("oneNumber");
var length = document.getElementById("minimunCharacter");
// var submit = document.getElementsByClassName("accept")


// displayig the password validation messages when password field is being clicked
passwordInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }


  // When inputing a password
  passwordInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(passwordInput.value.match(lowerCaseLetters)) {  
      letter.checked = true;
    } else {
      letter.checked = false;
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(passwordInput.value.match(upperCaseLetters)) { 
      capital.checked = true; 
    } else {
      capital.checked = false;
    }

    
    // Validate special characters
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    if(passwordInput.value.match(specialCharacters)) {  
      character.checked = true;
    } else {
      character.checked = false;
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(passwordInput.value.match(numbers)) {
      number.checked = true;  
    } else {
      number.checked = false;
    }
    
    // Validate length
    if(passwordInput.value.length >= 8) {
      length.checked = true;
    } else {
      length.checked = false;
    }
  }

//Toggle Password
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");

  togglePassword.addEventListener("click", function () {
    var inputType = document.getElementById("password");
    if (inputType.type === "password") {
      inputType.type = "text";
    } else {
      inputType.type = "password";
    }
  // toggle the icon
  this.classList.toggle("bi-eye");});

  //function for visited input field that are invalid
  {
    let f = function() {
      this.classList.add('touched')
    }
    document
      .querySelectorAll('input')
      .forEach((e) => {
        e.addEventListener('blur', f, false)
        e.addEventListener('keydown', f, false)
      })
  }

  