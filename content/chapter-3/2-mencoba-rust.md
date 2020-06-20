---
title: 'Mencoba Rust'
metaTitle: 'This is the title tag of this page'
metaDescription: 'This is the meta description'
---

Untuk awal perkenalan baiknya mencoba untuk membuat program yang cukup sederhana, misalnya dengan mencetak sebuah teks “Halo Dunia” di antarmuka terminal.
> Catatan, sebelum lebih jauh **penulis sangat merekomendasikan untuk menggunakan sistem operasi Linux atau Mac OS**.

Untuk tahapan awal silakan buat dahulu _folder_ belajar di komputer kalian dan buat file dengan nama `main.rs` silakan gunakan _text editor_ kalian untuk membuatnya, kemudian di dalamnya isi dengan _script_ dibawah ini.

```rust
fn main() {
   println!("Halo Dunia");
}
```

Jika sudah, kemudian tahapan selanjutnya adalah proses eksekusi kode, agar kodenya bisa digunakan kita perlu untuk mengkompilasinya terlebih dahulu dengan menggunakan kompilator Rust yaitu _rustc_, detailnya seperti apa silakan lihat proses dibawah ini dengan menggunakan terminal.

```bash
cd belajar/src/main.rs
rustc main.rs
./main
Halo Dunia
```

Tahapan proses yang terjadi diatas adalah pergi ke direktori _project_ Rust, kemudian dengan bantuan _rustc_ sebagai kompilator Rust, proses tersebut akan membaca kode yang terdapat pada file `main.rs` kemudian di propses agar menjadi file yang _executable_ atau istilah populernya _binary code_ sehingga kodenya bisa dapat secara langsung dijalankan.
