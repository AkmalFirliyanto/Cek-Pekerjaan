const pekerjaan = [
    "Si Tukang Kopi",
    "Si Driver Taksi",
    "Si Pedagang Es",
    "Si Karyawan Kantoran",
    "Si Tukang Parkir",
    "Si Barista",
    "Si Guru Olahraga",
    "Si Supir Antar Jemput",
    "Si Pelayan Restoran",
    "Si Jaga Malam",
    "Si Dokter Hewan",
    "Si Kasir Minimarket",
    "Si Petugas Kebersihan",
    "Si Penjual Bubur",
    "Si Pengemudi Online",
    "Si Ahli Gadget",
    "Si Teknisi TV",
    "Si Penjual Roti Bakar",
    "Si Karyawan Supermarket",
    "Si Penjual Sayur",
    "Si Manajer Proyek",
    "Si Penulis Novel",
    "Si Ahli Sepeda",
    "Si Bapak Tukang Kebun",
    "Si Pelatih Fitness",
    "Si Barista Kopi",
    "Si Pengemudi Bus",
    "Si Penyanyi Karaoke",
    "Si Tukang Cukur",
    "Si Chef Restoran",
    "Si Pengantar Paket",
    "Si Penjaga Taman",
    "Si Pemain Musik",
    "Si Pekerja IT",
    "Si Pengrajin Kerajinan Tangan",
    "Si Manajer Kafe",
    "Si Pembaca Berita",
    "Si Ahli Mobil",
    "Si Pemandu Wisata",
    "Si Peternak Lele",
    "Si CEO Startup",
    "Si Penjual Kue",
    "Si Pemilik Warung",
    "Si Penyiar Radio", 
    "Si Penjaga Warnet",
    "Si Penjual Nasi Goreng",
    "Si Pemilik Toko",
    "Si Pemilik Salon",
    "Si Penjual Martabak",
    "Si Pemilik Bengkel",
    "Si Penjual Sate",          
    "Si Penjual Ayam Goreng",
    "Si Penjual Bakso",
    "Si Penjual Soto",
    "Si Penjual Pecel Lele",
    "Si Penjual Pempek",
    "Si Penjual Mie Ayam",
    "Si Penjual Mie Goreng",    
    "Si Penjual Mie Rebus",
    "Si Penjual Mie Pangsit",   
    "Si Penjual Mie Kocok",
    "Si Penjual Mie Aceh",
    "Si Penjual Mie Jawa",
    "Si Penjual Mie Ujung Pandang", 
    "Si Teller Bank",
    "Si Penjaga Panti Asuhan"
];

document.getElementById('pekerjaanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let pekerjaan = getPekerjaanByName(name);
    document.getElementById("pekerjaanResult").innerText = pekerjaan;
});

function getPekerjaanByName(name) {
    let hash = hashCode(name);
    let chance = hash % 100;
    
    if (chance < 10) {
        return "Kamu Pengangguran, Cari kerja sana";
    } else {
        let index = hash % pekerjaan.length;
        return pekerjaan[index];
    }
}

function hashCode(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        let char = name.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}
