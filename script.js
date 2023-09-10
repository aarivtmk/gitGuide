console.log("hello world");
var email = document.getElementById("emailField");
var submit_btn = document.getElementById("submitBtn");

// verify email filed is empty or not

function verifyEmail() {
  let emailValue = email.value;
  if (emailValue === "") {
    alert("hey, please enter email");
  } else {
    alert("thanks for the registration");
    console.log("email value is", emailValue);
  }
}

submit_btn.addEventListener("click", verifyEmail);
