import JSConfetti from 'js-confetti'

import "./style.css";

const jsConfetti = new JSConfetti()
const btncoin = document.getElementById("btn-coin");
const btncash = document.getElementById("btn-cash");
const walletElement = document.getElementById("wallet");

const coiniconurl = "https://cdn.icon-icons.com/icons2/2104/PNG/512/coin_icon_129365.png";
const cashiconurl = "https://cdn.icon-icons.com/icons2/550/PNG/512/business-color_money-coins_icon-icons.com_53446.png";

const min = Math.ceil(300);
const max = Math.floor(1500);
const targetRich = Math.floor(Math.random() * (max - min) + min);
console.log(`targetRich = ${targetRich}`);

function updateincome(value) {
  const incomeElement = document.getElementById('income')
  const currentValue = parseInt(incomeElement.textContent);

  let newValue = currentValue + value;
  incomeElement.textContent = newValue;
  if(newValue > targetRich) {
    jsConfetti.addConfetti()
  }
}

btncoin.addEventListener("click", function() {
  let iconElementHtml = `<img src="${coiniconurl}" />`
  walletElement.insertAdjacentHTML('beforeend', iconElementHtml);

  updateincome(10);
});

btncash.addEventListener("click", function() {
  let iconElementHtml = `<img src="${cashiconurl}" />`
  walletElement.insertAdjacentHTML('beforeend', iconElementHtml);

  updateincome(100);
});