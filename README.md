# 🌾 Basis Data Jaringan Irigasi
### Dinas PUPR Kabupaten Donggala — Bidang Sumber Daya Air

---

## 🚀 CARA DEPLOY KE VERCEL (Gratis)

### Langkah 1 — Buat akun GitHub
1. Buka https://github.com → klik **Sign up** → daftar gratis

### Langkah 2 — Upload project ini ke GitHub
1. Login GitHub → klik tombol **+** pojok kanan atas → **New repository**
2. Nama repo: `basis-data-irigasi-donggala`
3. Pilih **Public** → klik **Create repository**
4. Upload semua file project ini (drag & drop ke halaman repo)

### Langkah 3 — Deploy ke Vercel
1. Buka https://vercel.com → klik **Sign up** → pilih **Continue with GitHub**
2. Klik **Add New Project**
3. Pilih repo `basis-data-irigasi-donggala`
4. Biarkan semua setting default → klik **Deploy**
5. Tunggu 1–2 menit → website langsung live! 🎉

### Alamat web Anda:
```
https://basis-data-irigasi-donggala.vercel.app
```

---

## 🔐 Akun Login Default

| Username | Password   | Role  |
|----------|------------|-------|
| admin    | pupr2025   | Admin |
| sda      | donggala   | Staf  |

---

## 📁 Struktur File

```
irigasi-web/
├── index.html          ← entry point HTML
├── package.json        ← konfigurasi project
├── vite.config.js      ← konfigurasi build
└── src/
    ├── main.jsx        ← entry point React
    └── App.jsx         ← seluruh kode aplikasi
```

---

## ✏️ Cara Edit Data

Buka file `src/App.jsx`, cari bagian:
```js
const daerahIrigasi = [...]
```
Edit atau tambah data di sana sesuai data nyata di lapangan.
