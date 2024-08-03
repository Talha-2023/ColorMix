// // Toggle signin and signup button in mobile
let profile = document.querySelector(".profile");
let profileIcon = document.querySelector(".profileIcon");

profileIcon.onclick = () => {
  profile.classList.toggle("revelButton");
  console.log("click");
};
