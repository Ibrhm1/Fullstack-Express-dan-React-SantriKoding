# 👋 Fullstack Express dan React by [SantriKoding](https://santrikoding.com/)

Proyek ini adalah contoh implementasi Fullstack Web App menggunakan Express.js sebagai backend dan React.js sebagai frontend. Struktur proyek dipisah menjadi dua folder utama, backend-express/ dan frontend-react/.

## 🚀 Get Started

Clone Repo

```
bash
git clone <https://github.com/Ibrhm1/Ibrhm1-Ibrhm1-Fullstack-Express-dan-React-SantriKoding.git>
cd <nama-folder-repo>
```

## 📦 Setup Backend (Express Js)

### Masuk ke folder backend:

```
bash
cd backend-express
```

### Install Dependencies

```
bash
npm install
```

### Konfigurasi Environment

Buat file .env berdasarkan .env.example:

```
bash
cp .env.example .env
```

Edit isi file .env sesuai dengan konfigurasi database kamu:

```
env
DATABASE_URL="mysql://username:password@localhost:3306/nama_database"
```

Edit isi file .env untuk menambahkan Secret Key menggunakan jwt, jalankan perintah beriku:

```
bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
