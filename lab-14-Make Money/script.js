const coinForm = document.getElementById("coin-form");
const coinDisplay = document.getElementById("coin-display");

function makeMoney() {
  const countInput = document.getElementById("count");
  const coinTypeInput = document.getElementById("coin-type");
  const count = parseInt(countInput.value);
  const coinType = coinTypeInput.value;

  if (count <= 0) {
    alert("Count must be greater than zero.");
    return;
  }

  for (let i = 0; i < count; i++) {
    const coin = document.createElement("div");
    coin.classList.add("coin", coinType.toLowerCase());
    coin.textContent = coinType;

    coin.addEventListener("click", function () {
      coinDisplay.removeChild(coin);
    });

    coinDisplay.appendChild(coin);
  }
}
