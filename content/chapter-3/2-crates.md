---
title: "Crates"
metaTitle: "Mengenal Packages, Crates & Modul"
metaDescription: "Mengenal Packages, Crates, & Module"
---

## Introduksi

Setelah memahami tentang bagaimana membuat project dengan menggunakan `cargo` kini saatnya untuk
merelease project yang telah kita buat sebelumnya dengan menggunakan Rust.

## Sebelum Release

Hal pertama yang perlu dilakukan adalah mendaftarkan akun di https://crates.io bisa login dengan menggunakan github kemudian kunjungi https://crates.io/me klik button new token untuk membuat token baru, jika sudah buka terminal dan login dengan perintah `cargo login <token>` isi argument `<token>` dengan value token yang kalian dapatkan dari `https://crates.io/me`.

Setelah berhasil login di local kalian, jika berhasil login hasinya API token tersebut akan tersimpan di `~/.cargo/credentials.toml`.

## Release Manual

Sebelumnya pastikan dulu untuk melihat spesifikasi data atau biasa disebut sebagai manifest yang
terdapat di `Cargo.toml`, pastikan untuk mengisi field author, license/license-file, dan description, kemudian jika sudah lengkap, silahkan ketik perintah publish dengan `cargo publish`, atau sangat direkomendasikan untuk menambahkan argument `cargo publish --dry-run` untuk memastikan tidak ada warning dan errors sebelum release ke crates.

## Release Otomatis dengan CI/CD

Selain cara manual, release juga dapat dilakukan dengan menggunakan tools CI/CD seperti travis
misalnya, contohnya seperti dibawah ini.


```
language: rust

deploy:
  provider: cargo
  token: "YOUR_TOKEN"
  on:
    tags: true
    branch: master
```
