function notHesapla() {
    const ad = document.getElementById("adSoyad").value;
    const vize = parseFloat(document.getElementById("vize").value);
    const final = parseFloat(document.getElementById("final").value);

    if (isNaN(vize) || isNaN(final)) {
        alert("Lütfen geçerli notlar giriniz!");
        return;
    }

    const ortalama = (vize * 0.4) + (final * 0.6);
    let harf = "";

    // PDF'teki örneğe uygun harf notu mantığı
    if (ortalama >= 90) harf = "AA";
    else if (ortalama >= 80) harf = "BA";
    else if (ortalama >= 70) harf = "BB";
    else if (ortalama >= 60) harf = "CB";
    else if (ortalama >= 50) harf = "CC";
    else harf = "FF";

    document.getElementById("resAd").innerText = ad;
    document.getElementById("resOrt").innerText = ortalama.toFixed(2);
    document.getElementById("resHarf").innerText = harf;
    document.getElementById("resDurum").innerText = ortalama >= 50 ? "Geçti" : "Kaldı";
    
    document.getElementById("notSonuc").style.display = "block";
}

function birimDonustur() {
    const deger = parseFloat(document.getElementById("birimDeger").value);
    const tip = document.getElementById("donusumTipi").value;
    let sonuc = "";

    if (isNaN(deger)) {
        alert("Lütfen bir değer giriniz!");
        return;
    }

    switch(tip) {
        case "cf": sonuc = (deger * 9/5) + 32; break; // Celsius to Fahrenheit
        case "mk": sonuc = deger / 1000; break;      // Metre to KM
        case "kg": sonuc = deger * 1000; break;      // KG to Gram
    }

    document.getElementById("resBirim").innerText = sonuc;
    document.getElementById("birimSonuc").style.display = "block";
}