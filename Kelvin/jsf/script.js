const batasKarakter = 150;
const kolomTeks = document.getElementById("teks");
const sisaKarakter = document.getElementById("sisa");
const peringatan = document.getElementById("peringatan");

kolomTeks.addEventListener("input", () => {
  if (kolomTeks.value.length > batasKarakter) {
    kolomTeks.value = kolomTeks.value.slice(0, batasKarakter);
    peringatan.textContent = "Peringatan: maksimal 150 karakter.";
    peringatan.hidden = false;
  } else {
    peringatan.textContent = "";
    peringatan.hidden = true;
  }

  sisaKarakter.textContent =
    `Sisa karakter: ${batasKarakter - kolomTeks.value.length}`;
});