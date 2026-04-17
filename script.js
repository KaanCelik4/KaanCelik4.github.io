function notHesapla() {
    const ad = document.getElementById("adSoyad").value;
    const vize = parseFloat(document.getElementById("vize").value);
    const final = parseFloat(document.getElementById("final").value);
    const sonucDiv = document.getElementById("notSonuc");

    if (!ad || isNaN(vize) || isNaN(final)) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const ortalama = (vize * 0.4) + (final * 0.6);
    let harf = "";
    if (ortalama >= 90) harf = "AA";
    else if (ortalama >= 80) harf = "BA";
    else if (ortalama >= 70) harf = "BB";
    else if (ortalama >= 60) harf = "CB";
    else if (ortalama >= 50) harf = "CC";
    else harf = "FF";

    sonucDiv.innerHTML = `<strong>${ad}</strong><br>Ortalama: ${ortalama.toFixed(2)}<br>Harf Notu: ${harf}<br>Durum: ${ortalama >= 50 ? 'Geçti' : 'Kaldı'}`;
    sonucDiv.style.display = "block";
}

function birimDonustur() {
    const deger = parseFloat(document.getElementById("birimDeger").value);
    const tip = document.getElementById("donusumTipi").value;
    const sonucDiv = document.getElementById("birimSonuc");
    let sonuc = 0;

    if (isNaN(deger)) return;

    if (tip === "cf") sonuc = (deger * 9/5) + 32;
    else if (tip === "mk") sonuc = deger / 1000;
    else if (tip === "kg") sonuc = deger * 1000;

    sonucDiv.innerHTML = `Sonuç: ${sonuc.toLocaleString()}`;
    sonucDiv.style.display = "block";
}