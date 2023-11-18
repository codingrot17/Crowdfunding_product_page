const back = document.getElementById("back");
const selectBtn1 = document.querySelector(".select_button1");
const selectBtn2 = document.querySelector(".select_button2");
const success = document.querySelector(".success");
const modal = document.querySelector(".modal");
const gotbtn = document.querySelector(".got");
const closebtn = document.querySelector(".close");

function successMsg(name) {
  success.style.display = "flex";
}

back.addEventListener("click", () => {
  modal.style.display = "block";
});

selectBtn1.addEventListener("click", successMsg);
selectBtn2.addEventListener("click", successMsg);

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let totalMoneyElement = document.getElementById("total_money");
let totalMoney = parseInt(
  totalMoneyElement.textContent.replace("$", "").replace(",", ""),
  10
);

let progressElement = document.querySelector(".progress_bar");
let progressBar = window
  .getComputedStyle(progressElement)
  .getPropertyValue("width");

selectBtn1.addEventListener("click", function () {
  totalMoney += parseInt(this.value, 10);
  totalMoneyElement.textContent = "$" + formatNumberWithCommas(totalMoney);

  let newProgress = parseInt(progressBar) + 2;
  progressBar = `${newProgress}px`;
  progressElement.style.width = progressBar;
});

selectBtn2.addEventListener("click", function () {
  totalMoney += parseInt(this.value, 10);
  totalMoneyElement.textContent = "$" + formatNumberWithCommas(totalMoney);

  let newProgress = parseInt(progressBar) + 2;
  progressBar = `${newProgress}px`;
  progressElement.style.width = progressBar;
});

let totalBackElement = document.getElementById("total_back");
let totalBack = parseInt(
  totalBackElement.textContent.replace("$", "").replace(",", ""),
  10
);

function got() {
  success.style.display = "none";
  totalBack += 1;
  totalBackElement.textContent = formatNumberWithCommas(totalBack);
}

gotbtn.addEventListener("click", got);

// Event listener for the "Close" button in the modal

closebtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// The modal selection

const firstRadio = document.getElementById("firstradiobtn");
const secondRadio = document.getElementById("secondradiobtn");
const thirdRadio = document.getElementById("thirdradiobtn");
const selectPledge1 = document.querySelector(".select_pledge1");
const selectPledge2 = document.querySelector(".select_pledge2");
const firstPledge = document.querySelector(".firstpledge");
const secondPledge = document.querySelector(".secondPledge");
const continuebtn = document.querySelector(".continue_btn");
const continuebtn2 = document.querySelector(".continue_btn2");
const input = document.querySelector(".input1");
const inputValue1 = document.getElementById("pledge_value1");
const firstContinue = document.getElementById("firstContinue");
const inputValue2 = document.getElementById("pledge_value2");
const secondContinue = document.getElementById("secondContinue");
const input2 = document.querySelector(".input2");

firstRadio.addEventListener("click", continueButton);

secondRadio.addEventListener("click", () => {
  selectPledge1.style.display = "inline";
  firstPledge.style.borderColor = "#3db5ad";
  selectPledge2.style.display = "none";
  secondPledge.style.borderColor = "#e5e5e5";
});

firstContinue.addEventListener("click", () => {
  totalMoney += parseInt(inputValue1.value, 10);
  totalMoneyElement.textContent = "$" + formatNumberWithCommas(totalMoney);
});

thirdRadio.addEventListener("click", () => {
  selectPledge2.style.display = "inline";
  secondPledge.style.borderColor = "#3db5ad";
  selectPledge1.style.display = "none";
  firstPledge.style.borderColor = "#e5e5e5";
});

secondContinue.addEventListener("click", () => {
  totalMoney += parseInt(inputValue2.value, 10);
  totalMoneyElement.textContent = "$" + formatNumberWithCommas(totalMoney);
});

input.addEventListener("click", () => {
  input.style.borderColor = "#3db5ad";
});

input2.addEventListener("click", () => {
  input2.style.borderColor = "#3db5ad";
});

function continueButton() {
  modal.style.display = "none";
  success.style.display = "flex";
  let newProgress = parseInt(progressBar) + 2;
  progressBar = `${newProgress}px`;
  progressElement.style.width = progressBar;
}

continuebtn.addEventListener("click", continueButton);
continuebtn2.addEventListener("click", continueButton);

const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close_menu");
const menuList = document.querySelector(".menuNav");

function open() {
  closeMenu.style.display = "block";
  menu.style.display = "none";
  menuList.style.display = "flex";
}

function close() {
  closeMenu.style.display = "none";
  menu.style.display = "block";
  menuList.style.display = "none";
}

menu.addEventListener("click", open);
closeMenu.addEventListener("click", close);
