---
title: 'Developer Tools'
metaTitle: 'Developer Tools'
metaDescription: 'Developer Tools'
---

## Developer Tools

Sebagai perekayasa perangkat lunak tentunya tantangan terberatnya di kecepatan dan keamanan. Kecepatan berkaitan dengan waktu, bagaimana men deliver perangkat lunak dengan lebih cepat dan keaman berkaitan dengan kualitas yang dihasilkan, sehingga keduanya merupakan hal yang cukup penting untuk dipertimbangkan.

Untuk itu Rust menawarkan beberapa dukungan tools yang mempermudah penggunanya untuk membuat sesuatu dengan baik.

## Cargo

Cargo adalah paket manager yang sangat membantu untuk proses download paket library dari [https://crates.io/](https://crates.io/) dan juga berfungsi sebagai kompilator, dan juga membantu untuk proses distribusi aplikasi.

## Rustfmt

Rustfmt adalah tool untuk format kode agar sesuai dengan gaya penulisan yang standar. Dengan bantuan `rustfmt` standarisasi kode akan semakin baik, keuntungan lainnya, `rustfmt` juga bisa diintegrasikan dengan proses CI/CD, sehingga proses formating menjadi lebih otomatis.

## Rust Compiler

Rust compiler disingkat `rustc` adalah tool yang digunakan untuk mengkompilasi kode sumber menjadi [binary code](https://en.wikipedia.org/wiki/Binary_code) yaitu bahasa mesin yang dapat dijalankan secara langsung di perangkat sistem operasi.

## Rustup

Kompilator Rust yang terinstall di komputer, atau sebuah toolchain management yang didesain untuk mengatur versi kompilator Rust _stable_, _beta_ dan _nightly_. Jika ingin melihat kemampuan `rustup` cukup ketikan perintah `rustup --help` di antarmuka terminal kalian.
