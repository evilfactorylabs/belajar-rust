## _Slices_

Tipe data lainnya yang tidak memiliki _ownership_ adalah _slice_, _Slices _memberikan kemudahan untuk mereferensi terhadap urutan data yang berdekatan dalam sebuah koleksi data.  

### _String Slices_

_String slice_ adalah referensi kepada bagian dari _String_, sehingga penggunaan slices menggunakan references syntax seperti ini `&[..]`.

```rust
fn main() {
   let name = String::from("Hello Word");
   println!("{}", &name[0..2]); // He
}
```

Kode di atas sama seperti mereferensi ke seluruh koleksi data pada _String _yang mana nilainya adalah “Hello World”, dan kemudian mengambil posisi index dari setiap huruf yang tersusun, huruf “H” posisinya berada index 0, dan index 2 adalah huruf “e”, sehingga hasil keluarannya adalah “He”.

Penggunaan _slice _dapat dengan menggunakan _brackets_ seperti ini `[start_index..last_index]` posisi awal diawali dengan `start_index`, dan di akhir slice adalah `last_index`. 
