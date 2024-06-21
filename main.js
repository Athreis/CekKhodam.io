const namaKodam = [
    { nama: "Naga Bearbend", gambar: "NagaBearben.png" },
    { nama: "KING", gambar: "KING.png" },
    { nama: "Sigma (Silit Nigga)", gambar: "SIGMA.png" },
    { nama: "KEVIN LONTONG", gambar: "KEVIN.png" },
    { nama: "Pudin", gambar: "PUDIN.png" },
    { nama: "PEPSI", gambar: "PEPSI.png" },
    { nama: "RATNA PENYU", gambar: "RATNA.png" },
    { nama: "NANDA LEMON", gambar: "NANDA.png" },
    { nama: "WALUYO", gambar: "WALUYO.png" },
    { nama: "ASUBALAP", gambar: "ASUBALAP.png" },
    { nama: "SINGKONG", gambar: "SINGKONG.png" },
    { nama: "SIMILIKITI", gambar: "SIMILIKI.png" },
];

function PilihKodamAcak() {
    const randomIndex = Math.floor(Math.random() * namaKodam.length);
    return namaKodam[randomIndex];
}

function informasiKodam(event) {
    event.preventDefault(); // Menghentikan perilaku default form submit

    const username = document.getElementById('Username').value;
    const kodamTerpilih = PilihKodamAcak();

    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    document.getElementById('hasilKodam').textContent = `${username}, nama kodam adalah ${kodamTerpilih.nama}`;
    document.getElementById('gambarKodam').src = kodamTerpilih.gambar;
}

function tutupPopUp() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
