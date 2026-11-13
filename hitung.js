const daftarHitung = document.getElementById("daftarTugas");
const labelJumlah = document.getElementById("jumlahTugas");

function perbaruiJumlah(){
    labelJumlah.textContent = "Jumlah Tugas : " + daftarHitung.children.length;
}

//perbarui otomatis setiap kali ada perubahan pada daftar tugas
new MutationObserver(perbaruiJumlah).observe(daftarHitung, { childList: true });
perbaruiJumlah();