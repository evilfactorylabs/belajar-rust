---
title: 'Membuat README.md'
metaTitle: 'This is the title tag of this page'
metaDescription: 'This is the meta description'
---

Membuat berkas README memudahkan _developer_ lain baik untuk berkontribusi ataupun menggunakan project yang kita buat. Karena itu, membuat berkas README yang jelas dan mudah dipahami adalah langkah awal untuk mengambil hati pengguna/developer terhadap project yang kita buat & kembangkan.

## Tak kenal maka tak sayang

Klasik, tapi _it works_. Tulis nama projectmu apa, beri penjelasan singkat tentang apa projectmu tersebut. Juga, bila memiliki nama yang unik, kasih tau sedikit "cerita" dibalik nama tersebut agar pembaca tidak terlalu bingung dengan nama projectmu.

## Latar Belakang

Tulis motivasi dibalik alasan mengapa kamu membuat project tersebut. Bahkan bila motivasinya hanya "just for fun", karena, you know, developer punya banyak waktu & kita sering boring, bukan?

Jika kamu tipe yang suka bercerita, beri tautan ke "versi panjang" dari motivasimu tersebut.

## Prasyarat

Masalah klasik dari "it works on my machine" adalah keberagaman mesin. Tidak semua developer memasang GCC di mesinnya, misalnya. Tulis prasyarat dari sistem operasi, runtime, dependensi, dsb. Tulis jika projectmu belum mendukung di lingkungan spesifik (misal only works on BSD).

Bagian ini penting untuk membuat developer tidak frustasi karena selalu gagal untuk mencoba menjalankan projectmu di mesin mereka.

## Tautan ke dokumentasi

Beri tautan ke dokumentasi, untuk mengetahui secara keseluruhan _high-level_ nya dari projectmu. Membuat halaman khusus untuk API lebih baik untuk bisa melihatnya dari _lower-level view_.

## Cara menggunakan

Ya, the manual. Mungkin developer bisa langsung cek berkas `Makefile` atau `package.json`, tapi mungkin ada beberapa "upacara" yang harus dilakukan seperti mengatur _environment variable_ contohnya. Selain itu, membuat langkah cara menggunakan juga baik untuk _developer_ lain yang kurang familiar dengan _stack_ yang kamu pilih, khususnya kepada para pendatang baru.

## Menulis & Menjalankan test

Jika projectmu memiliki _automated testing_, kasih tau cara menjalankannya seperti apa. Beberapa _developer_ bisa mempelajari tentang projectmu dari _behavior_ yang dilakukan via menjalankan _tests_, jadi, buatlah skenario _testing_ yang jelas dan mudah untuk dijalankan.

## Cara deployment

Jika project kita adalah sebuah aplikasi, bagian ini penting untuk membantu developer
lain menggunakan projectmu di dunia nyata.

## Cara berkontribusi

Jika projectmu sudah "lumayan matang" dan membuka peluang untuk developer lain agar bisa berkontribusi, kasih tau caranya bagaimana (how) dan kasih tau apa yang harus dilakukan (what).

## Tampilkan kontributor

Meskipun itu baru hanya kamu sendiri. Ini berguna untuk "ber-terima kasih" kepada developer lain yang telah meluangkan waktunya untuk berkontribusi di project kamu.

## Ber-terima kasih

Jika project kamu ter-inspirasi dari project lain, tweet seseorang, atau apapun itu, ber-terima kasihlah secara eksplisit dengan menuliskannya disitu. Inilah salah satu keindahan dari dunia Open Source.

## Narahubung

Ini berguna untuk developer lain agar bisa "berkomunikasi" dengan orang yang tepat. Tulis username Twittermu atau alamat email mu, agar developer lain (dan semoga bukan rekruiter spam!) bisa menghubungimu terkait dengan project yang kamu buat.

## Footer

Terserah ingin diisi apa, ingin "greetz to blablabla" seperti heker; "thanks to blablabla", ataupun hal lainnya asal masih dibatas kewajaran.

## Template

Agar lebih mudah, kamu bisa menggunakan template dibawah:

```
# Nama Project

Project keren gue, sama seperti yang biasa orang lain lakukan.

## Motivasi

Latar belakang mengapa project ini dibuat adalah karena:

- Alasan pertama
- Alasan kedua
- Alasan n

Jika ingin membaca lebih lengkapnya tentang cerita
dibalik project ini, bisa [baca disini](https://evilfactorylabs.org/cerita)

## Prasyarat

- Node.js (>= v12.0.0)
- NPM (>= 6.9.0)
- Brainfuck Compiler

Untuk pengguna Windows, ada sedikit masalah ketika mem-build
project, and I'm working on it (#1)!

## Cara menggunakan

- Install dependensi (`npm install`)
- Jalankan perintah (`npm start`)

## Dokumentasi

Silahkan kunjungi https://lol.readthedocs.org untuk dokumentasi lengkapnya.

## Menjalankan test

Kita menggunakan Jest sebagai Testing Runner, cukup jalankan `npm run test` di
terminal dan lihat apa yang terjadi!

## Cara deployment

Kita menggunakan Docker, silahkan lihat berkas `docker-compose.yml` dan ikuti instruksi
yang ada di berkas [deployment.md](deployment.md)

## Cara berkontribusi

Silahkan membaca [CONTRIBUTING.md](contributing.md) untuk selengkapnya (termasuk
panduan untuk membuat Pull Request)

## Contributors

((Bisa menggunakan [all-contributors](https://github.com/all-contributors/all-contributors)
atau secara manual seperti ini:))

- Nama orang (@username), tempat bekerjanya bila ada.

## Terima Kasih

Project ini dibuat menggunakan:

- Project populer yang sudah ada
- Tulis lagi kalau masih ada
- Terus tulis bila masih ada

Dan ter-inspirasi dari [Project ini](https://github.com/user/repo) dengan beberapa
peningkatan dan fitur unik.

## Narahubung

- Nama orang (username)
- Nama orang (username)

---

MIT License

Copyright (c) 2020 evilfactorylabs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
