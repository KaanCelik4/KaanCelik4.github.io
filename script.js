// Uygulama 1: Not Hesaplama Fonksiyonu
function notHesapla() {
    const ad = document.getElementById('adSoyad').value;
    const vize = parseFloat(document.getElementById('vizeNotu').value);
    const final = parseFloat(document.getElementById('finalNotu').value);

    if (!ad || isNaN(vize) || isNaN(final)) {
        alert("Lütfen alanları doldurun!");
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

    const durum = ortalama >= 50 ? "Geçti" : "Kaldı";

    document.getElementById('resAd').innerText = ad;
    document.getElementById('resOrt').innerText = "Ortalama: " + ortalama.toFixed(2);
    document.getElementById('resHarf').innerText = "Harf Notu: " + harf;
    document.getElementById('resDurum').innerText = "Durum: " + durum;
    document.getElementById('notSonuc').style.display = "block";
}

// Uygulama 2: Birim Dönüştürücü Fonksiyonu
function birimHesapla() {
    const deger = parseFloat(document.getElementById('birimDeger').value);
    const tip = document.getElementById('donusumTipi').value;
    let sonuc = 0;

    if (isNaN(deger)) {
        alert("Lütfen bir değer girin!");
        return;
    }

    if (tip === "c-f") {
        sonuc = (deger * 9/5) + 32; // Celsius to Fahrenheit
    } else if (tip === "m-km") {
        sonuc = deger / 1000; // Metre to KM
    } else if (tip === "kg-gr") {
        sonuc = deger * 1000; // KG to Gram
    }

    document.getElementById('resBirim').innerText = "Sonuç: " + sonuc;
    document.getElementById('birimSonuc').style.display = "block";
}