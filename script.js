// all document list
let display = document.querySelector(".display");
let ac_clear = document.querySelector("#clear");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let dot = document.querySelector("#dot");
let del = document.querySelector("#del");
let addition = document.querySelector("#addition");
let subtraction = document.querySelector("#subtraction");
let multiple = document.querySelector("#multiple");
let divison = document.querySelector("#divison");
let modulus = document.querySelector("#modulus");
let ans = document.querySelector("#ans");

// all functions

// function for scroll auto if display is full
function checkAndScroll() {
  let totalWidth = display.scrollWidth;
  let clientWidthWithPadding = display.clientWidth;
  if (totalWidth > clientWidthWithPadding) {
    display.scrollLeft = totalWidth - clientWidthWithPadding;
  } else {
    display.scrollLeft = 0;
  }
}

// function for adding value in display from user
function appendDisplay(value) {
  display.innerHTML += value;
  checkAndScroll();
}
// function for removing value from display
function cleardisplay() {
  display.innerHTML = "";
  checkAndScroll();
}
// function for removing the last value from display
function delChar() {
  let currentContent = display.innerHTML;
  display.innerHTML = currentContent.slice(0, -1);
  checkAndScroll();
}
// function for calculating the result
function calculateResult() {
  try {
    let result = eval(display.innerHTML);
    cleardisplay();
    display.innerHTML = result;
  } catch (e) {
    display.innerHTML = `${e.message}`;
  }
}

// event listeners for digits buttons
one.addEventListener("click", () => {
  appendDisplay("1");
});
two.addEventListener("click", () => {
  appendDisplay("2");
});
three.addEventListener("click", () => {
  appendDisplay("3");
});
four.addEventListener("click", () => {
  appendDisplay("4");
});
five.addEventListener("click", () => {
  appendDisplay("5");
});
six.addEventListener("click", () => {
  appendDisplay("6");
});
seven.addEventListener("click", () => {
  appendDisplay("7");
});
eight.addEventListener("click", () => {
  appendDisplay("8");
});
nine.addEventListener("click", () => {
  appendDisplay("9");
});
zero.addEventListener("click", () => {
  appendDisplay("0");
});
dot.addEventListener("click", () => {
  appendDisplay(".");
});
del.addEventListener("click", () => {
  delChar();
});

// event listeners for operations button
addition.addEventListener("click", () => {
  appendDisplay("+");
});
subtraction.addEventListener("click", () => {
  appendDisplay("-");
});
multiple.addEventListener("click", () => {
  appendDisplay("*");
});
divison.addEventListener("click", () => {
  appendDisplay("/");
});
modulus.addEventListener("click", () => {
  appendDisplay("%");
});
ac_clear.addEventListener("click", () => {
  cleardisplay();
});
ans.addEventListener("click", () => {
  calculateResult();
});
