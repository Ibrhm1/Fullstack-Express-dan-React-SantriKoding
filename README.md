# 👋 Fullstack Express dan React by [SantriKoding](https://santrikoding.com/)

Proyek ini adalah contoh implementasi Fullstack Web App menggunakan Express.js sebagai backend dan React.js sebagai frontend. Struktur proyek dipisah menjadi dua folder utama, backend-express/ dan frontend-react/.

## 🚀 Get Started

Clone repository

```
bash
git clone https://github.com/Ibrhm1/Fullstack-Express-dan-React-SantriKoding.git
```

```bash
cd Fullstack-Express-dan-React-SantriKoding
```

## 📦 Setup Backend (Express Js)

### Masuk ke folder backend:

```bash
cd backend-express
```

### Install Dependencies

```bash
npm install
```

### Konfigurasi Environment

Buat file .env berdasarkan .env.example:

```
cp .env.example .env
```

Edit isi file .env sesuai dengan konfigurasi database kamu:

```env
DATABASE_URL="mysql://username:password@localhost:3306/nama_database"
```

Edit isi file .env untuk menambahkan Secret Key menggunakan jwt, jalankan perintah beriku:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Jika berhasil akan mendapatkan kode random. Setelah itu, tambahkan ke file .env

```env
DATABASE_URL="mysql://username:password@localhost:3306/nama_database"
JWT_SECRET=paste_kode_random_hasil_generate
```

### Prisma (ORM)

Inisialisasi dan migrasi schema Prisma:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Jalankan Server

```bash
npm start
```

## Setup Frontend (React Js)

### Masuk ke folder frontend:

```bash
cd Frontend-react
```

### Install Dependencies

```bash
npm install
```

### Jalankan Aplikasi React

```bash
npm run dev
```

## 🛠️ Fitur Utama

- Autentikasi (Login/Register)
- CRUD Data
- API terstruktur dengan Express Router
- Validasi menggunakan express-validator
- Frontend modern dengan React + Axios

## 🔗 Tools dan Teknologi

- Frontend: React, Vite, Axios, Bootstap 5, js-cookie, react-router-dom
- Backend: Express.js, Prisma ORM, MySQL, Express-Validator
- Auth: JWT, Bcrypt
