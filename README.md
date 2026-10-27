# Clone statis: wonbin-phone.pages.dev

Mirror lokal dari <https://wonbin-phone.pages.dev/> — sebuah "fake phone" UI (SPA) bertema iPhone
dengan 13 aplikasi, 48 foto galeri, 4 lagu, 4 voice note, dan 3 video reels.

## Menjalankan

Wajib lewat web server (jangan `file://`) karena aplikasi memakai `fetch`/`localStorage`.

- Laragon/Apache: <http://localhost/wonbin-phone.pages.dev/>
- PHP built-in server:
  ```powershell
  cd wonbin-phone.pages.dev
  php -S 127.0.0.1:8099
  ```
  lalu buka <http://127.0.0.1:8099/>

PIN lock screen: **1121**.

## Struktur

```
wonbin-phone.pages.dev/
├── index.html            # shell SPA + CSS inline
├── app.js                # seluruh logika UI (semua aplikasi)
├── i18n.js               # kamus terjemahan
├── chat_times.js         # data waktu chat
├── data.<lang>.js        # konten per bahasa: ko, en, ja, zh, vi, th, id
├── wallpaper.jpg
├── photos/               # 48 foto galeri + story + foto "approved"
└── media/                # mp3, mp4 (reels), avatar
```

Bahasa dipilih lewat `?lang=ko|en|ja|zh|vi|th|id`.

## Catatan

- `data.<lang>.js` = tempat mengubah teks dan daftar foto.
- `app.js` = tempat mengubah layout/logika tiap aplikasi.
- Font Pretendard masih diambil dari `cdn.jsdelivr.net` (butuh internet); aset lain lokal semua.
- Server aslinya (Cloudflare Pages) membalas `index.html` dengan HTTP 200 untuk path yang tidak ada.
  Jadi saat mengecek aset, validasi lewat `Content-Type`, bukan status code.
