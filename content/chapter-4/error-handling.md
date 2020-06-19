## _Error Handling_

Faktanya error adalah hal yang paling sering kita jumpai dalam proses _development_. Rust berkomitmen untuk membuat error dengan baik dan mudah dibaca, sehingga ketika sesuatu berjalan tidak sesuai ekspektasi dapat diketahui dengan cepat. Untuk itu rust mengelompokan error dalam dua kategori, yaitu _recoverable_ and _unrecoverable_.


### _Unrecoverable_ _Errors_ dengan menggunakan `panic!`

Sebuah error yang tidak terjangkau atau tidak _coverable_. Untuk kasus ini Rust punya fungsi bawaan yaitu _panic! _yang tujuannya untuk mencetak pesan error.

Standarnya ketika terjadi error `panic!` Rust akan kembali ke _stack_ dan  menghapus data dari _function_ tersebut.

_main.rs_


```
fn main() {
   panic!("panic!!!");
}
```



```
Compiling rust-by-example v0.1.0 (/Users/adiatma/Work/rust-by-example)
    Finished dev [unoptimized + debuginfo] target(s) in 0.30s
     Running `target/debug/rust-by-example`
thread 'main' panicked at 'panic!!!', src/main.rs:2:5
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace.
```



### _Recoverable_ _Errors_ dengan menggunakan `Result`

Berbeda dengan error sebelumnya, Rust juga memiliki pesan error yang _recoverable_ sehingga kita bisa buat pemetaan errornya dengan baik.

Berikut  adalah cara untuk membuat error `result` di Rust.


```
enum Result<T, E> {
   Ok(T),
   Err(E)
}
```


`T` dan `E` adalah _generic type_ parameter, `T` itu merepresentasikan tipe data, dan `E` merepresentasikan error.

Selanjutnya kita akan coba buat program sederhana, dengan menggunakan _file system _untuk membuka file `hello.txt` di dalam direktori, jika file tersebut tidak ditemukan maka kita akan menampilkan pesan error.

_main.rs_


```
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



```
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


Selanjutnya kita akan coba untuk refactor kode sebelumnya dengan mengecek tipe error.

_main.rs_


```
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


Pada kode sebelumnya menggunakan **<code>match</code></strong>, nah setelah di <em>refactor</em> <em>keyword</em> <strong><code>match</code></strong> tadi sudah tidak terlihat, karena sudah digantikan oleh <em>function</em> <code>unwrap_or_else()</code> yang kemudian menggunakan <em>closure</em> untuk melihat error lebih lanjut, dan jika file <code>hello.txt</code> tidak ditemukan maka file baru akan dibuat.

 

Selain `unwrap_or_else() `kalian juga bisa menggunakan `unwrap()` saja atau digantikan dengan `expect()`.

_main.rs_


```
use std::fs::File;

fn main() {
   File::open("hello.txt").expect("File not found!");
}
```

```
thread 'main' panicked at 'File not found!: Os { code: 2, kind: NotFound, message: "No such file or directory" }', src/libcore/result.rs:1188:5
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace.
```
