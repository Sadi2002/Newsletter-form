const submitBtn = document.querySelector(".submit");
const textInput = document.querySelector(".email-text");
const success = document.querySelector(".container-success");
const container = document.querySelector(".container");
const closeBtn = document.querySelector(".fa-times");
const emailLabel = document.querySelector(".email-label");
const email = document.querySelector(".email");

const closeModal = () => {
  success.classList.add("hide");
  container.classList.remove("hide");
};

const sendEmail = () => {
  if (
    textInput.value != 0 &&
    textInput.value.includes("@") &&
    textInput.value.includes(".") &&
    textInput.value.length >= 3
  ) {
    container.classList.add("hide");
    success.classList.remove("hide");
    emailLabel.textContent = "email address";
    emailLabel.style.color = "hsl(234, 29%, 20%)";
    textInput.style.border = "1px solid green";
    email.textContent = textInput.value;
    email.setAttribute("href", `mailto:${email.textContent}`);
    textInput.value = "";
  } else if (!textInput.value.includes("@") || !textInput.value.includes(".")) {
    textInput.style.border = "1px solid red";
    emailLabel.textContent =
      "Podaj poprawny adres email. Musi zawierać '@' oraz '.' oraz składać się więcej niz 3 znaków :)";
    emailLabel.style.color = "red";
  }
};

closeBtn.addEventListener("click", closeModal);
submitBtn.addEventListener("click", sendEmail);
