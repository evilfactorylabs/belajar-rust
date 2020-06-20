## _Variables_ & _Mutability_

Secara _default_ variabel di Rust adalah _immutable_ tidak bisa diubah, untuk membuat sebuah variabel baru cukup menggunakan _keyword_ `let` diawal kemudian nama variabel dan nilainya, contohnya akan seperti ini `let name = "hello";` dan untuk merubah variabel yang _immutable_ menjadi _mutable_ cukup menambahkan _keyword_ `mut` setelah `let` jadinya akan seperti ini `let mut name = "hello";` berikut kode lengkapnya.

```rust
fn main() {
   // immutable variable -> variable yang tidak bisa diubah
   let name = "Adiatma";
   println!("{}", name); // "Adiatma"

   // mutable variable -> variable yang bisa diubah
   let mut change_name = "A";
   println!("{}", change_name); // "A"
   change_name = "Adiatma";
   println!("{}", change_name); // "Adiatma"
}
```

### Perbedaan _Variables_ & _Constants_

Secara default _constant_ itu memiliki sifat _immutable_, sehingga nilainya paten dan tidak bisa diubah. Untuk membuat _variable constant_ bisa dengan menggunakan _keyword_ `const`.

```rust
const MAX_POINT: i32 = 1000;
```

Constant sangatlah umum, dan bukan hal yang baru.

### _Shadowing_

_Shadow_ berbeda dengan konsep _mutable_, kegunaan fitur ini adalah agar kita bisa memiliki banyak nama variabel yang sama, dan _variable_ selanjutnya disebut sebagai _shadow_ atau bayangan dari variabel sebelumnya. Fitur ini berguna jika ingin menimpa nilai yang ada sebelumnya dengan proses selanjutnya.

```rust
fn main() {
   let x = 1;
   let x = x * 2;

   println!("{}", x); // 2
}
```

Contoh di atas terlihat _variabel_ `x` yang sebelumnya bernilai satu kemudian nilai `x` yang sebelumnya akan ditimpa dengan nilai baru. Jika disimpulkan perbedaan _shadow_ dengan _mutable variable_ adalah terletak di cara pakainya. 

_Shadow_ akan menimpa nilai yang lama dengan yang baru, _mutable variable_ untuk menggantikan nilai yang sebelumnya dengan yang baru. Untuk penggunaannya _shadow_ butuh untuk dikombinasikan dengan `let` sehingga berbeda jika dibandingkan dengan _mutable variable_ yang menimpa nilai baru tanpa menggunakan `let`.
