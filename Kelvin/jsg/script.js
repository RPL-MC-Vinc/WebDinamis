const form = document.querySelector("#guess-form");
const input = document.querySelector("#guess");
const message = document.querySelector("#message");
const secretNumber = Math.floor(Math.random() * 10) + 1;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const rawGuess = input.value.trim();
  const guess = Number(rawGuess);

  if (rawGuess === "" || !Number.isInteger(guess) || guess < 1 || guess > 10) {
    message.textContent = "Masukkan angka bulat dari 1 sampai 10.";
    message.className = "message error";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = "Benar! Tebakanmu tepat.";
    message.className = "message correct";
    input.disabled = true;
    form.querySelector("button").disabled = true;
  } else if (guess > secretNumber) {
    message.textContent = "Terlalu tinggi. Coba angka yang lebih kecil.";
    message.className = "message high";
  } else {
    message.textContent = "Terlalu rendah. Coba angka yang lebih besar.";
    message.className = "message low";
  }
});