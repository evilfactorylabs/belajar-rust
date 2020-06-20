---
title: 'Error Handling'
metaTitle: 'This is the title tag of this page'
metaDescription: 'This is the meta description'
---

Faktanya _error_ adalah hal yang paling sering kita jumpai dalam proses _development_. Rust berkomitmen untuk membuat _error_ dengan baik dan mudah dibaca, sehingga ketika sesuatu berjalan tidak sesuai ekspektasi dapat diketahui dengan cepat. Untuk itu Rust mengelompokan _error_ dalam dua kategori, yaitu _recoverable_ and _unrecoverable_.

_Unrecoverable_ _Errors_ dengan menggunakan `panic!`

Sebuah _error_ yang tidak terjangkau atau tidak _coverable_. Untuk kasus ini Rust punya fungsi bawaan yaitu _panic!_ yang tujuannya untuk mencetak pesan _error_.

Standarnya ketika terjadi _error_ `panic!` Rust akan kembali ke _stack_ dan menghapus data dari _function_ tersebut.

```rust
fn main() {
   panic!("panic!!!");
}
```

```bash
Compiling rust-by-example v0.1.0 (/Users/adiatma/Work/rust-by-example)
    Finished dev [unoptimized + debuginfo] target(s) in 0.30s
     Running `target/debug/rust-by-example`
thread 'main' panicked at 'panic!!!', src/main.rs:2:5
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace.
```

_Recoverable_ _Errors_ dengan menggunakan `Result`

Berbeda dengan _error_ sebelumnya, Rust juga memiliki pesan _error_ yang _recoverable_ sehingga kita bisa buat pemetaan _error_-nya dengan baik.

Berikut adalah cara untuk membuat _error_ `result` di Rust.

```rust
enum Result<T, E> {
   Ok(T),
   Err(E)
}
```

`T` dan `E` adalah _generic type_ parameter, `T` itu merepresentasikan tipe data, dan `E` merepresentasikan _error_.

Selanjutnya kita akan coba buat program sederhana, dengan menggunakan _file system_ untuk membuka file `hello.txt` di dalam direktori, jika file tersebut tidak ditemukan maka kita akan menampilkan pesan error.

```rust
use std::fs::File;
fn main() {
   let file = File::open("hello.txt");
   Let file = match file {
       Ok(file) => file,
       Err(error) => {
           panic!("Problem: {:?}", error);
       },
   };
}
```

```bash
warning: unused variable: `file`
 --> src/main.rs:5:9
  |
5 |     let file = match file {
  |         ^^^^ help: consider prefixing with an underscore: `_file`
  |
  = note: `#[warn(unused_variables)]` on by default

    Finished dev [unoptimized + debuginfo] target(s) in 0.24s
     Running `target/debug/rust-by-example`
thread 'main' panicked at 'Problem: Os { code: 2, kind: NotFound, message: "No such file or directory" }', src/main.rs:8:13
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace.
```

Selanjutnya kita akan coba untuk _refactor_ kode sebelumnya dengan mengecek tipe _error_.

```rust
use std::fs::File;
use std::io::ErrorKind;

fn main() {
   File::open("hello.txt").unwrap_or_else(|error| {
       if error.kind() == ErrorKind::NotFound {
           File::create("hello.txt").unwrap_or_else(|error| {
               panic!("{:?}", error);
           })
       } else {
           panic!("{:?}", error);
       }
   });
}
```

Pada kode sebelumnya menggunakan `match`, nah setelah di _refactor_, _keyword_ `match` tadi sudah tidak terlihat, karena sudah digantikan oleh _function_ `unwrap_or_else()` yang kemudian menggunakan _closure_ untuk melihat _error_ lebih lanjut, dan jika file `hello.txt` tidak ditemukan maka file baru akan dibuat.

Selain `unwrap_or_else()` kalian juga bisa menggunakan `unwrap()` saja atau digantikan dengan `expect()`.

```rust
use std::fs::File;

fn main() {
   File::open("hello.txt").expect("File not found!");
}
```

```bash
thread 'main' panicked at 'File not found!: Os { code: 2, kind: NotFound, message: "No such file or directory" }', src/libcore/result.rs:1188:5
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace.
```
