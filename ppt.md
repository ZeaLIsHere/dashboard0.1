# Presentasi: Membangun Dashboard Publik dengan Next.js

---

## Slide 1: Mengenal Dashboard Pneumonia Balita
### "Panel Kontrol Kesehatan Masyarakat"

- **Apa itu Dashboard Ini?**
  - Panel kontrol visual satu pintu untuk memantau kesehatan 99.625 balita di Kabupaten Pekalongan.
  - Mengubah ribuan baris data angka mentah dari Puskesmas & BPS menjadi grafik visual yang langsung dipahami pejabat, dokter, dan warga.
- **Analogi Sederhana:**
  - Seperti layar speedometer dan bahan bakar di dashboard mobil: pengemudi langsung tahu kondisi mesin tanpa harus membongkar kap mesin.
- **Manfaat Utama:**
  - Deteksi cepat wilayah rawan (zona merah seperti Kedungwuni).
  - Evaluasi target imunisasi (apakah sudah ≥ 100%).
  - Penyaluran tenaga medis dan obat secara tepat sasaran.

> **Catatan Presenter:**  
> "Bayangkan jika dinas kesehatan harus membaca tabel Excel 1.000 lembar tiap hari untuk tahu ada berapa bayi sakit. Dashboard ini meringkas ribuan data itu dalam satu layar interaktif yang bisa dibaca dalam 5 detik."

---

## Slide 2: Pondasi Teknologi (Next.js & Sahabatnya)
### "Memilih Bahan Bangunan yang Tepat"

- **Next.js (Rangka Rumah Siap Huni):**
  - Kerangka kerja website modern berbasis React.
  - Membuka halaman secepat kilat karena halaman sudah dirakit sebelumnya di server (*pre-rendered*).
- **Tailwind CSS (Kuas Cat & Dekorasi Cepat):**
  - Sistem tata warna dan ukuran instan. Mengatur warna kartu, jarak antar-tombol, dan bentuk sudut tanpa menulis ribuan baris kode rumit.
- **Font Lato Lokal (Identitas Bersih & Resmi):**
  - Huruf tersimpan langsung di dalam website, tidak tergantung internet luar. Font tetap rapi dan konsisten di HP maupun laptop dinas.

> **Catatan Presenter:**  
> "Kalau website biasa itu rumah kayu rakitan sendiri dari nol, Next.js itu rumah modular siap huni. Struktur pintu, jendela, dan kabel listriknya sudah ditata standar industri, kita tinggal isi perabotannya."

---

## Slide 3: Langkah Pembuatan & Setup Proyek
### "Dari Nol Hingga Tampil di Layar"

1. **Persiapan Lingkungan (Setup):**
   - Instal Node.js di komputer (mesin penggerak JavaScript).
   - Inisialisasi folder proyek Next.js dengan perintah terminal: `npm install`.
2. **Menata Tata Letak Utama (`layout.tsx` & Sidebar):**
   - Membuat sidebar menu navigasi satu kali, otomatis muncul di semua halaman (Beranda, Demografi, Imunisasi, Nakes).
   - Menu otomatis berubah warna biru saat halaman tersebut sedang aktif.
3. **Penyimpanan Aset (`/public`):**
   - Logo Pemkab Pekalongan, ilustrasi ibu & anak, serta file font disimpan di folder `public` agar langsung bisa dipanggil website.

> **Catatan Presenter:**  
> "Langkah kodingnya sangat rapi: kita siapkan bahan di folder `public`, bikin rangka sidebar navigasi sekali saja, lalu Next.js otomatis menghubungkan semua halaman tanpa loading layar putih."

---

## Slide 4: Merakit Visual Data & Grafik Interaktif
### "Mengubah Angka Menjadi Cerita Visual"

- **Kartu Metrik KPI (Kuningan / Pastel):**
  - 4 kartu di bagian atas dengan warna berbeda (Jumlah Balita, Kasus, Kematian, Imunisasi) agar mata pengguna langsung fokus pada angka paling penting.
- **Grafik Batang & Tren Bersih:**
  - Menggunakan kode SVG murni (gambar vektor ringan tanpa plugin berat pihak ketiga).
  - Grafik Kelompok Umur dirancang horizontal agar teks label umur tidak patah dan pangkal garis tetap rata.
- **Tabel Data Kecamatan yang Bersahabat:**
  - Angka tersusun rata kanan dengan format desimal rapi (*tabular numbers*), dilengkapi status warna: Hijau (Terkendali), Biru (Siaga), Merah (Darurat).

> **Catatan Presenter:**  
> "Kunci dashboard yang bagus bukan animasi heboh, melainkan keterbacaan data. Grafik batang yang pangkalnya rata dan kartu angka yang jelas bikin data langsung bermakna untuk pengambil keputusan."

---

## Slide 5: Tampilan Responsif & Peluncuran ke Dunia
### "Bisa Dibuka di Mana Saja, Kapan Saja"

- **Responsif di Semua Ukuran Layar:**
  - Di layar monitor lebar kantor: Tampil 3 kolom sejajar yang megah.
  - Di layar tablet/laptop: Menyesuaikan otomatis menjadi 2 kolom.
  - Di HP petugas lapangan: Berubah vertikal 1 kolom dengan menu samping lipat (*drawer*).
- **Publikasi ke GitHub & Server:**
  - Kode disimpan dan dicadangkan dengan aman di GitHub (`git push`).
  - Siap dihubungkan ke penyedia cloud (seperti Vercel / server Pemkab) hanya dengan sekali klik untuk diakses publik.

> **Catatan Presenter:**  
> "Hasil akhirnya, website ini ringan, bisa dibuka bidan desa lewat HP di pelosok pegunungan maupun ditampilkan di proyektor rapat dinas kesehatan tanpa pecah tampilan."
