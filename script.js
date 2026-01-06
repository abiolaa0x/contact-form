const showError = (input) => {
  const error = input.parentElement.querySelector(".error__message");
  if (error) error.style.display = "block";
  if (input.style) input.style.borderColor = "red";
};

const hideError = (input) => {
  const error = input.parentElement.querySelector(".error__message");
  if (error) error.style.display = "none";
  if (input.style) input.style.borderColor = "hsl(186, 15%, 59%)";
};

// Special case for radio buttons and checkboxes
const showCustomError = (element) => {
  const error =
    element.closest(".container")?.querySelector(".error__message") ||
    element.parentElement.querySelector(".error__message");
  if (error) error.style.display = "block";
};

const hideCustomError = (element) => {
  const error =
    element.closest(".container")?.querySelector(".error__message") ||
    element.parentElement.querySelector(".error__message");
  if (error) error.style.display = "none";
};

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop real submission for demo

  let hasError = false;

  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const consent = document.getElementById("consent");
  const queryType = document.querySelector('input[name="query_type"]:checked');
  const successMessage = document.querySelector(".success_alert");

  // Validate first name
  if (firstName.value.trim().length <= 1) {
    showError(firstName);
    hasError = true;
  } else {
    hideError(firstName);
  }

  // Validate last name
  if (lastName.value.trim().length <= 1) {
    showError(lastName);
    hasError = true;
  } else {
    hideError(lastName);
  }

  // Validate email
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.){3}[0-9]{1,3}\]|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email.value.trim())) {
    showError(email);
    hasError = true;
  } else {
    hideError(email);
  }

  // Validate message
  if (message.value.trim().length <= 2) {
    showError(message);
    hasError = true;
  } else {
    hideError(message);
  }

  // Validate query type (radio buttons)
  const queryError = document
    .querySelector(".query_type")
    .parentElement.querySelector(".error__message");

  if (!queryType) {
    if (queryError) queryError.style.display = "block";
    hasError = true;
  } else {
    if (queryError) queryError.style.display = "none";
  }

  // Validate consent (checkbox)
  if (!consent.checked) {
    showCustomError(consent);
    hasError = true;
  } else {
    hideCustomError(consent);
  }

  if (hasError) {
    return;
  }

  // Success
  form.reset();
  successMessage.style.display = "block";

  setTimeout(function () {
    successMessage.style.display = "none";
  }, 3000);
});
