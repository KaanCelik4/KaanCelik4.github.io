function notHesapla() {
    const ad = document.getElementById("adSoyad").value;
    const vize = parseFloat(document.getElementById("vize").value);
    const final = parseFloat(document.getElementById("final").value);
    const resDiv = document.getElementById("notSonuc");

    const ort = (vize * 0.4) + (final * 0.6);
    let harf = ort >= 90 ? "AA" : ort >= 80 ? "BA" : ort >= 70 ? "BB" : ort >= 60 ? "CB" : ort >= 50 ? "CC" : "FF";
    let durum = ort >= 50 ? "Geçti" : "Kaldı";

    resDiv.innerHTML = `<h3>${ad}</h3><p>Ortalama: ${ort.toFixed(2)}</p><p>Harf Notu: ${harf}</p><p>Durum: ${durum}</p>`;
    resDiv.style.display = "block";
}

function birimDonustur() {
    const val = parseFloat(document.getElementById("birimDeger").value);
    const tip = document.getElementById("donusumTipi").value;
    const resDiv = document.getElementById("birimSonuc");
    let sonuc = 0;

    if (tip === "cf") sonuc = (val * 9/5) + 32;
    else if (tip === "mk") sonuc = val / 1000;
    else if (tip === "kg") sonuc = val * 1000;

    resDiv.innerHTML = `<p><strong>Sonuç: ${sonuc.toLocaleString()}</strong></p>`;
    resDiv.style.display = "block";
}