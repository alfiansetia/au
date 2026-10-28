# Persona: Sal Priadi (versi Indonesia)

Klon kedua dari `wonbin-phone.pages.dev`, di-rework jadi **1 bahasa (Indonesia)** dengan
persona baru. Semua path relatif, jadi folder ini bisa ditaruh di subfolder mana pun.

Buka: <http://localhost/au/sal-priadi/> — PIN lock screen: **1121**.

## Yang sudah diubah

| Bagian | Isi sekarang |
|---|---|
| Bahasa | hanya `id` (`LANGS` di `index.html`), `data.ko/en/ja/zh/vi/th.js` dihapus |
| Pemilik HP | **Sal Priadi** (nama di Settings, WiFi `rumah_5G`, IG `salpriadi`) |
| Karakter utama | **Nara** (fiktif) + Mama, Sinta, Bima, Damar, Yura, Rani, Dita, Tio, Pak Joko, Raka |
| Grup chat | Pengumuman Fakultas, Grup Tugas Jurusan, Presentasi MKU Kelompok 4 |
| Kampus | Universitas Cakrawala, Jakarta (dulu Jungyeon/Seoul) |
| Lagu | Senja Kota, Ruang Tunggu, Pulang, Sisa Hujan, Jakarta Sore |
| Tanggal | `2026-10-17`, format tanggal Indonesia (`16 Okt`, `Oktober 2026`) |
| Aset | galeri = foto stok sementara (Picsum/Unsplash, lihat bawah); avatar/cover/wallpaper = placeholder grafis |

## Ganti aset (penting sebelum publish)

> Galeri (`photos/`) saat ini berisi **foto stok sementara** dari Picsum (foto Unsplash,
> lisensi bebas pakai). Ceritanya menyebut selfie/foto spesifik (mis. "selfie usai olahraga"),
> jadi idealnya tetap diganti foto asli lewat tool di bawah.

Ada tool otomatis: taruh foto mentah di satu folder, lalu jalankan

```powershell
cd C:\laragon\www\au\sal-priadi\tools
.\siapkan-aset.ps1 -Sumber ..\_foto-mentah
.\siapkan-aset.ps1 -Sumber ..\_foto-mentah -Avatar ..\_foto-mentah\avatar.jpg
.\siapkan-aset.ps1 -Sumber ..\_foto-mentah -Cover ..\_cover -Wallpaper ..\_wall\wall.jpg
```

Tool ini crop tengah + resize otomatis (galeri 900×1200 3:4, avatar & cover 1:1, wallpaper 1170×2532),
lalu menimpa slot placeholder sesuai urutan nama file.

Manual:

- `photos/*.jpg` → 48 foto galeri, ukuran bebas (disarankan 3:4, ~900×1200).
- `media/sohee_01..04.jpg` → cover album (1:1).
- `media/sohee_kakao_profile.jpg`, `sohee_instagram_avatar.jpg` → avatar (1:1).
- `media/sohee_01..04.mp3`, `sohee_across_the_universe.mp3`, `wonbin_whistle.mp3` → **audio masih file asli
  dari situs sumber (berhak cipta)**. Wajib diganti sebelum dipublikasikan.
- `media/sohee_instagram_01..03.mp4` → video reels (masih video asli, sama catatannya).
- `wallpaper.jpg` → wallpaper lock screen (1170×2532).

Nama file boleh tetap; kalau diganti, sesuaikan `photoSections` / `songs` / `ART` di `data.id.js` + `app.js`.

## Di mana mengedit teks

- `data.id.js` — `chatData` (isi chat), `chatNames`, `notes`, `events`, `emails`, `calls`,
  `songs`, `photoSections`, `MAP_PLACES`, `DISPLAY` (nama tampilan).
- `app.js` — logika UI; teks yang masih nempel: `APPS` (label ikon), `ARTIST`, `REELS`, `unread`,
  `chatId`, `callName`.
- `i18n.js` — label UI (`Lagu`, `Obrolan`, `Pengaturan`, dst).
- `chat_times.js` — jam tiap pesan (key harus sama dengan `chatData`).

## Catatan hukum

Persona "Sal Priadi" memakai nama artis nyata. Untuk publikasi komersial, sebaiknya ganti jadi
karakter fiktif dan gunakan foto/audio berlisensi — hindari kesan impersonasi.
