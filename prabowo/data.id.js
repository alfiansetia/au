// ===== Data persona (id) — versi Indonesia: Prabowo (PARODI FIKSI) =====
// HP milik karakter fiktif "Dimas" (staf dokumentasi). Bapak Prabowo muncul sebagai tokoh publik.
// Ini karya penggemar/parodi, BUKAN akun resmi, BUKAN bocoran asli.
const chatData={
 "Bapak Prabowo": [
  ["16 Okt","date"],
  ["Selamat pagi, Dimas","them"],
  ["Pagi juga, Bapak. Siap dokumentasi apel pagi","me"],
  ["Kamera sudah dicas semua?","them"],
  ["Sudah, Bapak. Baterai penuh, memori kosong","me"],
  ["Bagus. Nanti ambil angle dari samping ya","them"],
  ["Siap, Bapak","me"],
  ["Jangan lupa sarapan dulu","them"],
  ["Siap. Saya sudah sarapan soto, Bapak gimana?","me"],
  ["Saya juga sudah. Bobby sudah dikasih makan?","them"],
  ["Sudah, Bapak. Bobby sehat","me"],
  ["Syukurlah","them"],
  ["17 Okt","date"],
  ["Dimas, jadwal gladi upacara jam berapa?","them"],
  ["Jam 09.00, Bapak. Saya standby jam 08.30","me"],
  ["Oke. Pakai baju rapi","them"],
  ["Siap, Bapak","me"],
  ["Foto kemarin hasilnya bagus","them"],
  ["Terima kasih, Bapak. Izin saya arsipkan","me"],
  ["Silakan","them"],
  ["[Foto Apel Pagi]","me"],
  ["Bagus, rapi","them"],
  ["Terima kasih, Bapak","me"]
 ],
 "Ajudan Ted": [
  ["16 Okt","date"],
  ["Dim, besok standby 07.30 ya","them"],
  ["Siap, Mas Ted","me"],
  ["Bawa lensa cadangan","them"],
  ["Siap, sudah masuk tas","me"],
  ["17 Okt","date"],
  ["Posisi di sisi kanan panggung","them"],
  ["Oke, saya geser setelah apel","me"],
  ["Jangan menghalangi jalur","them"],
  ["Siap, paham","me"]
 ],
 "Tim Media Istana": [
  ["16 Okt","date"],
  ["Koordinator: Briefing 08.00 di ruang media","them"],
  ["Dimas: Siap hadir","me"],
  ["Rani: Saya bawa daftar shot","them"],
  ["Dimas: Saya bagian foto still","me"]
 ],
 "Mama": [
  ["16 Okt","date"],
  ["Nak, sudah makan?","them"],
  ["Sudah, Ma. Soto tadi","me"],
  ["Jaga kesehatan, jangan begadang edit foto","them"],
  ["Iya Ma, ini sudah mau tidur","me"]
 ],
 "Pengumuman Istana": [
  ["16 Okt","date"],
  ["Koordinator: Apel pagi jam 07.30, seragam rapi","them"],
  ["Koordinator: Gladi upacara jam 09.00","them"]
 ],
 "Grup Dokumentasi": [
  ["17 Okt","date"],
  ["Rani: File foto apel sudah diupload?","them"],
  ["Dimas: Sudah, folder 17-Okt-Pagi","me"],
  ["Rani: Oke, saya cek","them"]
 ]
};
const chatNames=[
 "Bapak Prabowo",
 "Ajudan Ted",
 "Tim Media Istana",
 "Mama",
 "Pengumuman Istana",
 "Grup Dokumentasi"
];
const notes=[
 [
  "Tentang persona ini",
  "PARODI FIKSI — bukan akun resmi",
  "PARODI / KARYA FIKSI PENGGEMAR\n\nHP ini milik karakter fiktif Dimas (staf dokumentasi).\nBapak Prabowo muncul sebagai tokoh publik secara hormat.\n\nBUKAN bocoran asli, BUKAN akun resmi.\nJangan disebar sebagai berita asli.",
  "2026-10-17"
 ],
 [
  "Checklist liputan",
  "baterai / memori / lensa",
  "baterai penuh\nmemori kosong\nlensa cadangan\ntripod kecil",
  "2026-10-16"
 ],
 [
  "Jadwal",
  "apel 07.30 / gladi 09.00",
  "16 Okt apel pagi 07.30\n17 Okt gladi upacara 09.00\nstandby 30 menit sebelumnya",
  "2026-10-16"
 ],
 [
  "Arsip foto",
  "folder 17-Okt-Pagi",
  "folder 17-Okt-Pagi\nbackup ke harddisk\npilih 10 terbaik",
  "2026-10-17"
 ],
 [
  "Kucing",
  "Bobby sudah makan",
  "Bobby sudah dikasih makan pagi\ncek lagi sore",
  "2026-10-16"
 ],
 [
  "Makan",
  "soto / teh hangat",
  "sarapan soto\nbawa air putih\nteh hangat kalau lembur",
  "2026-10-16"
 ]
];
const events={
 "16": [
  "Apel pagi · 07.30"
 ],
 "17": [
  "Gladi upacara · 09.00",
  "Arsip foto"
 ],
 "20": [
  "Briefing tim media"
 ]
};
const searches=[
 "jadwal KRL ke Jakarta",
 "cara backup foto cepat",
 "lensa cadangan dokumentasi",
 "soto dekat Monas",
 "etika foto acara resmi",
 "cuaca Jakarta besok pagi"
];
const emails=[
 [
  "Biro Dokumentasi",
  "Jadwal liputan minggu ini",
  "Berikut jadwal apel pagi dan gladi upacara. Harap standby 30 menit sebelumnya.",
  "Kemarin"
 ],
 [
  "Tim Media Istana",
  "Briefing dokumentasi",
  "Mohon hadir briefing jam 08.00 di ruang media. Bawa checklist peralatan.",
  "Kemarin"
 ],
 [
  "Rani (Tim Media)",
  "Folder arsip 17-Okt-Pagi",
  "File foto apel pagi sudah diterima. Terima kasih.",
  "10/16"
 ]
];
const calls=[
 [
  "Ajudan Ted",
  "Kemarin 19:42",
  "Masuk"
 ],
 [
  "Bapak Prabowo",
  "Kemarin 18:31",
  "Keluar"
 ],
 [
  "Mama",
  "Kemarin 12:35",
  "Masuk"
 ],
 [
  "070-****-4821",
  "Jumat 14:08",
  "Tak terjawab"
 ],
 [
  "Bapak Prabowo",
  "Kamis 23:16",
  "Masuk"
 ],
 [
  "Tim Media Istana",
  "Rabu 15:22",
  "Masuk"
 ]
];
const songs=[
 [
  "Bambi",
  "media/sohee_01.mp3"
 ],
 [
  "Candy",
  "media/sohee_02.mp3"
 ],
 [
  "Pineapple Slice",
  "media/sohee_03.mp3"
 ],
 [
  "UN Village",
  "media/sohee_across_the_universe.mp3"
 ],
 [
  "Hello",
  "media/sohee_04.mp3"
 ]
];
const liveReplies=[
 {
  "mine": [
   "siap, Bapak"
  ],
  "them": [
   "Terima kasih, Dimas",
   "Jaga kesehatan ya"
  ]
 },
 {
  "mine": [
   "sudah saya arsipkan"
  ],
  "them": [
   "Bagus",
   "Lanjutkan"
  ]
 },
 {
  "mine": [
   "baik"
  ],
  "them": []
 }
];
const CALL_ASK_AT=240;
const CALL_AT=390;
const CALL_ASK=[
 "Dimas",
 "Boleh telepon sebentar?"
];
const CALL_ASK_REPLY=[
 "Siap, silakan"
];
const CALL_BUSY=[
 "Saya lagi di lapangan, Bapak",
 "Nanti saya kabari lagi"
];
const CALL_DECLINED=[
 "Maaf belum sempat angkat",
 "Saya telepon balik setelah apel"
];
const mediaLabels={
 "[Foto Apel Pagi]": {
  "kind": "image",
  "src": "photos/prabowo_04_resmi.jpg"
 },
 "[Foto Pidato Pelantikan]": {
  "kind": "image",
  "src": "photos/prabowo_03_pidato.jpg"
 },
 "[Foto Resmi 2024]": {
  "kind": "image",
  "src": "photos/prabowo_01_dekorasi.jpg"
 },
 "[Foto Menhan 2019]": {
  "kind": "image",
  "src": "photos/prabowo_02_menhan.jpg"
 },
 "[Voice Note Siulan]": {
  "kind": "audio",
  "src": "media/baekhyun_whistle.mp3",
  "label": "Siulan · Voice Note"
 },
 "[Voice Note Lagu]": {
  "kind": "audio",
  "src": "media/sohee_across_the_universe.mp3",
  "label": "UN Village · Voice Note"
 }
};
const photoSections=[
 [
  "Oktober 2026",
  [
   "prabowo_04_resmi.jpg",
   "prabowo_01_dekorasi.jpg",
   "prabowo_03_pidato.jpg",
   "prabowo_02_menhan.jpg"
  ]
 ]
];
const speech=[
 [
  "Bapak Prabowo",
  "Halo, Dimas. Terdengar jelas?"
 ],
 [
  "Dimas",
  "Jelas, Bapak. Siap."
 ],
 [
  "Bapak Prabowo",
  "Dokumentasi apel pagi tadi sudah lengkap?"
 ],
 [
  "Dimas",
  "Sudah, Bapak. Sudah saya arsipkan."
 ],
 [
  "Bapak Prabowo",
  "Bagus. Terima kasih."
 ],
 [
  "Dimas",
  "Sama-sama, Bapak."
 ],
 [
  "Bapak Prabowo",
  "Jaga kesehatan, jangan telat makan."
 ],
 [
  "Dimas",
  "Siap, Bapak. Terima kasih."
 ]
];
const OTHER_CALLS={
 "Ajudan Ted": [
  [
   "Ajudan Ted",
   "Dim, besok standby jam setengah delapan ya."
  ],
  [
   "Dimas",
   "Siap, Mas Ted."
  ],
  [
   "Ajudan Ted",
   "Jangan menghalangi jalur panggung."
  ],
  [
   "Dimas",
   "Siap, paham."
  ]
 ],
 "Mama": [
  [
   "Mama",
   "Nak, sudah makan?"
  ],
  [
   "Dimas",
   "Sudah, Ma."
  ],
  [
   "Mama",
   "Jangan begadang terus."
  ],
  [
   "Dimas",
   "Iya, Ma."
  ]
 ],
 "070-****-4821": [
  [
   "Pesan Otomatis",
   "Selamat siang. Ini penawaran pinjaman."
  ],
  [
   "Dimas",
   "……"
  ]
 ]
};
const SOHEE_AFTER=[
 [
  "Bapak Prabowo",
  "Terima kasih, Dimas."
 ],
 [
  "Dimas",
  "Sama-sama, Bapak."
 ]
];
const MAP_PLACES=[
 {
  "id": "home",
  "name": "Kos Dimas",
  "sub": "Kos · Lokasi Saat Ini",
  "x": 700,
  "y": 880,
  "color": "#5e5ce6",
  "glyph": "home",
  "fav": true,
  "info": [
   [
    "Alamat",
    "Kamar 402, Jl. Gerbang Belakang 21-4, Jakarta"
   ],
   [
    "Catatan",
    "parodi fiksi"
   ]
  ]
 },
 {
  "id": "s",
  "name": "Istana Merdeka",
  "sub": "Kantor · Lokasi liputan (fiksi)",
  "x": 772,
  "y": 792,
  "color": "#ff375f",
  "glyph": "home",
  "fav": true,
  "info": [
   [
    "Catatan",
    "Lokasi liputan apel & gladi (parodi)"
   ]
  ]
 },
 {
  "id": "corner",
  "name": "Warung Soto",
  "sub": "Makan",
  "x": 650,
  "y": 430,
  "color": "#ff9f0a",
  "glyph": "cup",
  "fav": true,
  "info": [
   [
    "Jam buka",
    "07.00 – 21.00"
   ]
  ]
 },
 {
  "id": "art",
  "name": "Monas",
  "sub": "Area publik",
  "x": 210,
  "y": 230,
  "color": "#8e8e93",
  "glyph": "pin",
  "fav": false,
  "info": []
 },
 {
  "id": "gym",
  "name": "Lapangan Apel",
  "sub": "Area apel",
  "x": 455,
  "y": 250,
  "color": "#8e8e93",
  "glyph": "pin",
  "fav": false,
  "info": []
 }
];
const MAP_RECENTS=[
 [
  "Istana Merdeka",
  "Liputan · 16 Okt (fiksi)"
 ],
 [
  "Kos Dimas",
  "Rute · 4 mnt jalan kaki"
 ],
 [
  "Warung Soto",
  "9 Okt"
 ],
 [
  "Monas",
  "7 Okt"
 ]
];
const INCOMING=[
 "Dimas, jangan lupa sarapan dulu",
 "File foto kemarin sudah bagus"
];
const DISPLAY={
 "Bapak Prabowo": "Bapak Prabowo (Parodi)",
 "Pengumuman Istana": "Pengumuman Istana",
 "Grup Dokumentasi": "Grup Dokumentasi",
 "Tim Media Istana": "Tim Media Istana",
 "Pesan Otomatis": "Pesan otomatis",
 "Nomor Tak Dikenal": "Nomor tak dikenal"
};
