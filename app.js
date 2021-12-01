let optMe = document.querySelector("#me");
let optComp = document.querySelector("#comp");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let result = document.querySelector("#result");
let orderDiv = document.querySelector("#orderDiv");
let container = document.querySelector("#container");
let again = document.querySelector("#again");
let order;
let value = 0;
events();
function events() {
  optMe.addEventListener("click", orderPlayer);
  optComp.addEventListener("click", orderPlayer);
  btn1.addEventListener("click", plusFunc);
  btn2.addEventListener("click", plusFunc);
  again.addEventListener("click", playAgain);
}
function orderPlayer() {
  orderDiv.style.display = "none";
  container.style.display = "block";
  if (this.id === "me") {
    order = true;
  } else {
    order = false;
  }
  disableBtn(value, order);
  orderFunc(order);
}
function orderFunc(order) {
  if (order) {
  } else {
    setTimeout(compTurn, 500);
  }
}
function plusFunc() {
  value = value + Number(this.value);
  result.textContent = value;
  order = !order;
  if (value < 10) {
    orderFunc(order);
  }
  disableBtn(value, order);
  winning(value);
}
function disableBtn(a, order) {
  if (a >= 10 || !order) {
    btn1.disabled = true;
    btn2.disabled = true;
  } else if (order) {
    btn1.disabled = false;
    btn2.disabled = false;
  }
}
function compTurn() {
  disableBtn(value, order);
  if ( value == 7) {
    value += getRandomInt(2) + 1;
  } else if (value == 2 || value == 5 || value == 8) {
    value += 2;
  } else if (value == 0 || value == 3 || value == 6 || value == 9 || value == 1 || value == 4) {
    value += 1;
  } else {
  }
  result.textContent = value;
  if (value > 10) {
    return;
  } else {
    order = !order;
    orderFunc(order);
  }

  disableBtn(value, order);
  winning(value);
}

function winning(a) {
  if (a === 10 || a === 11) {
    if (order) {
      result.textContent = "Computer is winner";
    } else result.textContent = "you are winner";
  }
}
function playAgain() {
  orderDiv.style.display = "flex";
  container.style.display = "none";
  reload = location.reload();
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
