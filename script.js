const showError = (input) => {
  const error = input.parentElement.querySelector(".error__message");
  if (error) error.style.display = "block";
  input.style.borderColor = "red";
};

const hideError = (input) => {
  const error = input.parentElement.querySelector(".error__message");
  if (error) error.style.display = "none";
  input.style.borderColor = "hsl(186, 15%, 59%)";
};

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  let hasError = false;

  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const consent = document.getElementById("consent");
  const queryType = document.querySelector('input[name="query_type"]:checked');

  // First name
  if (firstName.value.trim().length <= 1) {
    showError(firstName);

    hasError = true;
  } else {
    hideError(firstName);
  }

  // Last name
  if (lastName.value.trim().length <= 1) {
    showError(lastName);
    hasError = true;
  } else {
    hideError(lastName);
  }

  // Email
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.){3}[0-9]{1,3}\]|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email.value.trim())) {
    showError(email);
    hasError = true;
  } else {
    hideError(email);
  }

  // Query type (special case)
  const queryError = document
    .querySelector(".query_type")
    .parentElement.querySelector(".error__message");

  if (!queryType) {
    queryError.style.display = "block";
    hasError = true;
  } else {
    queryError.style.display = "none";
  }

  // Message
  if (message.value.trim().length <= 2) {
    showError(message);
    hasError = true;
  } else {
    hideError(message);
  }

  // Consent (special case)
  const consentError = consent
    .closest(".container")
    .querySelector(".error__message");

  if (!consent.checked) {
    consentError.style.display = "block";
    hasError = true;
  } else {
    consentError.style.display = "none";
  }

  if (hasError) {
    e.preventDefault();
  }
});
