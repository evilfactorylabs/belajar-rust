---
title: 'Variables & Mutability'
metaTitle: 'Variables & Mutability'
metaDescription: 'Variables & Mutability'
---

## Variables & Mutability

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

## Perbedaan Variables & Constants

Secara default _constant_ itu memiliki sifat _immutable_, sehingga nilainya paten dan tidak bisa diubah. Untuk membuat _variable constant_ bisa dengan menggunakan _keyword_ `const`.

```rust
const MAX_POINT: i32 = 1000;
```

_Constant_ sangatlah umum, dan bukan hal yang baru. _Constant_ merupakan nilai yang terikat dengan sebuah nama dan bersifat mutlak. Adapun yang membedakan antara variabel dengan _constant_ adalah sebagai berikut :
 - Umumnya _constant_ diawali dengan _keyword_ `const` sedangkan variabel `let`.
 - Variabel dapat menyimpan nilai dari _function_ atau hasil operasi perhitungan, sedangkan _constant_ hanya berupa nilai tetap.

## Shadowing

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
