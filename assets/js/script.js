const menu = document.getElementById("menu"),
  toggleMenu = document.getElementById("toggleMenu"),
  closeMenu = document.getElementById("closeMenu"),
  signUpForm = document.querySelector(".signup_form"),
  signInForm = document.querySelector(".signin_form"),
  signInBtn = document.querySelector("#signInBtn"),
  signUpBtn = document.querySelector("#signUpBtn");

toggleMenu.addEventListener("click", function () {
  // i made some styles in css, you can find it in media quiry in navbar
  menu.classList.add("active"); // add class named active to menu which selected above
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("active"); // remove class named active from menu which selected above
});

signInBtn.addEventListener("click", function () {
  signUpForm.classList.add("hide"); // add class hide to signup form
  signInForm.classList.remove("hide"); // remove class hide to signup form
});

signUpBtn.addEventListener("click", function () {
  signUpForm.classList.remove("hide"); // remove class hide to signin form
  signInForm.classList.add("hide"); // add class hide to signin form
});
