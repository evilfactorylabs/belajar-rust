---
title: 'Cargo'
metaTitle: 'Mengenal Packages, Crates & Modul'
metaDescription: 'Mengenal Packages, Crates, & Module'
---
## Chapter V - Cargo

### _Mengenal Packages, Crates, & Module_

Dalam _development_ software tentunya bertambahnya fitur akan seiring dengan basis kode yang semakin besar, untuk itu Rust punya beberapa konsep yang memungkinkan untuk membuat sebuah komponen yang modular.

* **_Packages_** adalah paket _skeleton_ _project_ yang siap pakai.

* **_Crates_** adalah _root_ dari beberapa module, dan function yang berelasi.

* **_Modules_** & **_use _** untuk mengontrol ruang lingkup dan privasi dari _paths _atau bagian dari sistem _module_.

* **_Paths_** adalah sebuah file yang terisolasi untuk mengelompokan _function_ dan _module_. 


### _Packages & Crates_

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


Pada contoh diatas perintah `cargo new my-project` akan menghasilkan _package_ `my-project` didalamnya terdapat direktori `src` yang berisi file `src/main.rs` dan file `Cargo.toml`  yang berisi informasi paket pustaka yang kita gunakan, mirip seperti `package.json` jika menggunakan _NodeJS_.


### _Modules_

Setelah membahas tentang _package_ dan _crate_ hal selanjutnya adalah _modules,_ kita akan bahas sedikit tentang bagian - bagian dari sebuah _module_. Hal yang pertama adalah _paths_ yang digunakan untuk mengelompokan sebuah fungsi - fungsi dan module dalam sebuah file. Selanjutnya ada **_use_** yang merupakan _keyword_ untuk memanggil atau membawa sebuah _path_ kedalam _scope_ yang berbeda, dan **_pub keyword_** yang akan membuat sebuah _item_ menjadi publik agar dapat diakses di _scope_ yang berbeda.

_Modules_ membuat kita mudah untuk mengorganisasikan sebuah _function_ berdasarkan fungsinya dan dapat digunakan berkali - kali untuk meminimalisir pekerjaan kita.

Oke, untuk selanjutnya kita akan membuat sebuah paket _library_ di Rust, silahkan ketik perintah `cargo new --lib my-lib` yang secara otomatis akan membuat skeleton project yang _support_ untuk menerapkan konsep _library_, dengan _option_ `--lib` file yang di _generate_ dalam direktori `src` adalah `src/lib.rs` berbeda dengan tanpa menggunakan `--lib`.


```
// src/lib.rs
pub mod restaurant {
   pub fn hello(name: String) -> String {
       name
   }
}
```

Pada contoh kode diatas terdapat sebuah _module_ restaurant dengan _function_ `hello()` di dalamnya. _Keyword_ **_pub_** digunakan untuk membuat _module_ tersebut bisa diakses dari scope atau _path_ yang berbeda.

Untuk menguji _module_ restaurant tersebut silahkan buat file `main.rs`, di dalam direktori `src/main.rs` isi dengan kode dibawah ini.


```
// src/main.rs
extern crate my_lib;

use my_lib::restaurant;

fn main() {
   let adi = restaurant::hello(String::from("adi"));
   println!("{}", adi);
}
```


Pada kode diatas kode `extern crate my_lib` bertujuan untuk mengambil _module_ yang berada di _paths_ `lib.rs` yang merupakan root component, kemudian ada _keyword_ `use` tujuannya untuk membawa _module_ restaurant yang ada pada _package_ `my_lib`.


### _Paths_ untuk mereferensi ke sebuah item di dalam _module_

Ada dua _path_ yang terkenal di Rust, yaitu, **_absolute path_** & **_relative path,_** berikut penjelasannya.

*   **_Absolute path_** diawali dengan _keyword crate_ untuk mengambil modul dari _root component_.
*   **_Relative path_** menggunakan _self_ dan _super_ untuk mengambil dari _current module_.

Dari kedua _absolute_ dan _relative_ _paths_ diatas selanjutnya untuk mengakses module secara spesifik bisa menggunakan semicolons `(::)` biar lebih `clear` berikut ada contohnya.

```
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


_Keyword_ **_pub_** yang terdapat di awal _module_ dan _function_ bertujuan untuk mengekspos _module_ dan _function_ agar bisa diakses di luar _scope_, karena secara default module dan function di Rust bersifat _private_.

### Memahami **_use_**
```
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

Pada kode diatas syntax kode `use crate::restaurant;`  digunakan untuk mengambil module restaurant dari **_root module_** dengan menggunakan cara  **_absolute paths._**
