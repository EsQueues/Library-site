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
