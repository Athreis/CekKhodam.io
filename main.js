const namaKodam = [
    {  gambar: "NagaBearben.png" },
    {  gambar: "KING.png" },
    { gambar: "SIGMA.png" },
    {  gambar: "KEVIN.png" },
    {  gambar: "PUDIN.png" },
    { gambar: "PEPSI.png" },
    {  gambar: "RATNA.png" },
    {  gambar: "NANDA.png" },
    {  gambar: "WALUYO.png" },
    {  gambar: "ASUBALAP.png" },
    {  gambar: "SINGKONG.png" },
    {  gambar: "SIMILIKI.png" },
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

    document.getElementById('hasilKodam').textContent = `${username}, nama kodamu adalah `;
    document.getElementById('gambarKodam').src = kodamTerpilih.gambar;
}

function tutupPopUp() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
