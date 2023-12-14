
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



var countDownDate = new Date("Nov 8, 2023 15:37:25").getTime();

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





////////////////
const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prevPost');
const nextButton = document.getElementById('nextPost');

const posts = JSON.parse(localStorage.getItem('posts')) || [];

let currentIndex = 0;

function showPost(index) {
   if (index >= 0 && index < posts.length) {
      const post = posts[index];
      carousel.innerHTML = `
         <div class="post">
            <h1>${post.title}</h1>
            <p>${post.content}</p>
         </div>
      `;
   }
}

showPost(currentIndex);

prevButton.addEventListener('click', () => {
   currentIndex = (currentIndex - 1 + posts.length) % posts.length;
   showPost(currentIndex);
});

nextButton.addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % posts.length;
   showPost(currentIndex);
});

function updateCarousel() {
   const carousel = document.getElementById("carousel");
   carousel.innerHTML = "";

   for (let i = 0; i < posts.length; i++) {
      const post = document.createElement("div");
      post.className = "post";
      post.innerHTML = `<h1>${posts[i].title}</h1><p>${posts[i].content}</p>`;
      carousel.appendChild(post);
   }
}


function addPost(title, content) {
   const newPost = { title, content };
   const posts = JSON.parse(localStorage.getItem('posts')) || [];
   posts.push(newPost);

   localStorage.setItem('posts', JSON.stringify(posts));

}


function removePost(index) {
   if (index >= 0 && index < posts.length) {
      posts.splice(index, 1);
      localStorage.setItem('posts', JSON.stringify(posts));
   }
   console.log(posts)
}























////sign up
document.getElementById("signupButton").addEventListener("click", function () {
   const firstName = document.getElementById("InputFirstName").value;
   const lastName = document.getElementById("InputLastName").value;
   const email = document.getElementById("InputEmail").value;
   const password = document.getElementById("InputPassword").value;

   let isValid = true;

   const emailError = document.getElementById("email-error");
   const passwordError = document.getElementById("password-error");
   const nameError = document.getElementById("name-error");

   emailError.textContent = "";
   passwordError.textContent = "";
   nameError.textContent = "";

   if (!firstName || !lastName) {
   isValid = false;
   nameError.textContent = "First Name and Last Name are required.";
}

if (!isValidEmail(email)) {
   isValid = false;
   emailError.textContent = "Invalid email.";
}

if (!isValidPassword(password)) {
   isValid = false;
   passwordError.textContent = "Invalid password.";
}
if(isValid){
   const firstName = document.getElementById("InputFirstName").value;
   const lastName = document.getElementById("InputLastName").value;
   const email = document.getElementById("InputEmail").value;
   const password = document.getElementById("InputPassword").value;
   const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
   };

   const users = JSON.parse(localStorage.getItem("users")) || [];
   users.push(user);

   localStorage.setItem("users", JSON.stringify(users));

   localStorage.setItem("loggedInUser", JSON.stringify(user));
}




  ///SIGN IN
      document.getElementById("signInButton").addEventListener("click", function () {
         const signInEmail = document.getElementById("SignInEmail").value;
         const signInPassword = document.getElementById("SignInPassword").value;

         const users = JSON.parse(localStorage.getItem("users")) || [];

         const foundUser = users.find((user) => user.email === signInEmail && user.password === signInPassword);

         if (foundUser) {
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
            console.log("Script is running...");
            alert("Sign-in successful!");
         } else {
            alert("Invalid email or password. Please try again.");
         }

         document.getElementById("SignInEmail").value = "";
         document.getElementById("SignInPassword").value = "";
      });



});

var words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'],
   part,
   i = 0,
   offset = 0,
   len = words.length,
   forwards = true,
   skip_count = 0,
   skip_delay = 15,
   speed = 70;
var wordflick = function () {
   setInterval(function () {
      if (forwards) {
         if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
               forwards = false;
               skip_count = 0;
            }
         }
      }
      else {
         if (offset == 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
               i = 0;
            }
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
         if (forwards) {
            offset++;
         }
         else {
            offset--;
         }
      }
      $('.word').text(part);
   }, speed);
};

$(document).ready(function () {
   wordflick();
});
