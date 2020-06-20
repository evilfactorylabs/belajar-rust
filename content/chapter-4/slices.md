## _Slices_

Tipe data lainnya yang tidak memiliki _ownership_ adalah _slice_, _Slices_ memberikan kemudahan untuk mereferensi terhadap urutan data yang berdekatan dalam sebuah koleksi data.  

### _String Slices_

_String slice_ adalah referensi kepada bagian dari _String_, sehingga penggunaan _slices_ menggunakan _references syntax_ seperti ini `&[..]`.

```rust
fn main() {
   let name = String::from("Hello Word");
   println!("{}", &name[0..2]); // He
}
```

Kode di atas sama seperti mereferensi ke seluruh koleksi data pada _String_ yang mana nilainya adalah “Hello World”, dan kemudian mengambil posisi _index_ dari setiap huruf yang tersusun, huruf “H” posisinya berada _index_ 0, dan _index_ 2 adalah huruf “e”, sehingga hasil keluarannya adalah “He”.

Penggunaan _slice_ dapat dengan menggunakan _brackets_ seperti ini `[start_index..last_index]` posisi awal diawali dengan `start_index`, dan di akhir _slice_ adalah `last_index`.
