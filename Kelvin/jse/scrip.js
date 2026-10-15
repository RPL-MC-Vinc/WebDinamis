const inputTotal = document.getElementById("totalBelanja");
const tombolCek = document.getElementById("tombolCek");
const elemenHasil = document.getElementById("hasil");

const formatRupiah = (nominal) =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(nominal);

tombolCek.addEventListener("click", () => {
    const nilaiInput = inputTotal.value.trim();

    if (nilaiInput === "") {
        elemenHasil.innerText = "Masukkan total nominal belanja terlebih dahulu.";
        inputTotal.focus();
        return;
    }

    const totalBelanja = Number(nilaiInput);

    if (!Number.isFinite(totalBelanja) || totalBelanja < 0) {
        elemenHasil.innerText = "Masukkan nominal belanja yang valid.";
        inputTotal.focus();
        return;
    }

    if (totalBelanja >= 100000) {
        const diskon = totalBelanja * 0.1;
        const totalPembayaran = totalBelanja - diskon;

        elemenHasil.innerHTML =
            `<strong>Selamat, Anda mendapatkan diskon 10%!</strong><br>` +
            `Potongan: ${formatRupiah(diskon)}<br>` +
            `Total pembayaran: <strong>${formatRupiah(totalPembayaran)}</strong>`;
    } else {
        elemenHasil.innerHTML =
            `Total pembayaran: <strong>${formatRupiah(totalBelanja)}</strong><br>` +
            `Belanja minimal Rp100.000 untuk mendapatkan diskon.`;
    }
});