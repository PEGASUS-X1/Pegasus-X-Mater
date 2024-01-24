// jshint esversion: 8
import { login, logout } from "./auth.js";
let currentUser;

const buttonLogin = document.getElementById("button-login");
const buttonLogout = document.getElementById("button-logout");
const userInfo = document.getElementById("user-info");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    currentUser = user;
    init();
  } else {
  }
});

buttonLogin.addEventListener("click", async (e) => {
  try {
    currentUser = await login();
    init();
  } catch (error) {
    console.error(error);
  }
});

buttonLogout.addEventListener("click", (e) => {
  logout();
  //localStorage.removeItem("user");
  buttonLogin.classList.remove("hidden");
  buttonLogout.classList.add("hidden");
  todosContainer.innerHTML = "";
});

async function init() {
  //localStorage.setItem("user", JSON.stringify(currentUser));
  buttonLogin.classList.add("hidden");
  buttonLogout.classList.remove("hidden");
  userInfo.innerHTML = `
    <img src="${currentUser.photoURL}" width="32" />
    <span>${currentUser.displayName}</span>
  `;
}

