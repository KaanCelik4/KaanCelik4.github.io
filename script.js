// ==========================================
// UYGULAMA 1: NOT HESAPLAMA (Mevcut Kodun)
// ==========================================
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

// ==========================================
// UYGULAMA 2: BİRİM DÖNÜŞTÜRÜCÜ (Mevcut Kodun)
// ==========================================
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

// ==========================================
// HAFTA 7: YENİ EKLENEN FONKSİYONLAR
// ==========================================

// 1. Tema Değiştirme Etkileşimi [cite: 72, 85]
const temaButonu = document.getElementById('temaButonu');
if (temaButonu) {
    temaButonu.addEventListener('click', function () {
        // classList.toggle ile tema değiştirme [cite: 56, 85]
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            temaButonu.textContent = 'Açık Temaya Geç';
            temaButonu.className = 'btn btn-light btn-lg';
        } else {
            temaButonu.textContent = 'Koyu Temaya Geç';
            temaButonu.className = 'btn btn-outline-dark btn-lg';
        }
    });
}

// 2. Form Verilerinden Özet Üretme [cite: 72, 84]
const kayitFormu = document.getElementById('kayitFormu');
const sonucKutusu = document.getElementById('sonucKutusu');

if (kayitFormu) {
    kayitFormu.addEventListener('submit', function (event) {
        // Sayfa yenilenmesini engelleme 
        event.preventDefault();

        // Form değerlerini alma [cite: 53]
        const adSoyad = document.getElementById('adSoyad').value;
        const email = document.getElementById('email').value;
        const bolum = document.getElementById('bolum').value;
        const sinif = document.getElementById('sinif').value;
        const oturum = document.getElementById('oturum').value;
        const tur = document.getElementById('tur').value;
        const mesaj = document.getElementById('mesaj').value;
        const onay = document.getElementById('onay').checked;

        // Koşullu eksik alan kontrolü [cite: 54, 83]
        if (!adSoyad || !email || !bolum || !sinif) {
            alert("Lütfen tüm zorunlu alanları doldurunuz!");
            return;
        }

        if (!onay) {
            alert("Lütfen bilgilendirme onayını işaretleyiniz.");
            return;
        }

        // Dinamik başvuru özeti oluşturma [cite: 84, 119]
        sonucKutusu.classList.remove('alert-info');
        sonucKutusu.classList.add('alert-success');
        
        sonucKutusu.innerHTML = `
            <h4 class="alert-heading fw-bold mb-3">Başvuru Özeti Başarıyla Oluşturuldu</h4>
            <p><strong>Ad Soyad:</strong> ${adSoyad}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Bölüm / Sınıf:</strong> ${bolum} - ${sinif}</p>
            <p><strong>Oturum Tercihi:</strong> ${oturum} (${tur})</p>
            <hr>
            <p class="mb-0"><strong>Mesajınız:</strong> ${mesaj ? mesaj : 'Mesaj belirtilmedi.'}</p>
        `;
    });
}