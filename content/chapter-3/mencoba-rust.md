## Mencoba Rust

Untuk awal perkenalan baiknya mencoba untuk membuat program yang cukup sederhana, misalnya dengan mencetak sebuah text  “Halo Dunia” di antarmuka terminal, oh iya sebelum lebih jauh **penulis sangat merekomendasikan untuk menggunakan sistem operasi Linux atau Mac OS**.

Untuk tahapan awal silahkan buat dahulu folder belajar di komputer kalian dan buat file dengan nama `main.rs` silahkan gunakan text editor kalian untuk membuatnya, kemudian di dalamnya isi dengan script dibawah ini.

```
fn main() {
   println!("Halo Dunia");
}
```

Jika sudah kemudian tahapan selanjutnya adalah proses eksekusi kode, agar kodenya bisa digunakan kita perlu untuk mengkompilasinya terlebih dahulu dengan menggunakan kompilator Rust yaitu _rustc, _detailnya seperti apa silahkan lihat proses dibawah ini dengan menggunakan terminal.

```
cd belajar/src/main.rs
rustc main.rs
./main
Halo Dunia
```

Tahapan proses yang terjadi diatas adalah pergi ke direktori project Rust, kemudian dengan bantuan _rustc_ sebagai kompilator Rust, proses tersebut akan_ _membaca kode yang terdapat pada file `main.rs` kemudian di propses agar menjadi file yang _executable _atau istilah populernya _binary code_ sehingga kodenya bisa dapat secara langsung dijalankan.