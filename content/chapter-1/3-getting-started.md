---
title: 'Getting Started'
metaTitle: 'Getting Started'
metaDescription: 'Getting Started'
---

## Installation

Untuk menggunakan Rust, tentunya perlu untuk menginstalnya terlebih dahulu berikut adalah cara untuk meng-install Rust di mesin Sistem Operasi. Untuk pengguna **Linux** dan **Mac OS** cukup jalankan perintah ini pada terminal kalian `curl https://sh.rustup.rs -sSf | sh`, jika kalian pengguna sistem operasi **Windows** gunakan cmd sebagai pengganti terminal.

Jika proses downloadnya selesai silahkan ketik perintah `rustc --version` untuk melihat versi compiler Rust yang terinstall.

```bash
rustc --version
rustc 1.41.0 (531a79984 2020-01-27)
```

## Let's try to using Rust

Untuk awal perkenalan baiknya mencoba untuk membuat program yang cukup sederhana, misalnya dengan mencetak sebuah teks “Halo Dunia” di antarmuka terminal.

Catatan, sebelum lebih jauh penulis sangat merekomendasikan untuk menggunakan sistem operasi Linux atau Mac OS.

Untuk tahapan awal silakan buat dahulu folder `belajar-rust` di komputer kalian dan kemudian buat file dengan nama `main.rs` didalam folder `belajar-rust` untuk pembuatannya silakan gunakan _text editor_ atau bisa langsung dari terminal dengan menggunakan perintah ini `mkdir belajar-rust;cd belajar-rust;touch main.rs` dan buka file `main.rs` dan isi dengan script dibawah ini.

```rust
fn main() {
   println!("Halo Dunia");
}
```

Strukturnya akan tampil seperti gambar dibawah ini.

```
|-belajar-rust
|--main.rs
```

Jika sudah, kemudian tahapan selanjutnya adalah proses eksekusi kode, agar kodenya bisa digunakan kita perlu untuk mengkompilasinya terlebih dahulu dengan menggunakan kompilator Rust yaitu `rustc`.

```bash
cd belajar-rust
rustc main.rs
./main
Halo Dunia
```

Setelah menjalankan program “Halo Dunia” selanjutnya adalah melihat secara detail anatomi kode yang sudah kita tuliskan sebelumnya.

```rust
// main.rs

fn main() {
   // put your code here;
}
```

Keyword `fn` mewakili `function` di Rust, dan `main()` adalah kode pertama yang akan dieksekusi ketika menjalankan kode program dengan menggunakan Rust.

