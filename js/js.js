//variables
const sendBtn = document.querySelector("#send-btn"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  resetBtn = document.querySelector("#reset-btn")

//eventListeners

eventListeners();
function eventListeners() {
  //app init
  document.addEventListener("DOMContentLoaded", appInit);
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);

  resetBtn.addEventListener("click", resetForm);
}

//functions
function appInit() {
  //disabled send button when page on load
  sendBtn.disabled = true;
  // sendBtn.style.backgroundColor = "rgba(59, 68, 85, 0.612)";
}

//validate form field
function validateField() {
  validateLength(this);

  //validate Email field
  if (this.type === "email") {
    validateEmail(this);
  }
  let error = document.querySelectorAll(".error");
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (error.length === 0) {
      sendBtn.disabled = false;
      sendBtn.style.backgroundColor = "rgb(59, 68, 85)";
    }
  }
}

function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

function validateEmail(field) {
  const emailText = field.value;
  if (emailText.includes("@")) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

function resetForm() {
  document.querySelector("#email-form").reset();
  email.style.borderBottomColor = "white";
  subject.style.borderBottomColor = "white";
  message.style.borderBottomColor = "white";
}
