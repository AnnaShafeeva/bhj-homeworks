let clickerCounter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

cookie.onclick = () => {
  let newValueCounter = parseInt(clickerCounter.textContent) + 1;
  clickerCounter.textContent = newValueCounter;
  cookie.width = newValueCounter % 2 ? 300 : 200;
};
