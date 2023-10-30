
function isValidEmail(email) {
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

   return emailPattern.test(email);
}

function isValidPassword(password) {
   const minLength = 8;
   const hasUppercase = /[A-Z]/.test(password);
   const hasLowercase = /[a-z]/.test(password);
   const hasNumber = /\d/.test(password);
   const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

   if (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialCharacter
   ) {
      return true;
   }

   return false;
}

const newsletterButton = document.getElementById("newsletter-button");
newsletterButton.addEventListener("click", () => {
  const subscribeModal = document.getElementById("subscribe-modal");
  if (subscribeModal) {
    const modal = new bootstrap.Modal(subscribeModal);
    modal.show();
  }
});

function validateForm() {
   const email = document.getElementById("email").value;
   const firstName = document.getElementById("first-name").value;
   const lastName = document.getElementById("last-name").value;
   const affiliation = document.getElementById("affiliation").value;
   const selectedRoles = document.querySelectorAll(
      'input[type="checkbox"]:checked'
   );

   if (!isValidEmail(email)) {
      document.getElementById("warning-message").textContent =
         "Please enter a valid email address";
      return false;
   }

   if (firstName.trim() === "" || lastName.trim() === "") {
      document.getElementById("warning-message").textContent =
         "First name and last name are required";
      return false;
   }

   if (affiliation.trim() === "") {
      document.getElementById("warning-message").textContent =
         "Please enter your affiliation";
      return false;
   }

   if (selectedRoles.length === 0) {
      document.getElementById("warning-message").textContent =
         "Please select at least one role";
      return false;
   }

   document.getElementById("warning-message").textContent = "";

   return true;
}

const subscribeButton = document.querySelector("#subscribe-button");
subscribeButton.addEventListener("click", () => {
   if (validateForm()) {
      alert("You were subscribed.");
   }
});

const signIn = document.querySelector("#sign-in");
signIn.addEventListener("click", () => {
   const emailInput = prompt("Enter your email: ");
   if (isValidEmail(emailInput)) {
      const password = prompt("Enter your password: ");
      if (isValidPassword(password)) {
         alert("You were signed in");
      } else {
         alert("Invalid password. Try again");
      }
   } else {
      alert("Invalid email");
   }
});

const signUp = document.getElementById("sign-up");
signUp.addEventListener("click", () => {
   const emailInput = prompt("Enter your email: ");
   if (isValidEmail(emailInput)) {
      alert("You were signed up");
   } else {
      alert("Invalid email");
   }
});

// carusel
var slider_img=document.querySelector('.slider-img');
var images = ['file:///C:/Users/Lenovo/Desktop/Library/Library-site/mainPage-img/alash.png', 'file:///C:/Users/Lenovo/Desktop/Library/Library-site/mainPage-img/qyz.png', 'file:///C:/Users/Lenovo/Desktop/Library/Library-site/mainPage-img/identityAbay.png','file:///C:/Users/Lenovo/Desktop/Library/Library-site/mainPage-img/photo_2023-10-03_14-24-11.jpg'];
var i=0;
function prev(){
if(i<=0) {
   i = images.length;
}
i--;
   return setImg();

}
function next(){
   if(i>=images.length-1){
      i = -1;
   }
   i++;
   return setImg();
}

function setImg(){
   return slider_img.setAttribute('src',images[i]);
}


var countDownDate = new Date("Oct 25, 2023 15:37:25").getTime();

var x = setInterval(function () {
   var now = new Date().getTime();
   var distance = countDownDate - now;
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
   if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
   }
}, 1000);
