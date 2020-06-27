---
title: 'Control Flow'
metaTitle: 'This is the title tag of this page'
metaDescription: 'This is the meta description'
---

_Control Flow_

_Control flow_ adalah cara untuk mengoperasikan kondisi di Rust. Pengkondisian bukanlah hal yang baru dan sudah umum digunakan di setiap bahasa program, berikut adalah beberapa cara untuk melakukan pengkondisian.

_If Expressions_

Standarnya `if` adalah _expression_, karena `if` mengevaluasi dan mengembalikan sebuah nilai berdasarkan _statement_ penentu.

```rust
fn main() {
   if true {
       hello("Adiatma");
   }
}

fn hello(name: &str) {
   println!("{}", name);
}
```

_Multiple Conditions_

Selain `if` terdapat juga beberapa kondisi lainnya yakni seperti `else if` dan `else`. Hal ini umum sama seperti bahasa yang lainnya.

```rust
fn main() {
   let number = 10;
  
   if number > 5 {
      println!("more than five"); // output: more than five
   } else if number <= 5 {
       println!("number is five or lower than five");
   } else {
       println!("Other")
   }
}
```

Menggunakan `if` di dalam sebuah `let` _statement_

Walaupun `if` adalah sebuah _expression_, tetapi kita masih diperbolehkan untuk menggunakan `if` di dalam sebuah _statement_. Dengan syarat tipe data dari _statement_ harus sama, hal ini tujuannya untuk menjaga konsistensi data.

```rust
fn main() {
    let n = 10;

    let number_condition = if n <= 5 {
        5
    } else {
        10
    };

    println!("The value of number is: {}", number_condition); // 10
}
```
