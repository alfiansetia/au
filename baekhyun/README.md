# Persona: Baekhyun (EXO) — versi Indonesia

Klon dari `sal-priadi`, di-rework jadi persona **Baekhyun (EXO)**. Satu bahasa (Indonesia),
setting Seoul. Semua path relatif, folder bisa ditaruh di subfolder mana pun.

Buka: <http://localhost/au/baekhyun/> — PIN lock screen: **1121**.

## Identitas

| Bagian | Isi |
|---|---|
| Pemilik HP | **Baekhyun** (IG `baekhyunee`, WiFi `dorm_5G`) |
| Karakter utama | **Ara** (fiktif) + Mama, Minji, Junho, Seojun, Yuna, Manajer Kim, Hana, Minho, Donghyuk, Jiwon |
| Grup chat | Pengumuman Fakultas, Grup Tugas Jurusan, Presentasi MKU 4 |
| Kampus | Universitas Seoyeon, Seoul (Yeonnam-dong) |
| Lagu | Bambi, Candy, Pineapple Slice, UN Village, Hello |
| Aset | galeri = foto stok sementara (Picsum/Unsplash); avatar/cover/wallpaper = placeholder grafis |

## Ganti aset

Tool otomatis (sama seperti sal-priadi):

```powershell
cd C:\laragon\www\au\baekhyun\tools
.\siapkan-aset.ps1 -Sumber ..\_foto-mentah
.\siapkan-aset.ps1 -Sumber ..\_foto-mentah -Avatar ..\_foto-mentah\avatar.jpg
```

Catatan: `media/*.mp3` dan `media/*.mp4` masih file asli dari situs sumber — wajib diganti
sebelum dipublikasikan. Judul lagu (Bambi, Candy, dst) hanya teks, bukan audio asli.
Galeri berisi foto stok sementara (Picsum/Unsplash); ganti via `tools/siapkan-aset.ps1`.

Cover index (`assets/baekhyun.jpg`): foto red carpet Billboard K POWER 100 2024,
© K-POPIT via Wikimedia Commons, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

## Edit teks

- `data.id.js` — `chatData`, `chatNames`, `notes`, `events`, `emails`, `calls`, `songs`,
  `photoSections`, `MAP_PLACES`, `DISPLAY`.
- `app.js` — `APPS`, `ARTIST`, `REELS`, `unread`, `chatId`, `callName`.
- `i18n.js` — label UI. `chat_times.js` — jam tiap pesan (key = `chatData`).

## Catatan hukum

Persona memakai nama & foto artis nyata (Baekhyun, EXO). Ini karya penggemar non-komersial;
bukan afiliasi SM Entertainment. Untuk publikasi komersial, ganti ke karakter fiktif.
