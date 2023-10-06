const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
console.log(registerLink);
const loginLink = document.querySelector(".login-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
