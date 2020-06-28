---
title: 'Cargo'
metaTitle: 'Mengenal Packages, Crates & Modul'
metaDescription: 'Mengenal Packages, Crates, & Module'
---

## Mengenal Packages, Crates, & Module

Dalam _development_ software tentunya bertambahnya fitur akan seiring dengan basis kode yang semakin besar, untuk itu Rust punya beberapa konsep yang memungkinkan untuk membuat sebuah komponen yang modular.

* **_Packages_** adalah paket _skeleton_ _project_ yang siap pakai.

* **_Crates_** adalah _root_ dari beberapa _module_, dan _function_ yang berelasi.

* **_Modules_** & **_use_** untuk mengontrol ruang lingkup dan privasi dari _paths_ atau bagian dari sistem _module_.

* **_Paths_** adalah sebuah file yang terisolasi untuk mengelompokkan _function_ dan _module_. 


## Packages & Crates

_Crates_ adalah kumpulan _modules_, dan _function_ yang saling berelasi di dalam sebuah _package_.


```bash
cargo new my-project
Created binary (application) `my-project` package
ls my-project
Cargo.toml
src
ls my-project/src
main.rs
```

Pada contoh diatas perintah `cargo new my-project` akan menghasilkan _package_ `my-project` didalamnya terdapat direktori `src` yang berisi file `src/main.rs` dan file `Cargo.toml` yang berisi informasi paket pustaka yang kita gunakan, mirip seperti `package.json` jika menggunakan _NodeJS_.

## Modules

Setelah membahas tentang _package_ dan _crate_ hal selanjutnya adalah _modules,_ kita akan bahas sedikit tentang bagian-bagian dari sebuah _module_. Hal yang pertama adalah _paths_ yang digunakan untuk mengelompokkan sebuah fungsi-fungsi dan _module_ dalam sebuah file. Selanjutnya ada **_use_** yang merupakan _keyword_ untuk memanggil atau membawa sebuah _path_ kedalam _scope_ yang berbeda, dan **_pub keyword_** yang akan membuat sebuah _item_ menjadi publik agar dapat diakses di _scope_ yang berbeda.

_Modules_ membuat kita mudah untuk mengorganisasikan sebuah _function_ berdasarkan fungsinya dan dapat digunakan berkali-kali untuk meminimalisir pekerjaan kita.

Oke, untuk selanjutnya kita akan membuat sebuah paket _library_ di Rust, silakan ketik perintah `cargo new --lib my-lib` yang secara otomatis akan membuat _skeleton project_ yang _support_ untuk menerapkan konsep _library_, dengan _option_ `--lib` file yang di _generate_ dalam direktori `src` adalah `src/lib.rs` berbeda dengan tanpa menggunakan `--lib`.


```rust
// src/lib.rs
pub mod restaurant {
   pub fn hello(name: String) -> String {
       name
   }
}
```

Pada contoh kode diatas terdapat sebuah _module_ _**restaurant**_ dengan _function_ `hello()` di dalamnya. _Keyword_ **_pub_** digunakan untuk membuat _module_ tersebut bisa diakses dari _scope_ atau _path_ yang berbeda.

Untuk menguji _module_ _**restaurant**_ tersebut silakan buat file `main.rs`, di dalam direktori `src/main.rs` isi dengan kode dibawah ini.


```rust
// src/main.rs
extern crate my_lib;

use my_lib::restaurant;

fn main() {
   let adi = restaurant::hello(String::from("adi"));
   println!("{}", adi);
}
```

Pada kode diatas, kode `extern crate my_lib` bertujuan untuk mengambil _module_ yang berada di _paths_ `lib.rs` yang merupakan _root component_, kemudian ada _keyword_ `use` tujuannya untuk membawa _module_ _**restaurant**_ yang ada pada _package_ `my_lib`.

_Paths_ untuk mereferensi ke sebuah item di dalam _module_

Ada dua _path_ yang terkenal di Rust, yaitu, **_absolute path_** & **_relative path,_** berikut penjelasannya.

-   **_Absolute path_** diawali dengan _keyword crate_ untuk mengambil modul dari _root component_.
-   **_Relative path_** menggunakan _self_ dan _super_ untuk mengambil dari _current module_.

Dari kedua _absolute_ dan _relative_ _paths_ diatas selanjutnya untuk mengakses _module_ secara spesifik bisa menggunakan _semicolons_ `(::)` biar lebih `clear` berikut ada contohnya.

```rust
// src/lib.rs
pub mod restaurant {
   pub fn hello(name: String) -> String {
       name
   }
}

pub fn call_directly() {
   // Absolute Path
   crate::restaurant::hello();

   // Relative Path
   self::restaurant::hello();
}
```

_Keyword_ **_pub_** yang terdapat diawal _module_ dan _function_ bertujuan untuk mengekspos _module_ dan _function_ agar bisa diakses di luar _scope_, karena secara _default module_ dan _function_ di Rust bersifat _private_.

## Memahami Penggunaan Use

```rust
pub mod restaurant {
   pub fn hello(name: String) -> String {
       name
   }
}

use crate::restaurant;

pub fn call_hello_from_restaurant() {
   restaurant::hello()
}
```

Pada kode diatas, _syntax_ kode `use crate::restaurant;` digunakan untuk mengambil _module restaurant_ dari **_root module_** dengan menggunakan cara **_absolute paths._**
