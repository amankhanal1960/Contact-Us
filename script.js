const contactForm = document.querySelector(".contact-form");
const messageReceived = document.querySelector(".message-received");

const Button1 = document.querySelector(".contact-form button");
const Button2 = document.querySelector(".message-received button");

Button1.addEventListener("click", function (event) {
  event.preventDefault();
  contactForm.classList.add("hidden");
  messageReceived.classList.remove("hidden");
});
Button2.addEventListener("click", function (event) {
  event.preventDefault();
  messageReceived.classList.add("hidden");
  contactForm.classList.remove("hidden");
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#message").value = "";
});
