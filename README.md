---
name: Readme
route: /readme
hidden: true
---

# Selamat datang di repository project dokumentasi SIASN-BKN

<!-- ![test gambar](./src/img/gaeul.jpg) -->

Yahalloo.. Selamat datang di repository project dokumentasi aplikasi Sistem Informasi Aparatur Sipil Negara - Badan Kepegawaian Negara (SIASN-BKN).

Repository ini berisi kumpulan dokumentasi dari aplikasi SIASN-BKN yang juga menjadi topik skripsi kami.

Sebelumnya kami ucapkan terima kasih kepada Ibu **Dr. Astie Darmayantie, ST., MMSI., MSc** yang telah memberikan bimbingan dan kesempatan untuk melakukan dokumentasi.

### Cara menggunakan repository ini

Kalian bisa menggunakan repository ini untuk melakukan dokumentasi. Berikut langkah-langkah yang harus kalian lakukan, mulai dari clone repository, dan setup docz.

#### 1. Menginisialisasi git pada local computer

Pertama kalian harus membuat suatu folder kosong untuk inisialisasi git di dalam `local computer` kalian. Kemudian inisialisasi git dengan mengetikkan command ini pada terminal di direktori yang kalian buat tadi.

```
git init
```

Lalu membuat `branch` baru dengan cara

```
git branch -M main
```

#### 2. Clone Repository

Kalian bisa **`clone`** repository ini dengan cara seperti ini

```
git clone https://github.com/Skripsi-Dokumentasu-Bu-Astie/dokumentasi-siasn-bkn.git
```

Kemudian tambahkan remote agar kalian bisa melakukan `push` dan `pull` dari repository ini. Caranya begini

```
git remote add origin https://github.com/Skripsi-Dokumentasu-Bu-Astie/dokumentasi-siasn-bkn.git
```

Setelah itu kalian bisa membuat dokumentasi pada folder `docs` sesuai dengan bagian yang harus kalian dokumentasi.

Format dokumentasinya adalah `.md` atau `.mdx`

#### 3. Install Dependencies

Sebelum kalian menggunakan dan menjalankan `Docz`, kalian harus menginstall dependencies terlebih dahulu. Kalian bisa mengetikkan perintah ini pada terminal di folder kalian menyimpan project ini.

```
npm install
```

#### 4. Cara Running Docz

Setelah selesai menginstall semua dependencies, kalian bisa run `docz` nya dengan mengetikkan perintah pada teminal seperti ini:

```
npm run docz:dev
```

Ini adalah script yang ada di dalam file `package.json` untuk menjalankan `Docz`. Untuk dokumentasi lengkap tentang `Docz` bisa klik link ini [Docz](https://www.docz.site/docs/getting-started).

Nanti kalian bisa melihat dokumentasinya pada [http://localhost:3000](http://localhost:3000)

### Cara Menulis .md Atau .mdx

Kalian bisa melihat `syntax` penulisan MD atau MDX pada halaman ini [MD](https://www.markdownguide.org/getting-started/) atau [MDX](https://mdxjs.com/docs/).

### Thank You..

Terima kasih, semoga repo ini membantu dan berguna. Dan semoga kita semua bisa lulus tepat waktu. Aamiinn..

Good luck..
