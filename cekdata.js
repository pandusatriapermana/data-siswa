const dataSiswa = [];

function tambah() {
    const namaInput = document.getElementById("nama");
    const kelasInput = document.getElementById("kelas");
    const nilaiInput = document.getElementById("nilai");

    const nama = namaInput.value;
    const kelas = kelasInput.value;
    const nilai = Number(nilaiInput.value);

    const siswa = {
        nama: nama,
        kelas: kelas,
        nilai: nilai,
        status: nilai >= 60 ? "Lulus" : "Tidak Lulus",
        grade: hitungGrade(nilai)
    };
    dataSiswa.push(siswa);

    tampilkanData();
    namaInput.value = "";
    kelasInput.value = "";
    nilaiInput.value = "";
}
function hitungGrade(nilai) {
    if (nilai >= 90) return "A";
    if (nilai >= 80) return "B";
    if (nilai >= 75) return "C";
    return "D";
}
function tampilkanData() {
    const hasil = document.getElementById("hasil");
    hasil.innerHTML = "";

    dataSiswa.forEach((siswa) => {
        const p = document.createElement("p");
        
        p.innerHTML = `
            Nama:</strong> ${siswa.nama} <br>
            Kelas:</strong> ${siswa.kelas} <br>
            Nilai:</strong> ${siswa.nilai} <br>
            Status:</strong> ${siswa.status} <br>
            Grade:</strong> ${siswa.grade}
        `;
        hasil.appendChild(p);
    });
}


function hapus() {
    dataSiswa.length = 0;
    tampilkanData();
}