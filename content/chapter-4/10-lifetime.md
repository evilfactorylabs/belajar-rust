---
title: 'Lifetime'
metaTitle: 'This is the title tag of this page'
metaDescription: 'This is the meta description'
---

_Lifetime_ adalah bagian dari fitur _ownership_ yang tersedia di Rust. Sebelumnya jika kalian melihat bahasan tentang _borrowing_ & _references_, dimana _references_ akan tetap valid jika berada didalam ruang lingkupnya, namun jika telah berada diluar _scope_ maka semuanya akan terhapus dari memori. Nah bisa dibilang _lifetime_ adalah _scope_, fitur ini memudahkan kita untuk mengatur _scope_ yang ada di Rust.

Jika bermain dengan _references_ ada hal yang menjadi _problem_ yaitu _dangling references_, masalah ini dikenal dengan referensi yang menggantung, ini terjadi karena ada sebuah nilai yang mereferensi ke sebuah alamat yang tidak valid, di dalam memori. Untuk menangani masalah tersebut Rust menyediakan fitur _lifetime_ yang bisa kita gunakan untuk mengatur ruang lingkup sehingga bisa tetap valid.

_Dangling References_

```rust
fn main() {
   let s;

   {
       let x = 5;
       s = &x
   }
   println!("{}", s);
}
```

```bash
error[E0597]: `x` does not live long enough
 --> main.rs:6:13
  |
6 |         s = &x
  |             ^^ borrowed value does not live long enough
7 |     }
  |     - `x` dropped here while still borrowed
8 |     println!("{}", s);
  |                    - borrow later used here
```


Kode diatas punya dua ruang lingkup yaitu _global scope_, dan _block scope_, _variable_ `s` memiliki masa hidup yang lebih lama jika dibandingkan dengan _variabel_ `x`, kemudian nilai dari _variabel_ `s` di timpa dengan _variable references_ yang mereferensi ke `x`, atau dipinjamkan nilai oleh `x`. Nah masalahnya adalah _variable_ `s` kemudian diakses setelah _variable_ `x` terhapus dari memori, sehingga tidak valid lagi nilainya, ini yang dinamakan _dangling references_.


_Lifetime in function_

_Lifetime_ dapat dibuat dengan menggunakan _keyword_ `'a` dimana `a` mewakili _lifetime_. Jika di implementasi di dalam sebuah _function_ akan seperti ini.

```rust
fn main() {
   let first_letter = "Hallo indonesia";
   let second_letter = "hallo";

   let longest = longest(first_letter, second_letter);
  
   println!("{}", longest); // "Hallo indonesia"
}

fn longest<'a>(first: &'a str, second: &'a str) -> &'a str {
   if first.len() > second.len() {
       first
   } else {
       second
   }
}
```

Terlihat di atas _lifetime_ `'a` mewakili ruang lingkup yang ada di dalam _function longest_ sehingga _scope_ dari dua parameter di atas akan tetap _valid_.
