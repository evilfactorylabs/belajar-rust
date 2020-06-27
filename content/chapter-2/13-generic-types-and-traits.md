---
title: 'Generic Types & Traits'
metaTitle: 'This is the title tag of this page'
metaDescription: 'This is the meta description'
---

Generic adalah cara untuk membuat tipe data menjadi lebih _flexible_, sehingga mudah untuk dipakai, berulang-ulang dan terhindar dari masalah _duplicate_.

Menghapus duplikasi dengan mengekstraknya menjadi sebuah _function_

Sebelum jauh membahas tentang _generic type_, ada baiknya untuk melihat sebuah studi kasus sederhana yaitu mengurangi _duplication_ dengan merubahnya menjadi _function_ yang dapat dipakai berulang-ulang.

Kita akan coba membuat sebuah program sederhana untuk mencari angka terbesar dari sebuah koleksi data _number_, berikut adalah contoh kodenya.

```rust
fn main() {
   let numbers = vec![1, 2, 3, 4, 5];

   let mut largest = numbers[0];

   for number in numbers {
       if number > largest {
           largest = number
       }
   }

   println!("{}", largest); // 5
}
```

_Variable_ _numbers_ di atas adalah tipe data _vector_ yang menampung daftar angka dari 1 sampai 5, kemudian setelahnya ada _mutable variable_ yang akan mengambil isi _index_ pertama dari _variable numbers_, kemudian kita coba mengambil semua _item_ yang ada di _variable numbers_ dengan menggunakan _loop_ dan didalam perulangan tersebut kita menggunakan `if` _statement_ untuk mengecek _item number_, jika lebih besar dari _mutable variable largest_ maka akan dimasukan sebagai nilai baru di _variable largest_.

Pertanyaannya bagaimana jika kita ingin menggunakan fungsi yang sama di tempat yang berbeda, tentunya hal yang paling mudah adalah mengekstrak fungsi tadi kedalam sebuah fungsi.

```rust
fn largest(list: &[i32]) -> i32 {
   let mut largest = list[0];

   for &number in list {
       if number > largest {
           largest = number
       }
   }

   largest
}

fn main() {
   let numbers = vec![1, 2, 3, 4, 5];

   let result = largest(&numbers);

   println!("{}", result);
}
```

Setelah refactor dengan mengekstrak sebuah operasi pencarian angka terbesar didalam sebuah koleksi data _number_, sekarang fungsi _largest_ menjadi sangat flexible dan dapat dipakai berkali - kali tanpa perlu menulis ulang kodenya.

Fungsi _largest_ memiliki sebuah parameter yang mana merepresentasikan nilai konkret dari slice `i32` kedalam sebuah _function_.

Pertanyaan yang terjadi selanjutnya adalah bagaimana jika kita ingin menggunakan fungsi tersebut untuk tipe data yang berbeda, nah untuk menjawab hal tersebut perlu untuk memahami _generic types_.

_Generic Data Types_

Masih terkait studi kasus sebelumnya dimana ada sebuah _function_ yang bisa mengevaluasi sebuah _integer_ dan kemudian mengembalikan angka yang paling besar yang terdapat pada sebuah koleksi data.

Misalnya fungsi tadi kita ingin bisa digunakan untuk tipe data lainnya, yaitu untuk evaluasi sebuah tipe data _string_.

Dengan menggunakan _generic type_ hal tersebut memungkinkan, untuk menggunakan tipe data generic didalam sebuah _function_ cukup dengan merubah fungsi sebelumnya menjadi seperti ini `fn largest<T>(list: &[T]) -> T {}` sehingga pada penggunaannya dapat disesuaikan tipe datanya.

```rust
fn largest<T>(list: &[T]) -> T {
   let mut largest = list[0];

   for &item in list {
       if item > largest {
           largest = item
       }
   }

   largest
}

fn main() {
   let numbers = vec![10, 1, 2];
   let largest_number = largest(&numbers);
   println!("{}", largest_number);

   let words = vec!["hello", "adiatma"];
   let largest_words = largest(&words);
   println("{}", largest_words);
}
```

```bash
   Compiling rust-by-example v0.1.0 (/Users/adiatma/Work/rust-by-example)
error[E0423]: expected function, found macro `println`
  --> src/main.rs:20:5
   |
20 |     println("{}", largest_words);
   |     ^^^^^^^ help: use `!` to invoke the macro: `println!`

error[E0369]: binary operation `>` cannot be applied to type `T`
 --> src/main.rs:5:17
  |
5 |         if item > largest {
  |            ---- ^ ------- T
  |            |
  |            T
  |
  = note: `T` might need a bound for `std::cmp::PartialOrd`

error: aborting due to 2 previous errors

Some errors have detailed explanations: E0369, E0423.
For more information about an error, try `rustc --explain E0369`.
error: could not compile `rust-by-example`
```

Loh, kok error?

Pada _capture_ error diatas yang di _mention_ adalah `std::cmp::PartialOrd` yang bisa disebut _trait_. 

Saat ini error state yang terjadi diatas adalah karena fungsi _largest_ tidak bekerja untuk setiap kemungkinan `T` type, karena kita ingin membandingkan tipe data `T` yang terdapat didalam _function_. Untuk perbandingan kita perlu untuk menggunakan `std::cmp::PartialOrd`.

_Generic Type in Struct_

Tipe umum atau _generic type_ bisa juga digunakan di _struct_, gambarnya seperti contoh dibawah.

```rust
struct Point<T> {
   x: T,
   y: T
}

fn main() {
   let integer = Point { x: 1, y: 2 };
   let float = Point { x: 1.2, y: 2.1 };

   println!("{} {}", integer.x, float.y); // 1 2.1
}
```

_In enum definition_

Selain bisa digunakan di `struct`, tipe data _generic_ juga bisa digunakan di _enum_.

```rust
enum Result<T, E> {
   Ok(T),
   Err(E),
}
```

_In Method Definition_

```rust
struct Point<T> {
   x: T,
   y: T
}

impl<T> Point<T> {
   fn print_x(&self) -> &T {
       &self.x
   }
}

fn main() {
   let integer = Point { x: 1, y: 2 };
   let float = Point { x: 1.2, y: 2.1 };

   println!("{} {} {}", integer.x, float.y, integer.print_x()); // 1 2.1 1
}
```

_Multi Generic Types with Method_

```rust
struct Point<T, U> {
   x: T,
   y: U
}

impl<T, U> Point<T, U> {
   fn mixup<V, W>(self, other: Point<V, W>) -> Point<T, W> {
       Point {
           x: self.x,
           y: other.y
       }
   }
}

fn main() {
   let p1 = Point { x: 1, y: 2 };
   let p2 = Point { x: "Hello", y: "h" };
  
   let p3 = p1.mixup(p2);

   println!("{} {}", p3.x, p3.y); // 1 h
}
```

_Traits_

Sebuah _trait_ dapat meminta kepada kompilator Rust untuk bagian dari _functionality type_ dapat di _share_ dengan tipe data lainnya. Kita bisa menggunakan _trait_ untuk _share behaviour_ dengan cara yang abstrak. Juga kita bisa menggunakan _trait_ untuk mengikat spesifikasi dari _generic type _yang bisa untuk setiap tipe data.

_Trait_ mirip seperti sebuah _interface_ pada bahasa pemrograman lainnya. Seperti sebuah _interface_ pada sebuah _object_, sebuah _trait_ dapat dibagikan ke beberapa _method_ sehingga punya referensi tipe yang sama. Berikut adalah contoh penggunaan _trait_ pada sebuah _method_.

```rust
trait Summary {
   fn summarize(&self) -> String;
}

struct Article {
   title: String,
   author: String
}

impl Summary for Article {
   fn summarize(&self) -> String {
       format!("{} author of {}", self.author, self.title)
   }
}

fn main() {
   let first_article = Article {
       title: String::from("Buku Rust Bahasa Indonesia"),
       author: String::from("Adiatma")
   };

   println!("{}", first_article.summarize()); // Adiatma author of Buku Rust Bahasa Indonesia
}
```
