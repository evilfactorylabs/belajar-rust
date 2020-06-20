## _Ownership_

Rust punya fitur utama yang dikenal dengan "ownership". Fitur _ownership_ merupakan sistem untuk mengatur alokasi memori di Rust, sehingga penggunaan memori menjadi maksimal. Rust tidak memiliki _garbage collector_. karena Rust kompilator akan mengecek kode kita di _runtime_ saat proses kompilasi kode berlangsung.

Untuk memahami konsep _ownership_ kita perlu paham dulu bagian dari memori yang dikenal dengan _heap_ dan _stack_.

### _Heap_ & _Stack_

_Stack_ dan _heap_ memiliki struktur yang berbeda, _stack_ menyimpan data yang diketahui, biasanya ukurannya harus pasti dan tidak berubah-ubah, sehingga akses data di _stack_ lebih cepat, berbeda dengan _heap_ yang butuh alokasi tempat yang cukup besar di memori karena kepastian datanya bisa berubah-ubah.

### _Ownership Rules_

*   Nilai di Rust memiliki _variable_ _owner_ sendiri atau pemilik data tunggal.
*   Hanya ada satu _owner_.
*   _Owner_ hanya akan valid di dalam ruang lingkupnya, jika berada diluar maka tidak akan valid lagi.

### _References_ & _Borrowing_

Setelah membahas tentang _ownership_ di Rust, selanjutnya ada bahasan tentang “_References_ & _Borrowing”_ hal ini sangat berkaitan dengan materi _ownership_ atau bisa dibilang bagian dari _ownership_.

Kenapa Rust menggunakan istilah _references_ & _borrowing_, karena konsep ini menjelaskan tentang perbedaan antara pemilik dan peminjam. Syaratnya data hanya punya satu pemilik tunggal, jika datanya beralih ke tangan yang lain, peminjam hanya berhak untuk meminjam sementara, dan tidak memiliki akses full terhadap apa yang dipinjam, sehingga hanya akan ada satu pemilik data yang tersimpan di memori, hal ini mencegah _race condition_ dalam perubahan data.

References itu standarnya _immutable_, syntax nya seperti ini `&T`. Di Rust bisa merubah sifat _references_ dari _immutable_ ke _mutable_, istilah ini dikenal dengan _mutable references_, syntax nya seperti ini `&mut T` cukup menambahkan `mut`.

```rust
fn main() {
   let x = 1;
   let b = &x; // references
   let mut a = 2;
   let c = &mut a; // mutable references

   println!("{} {}", b, c); // 1 2
}
```
