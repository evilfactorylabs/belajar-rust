---
title: 'Struct'
metaTitle: 'Struct'
metaDescription: 'Struct'
---

## Struct

_Struct_ atau pendek kata dari _structure_ biasanya digunakan untuk custom tipe data, _struct_ sedikit mirip tipe data _object_. Dengan menggunakan _struct_ kita bisa menulis kode dengan paradigma **Object Oriented Programing (OOP)**.

Contoh Tipe Data _Struct_

Untuk inisialisasi tipe data struct bisa menggunakan _keyword_ `struct` dan kemudian nama tipe datanya.

```rust
struct People {
	name: String,
      age: i32,
}
```

Berikut adalah contoh penggunaan `struct`, dengan menyimpan `struct People {}` kedalam sebuah variabel `p`. 

```rust
struct People {
	name: String,
	age: i32,
}

fn main() {
	let p = People {
		name: "Adiatma".to_string(),
		age: 22,
      };

      println!("Hy {},  {}", p.name, p.age); // Adiatma 22
}
```

Pada kode diatas terlihat `struct People` di inisialisasi dan kemudian diisi dengan dua tipe data yaitu `String` dan signed integer 32 bit atau `i32`. Nah kemudian di dalam `function main` terdapat sebuah variabel yang mereferensi ke `struct People` dan menambahkan nilai berdasarkan tipe data pada `struct People`, dan di akhir baris kode variabel `p` telah memiliki tipe data dan nilai dari `struct People` sehingga dapat dibaca dengan menggunakan _dot notation_ untuk mencetak secara spesifik nilai dari `struct` tersebut.

## Method

_Method_ secara syntax terlihat mirip seperti _function_, diinisiasi dengan menggunakan _keyword_ `fn` dan kemudian di depannya ada nama method. Hal yang membedakan terletak pada konteksnya. Method berada di dalam konteks `struct`, seperti contoh dibawah ini.

```rust
struct People {
   first_name: String,
   last_name: String
}

impl People {
  fn get_fullname(&self) -> String {
     format!("{} {}", self.first_name, self.last_name)
  }
}

fn main() {
   let p = People {
       first_name: "Adiatma".to_string(),
       last_name: "Kamarudin".to_string(),
   };
  
   println!("{}", p.get_fullname()) // "Adiatma Kamarudin"
}
```

## Method dengan lebih dari satu parameter

_Syntax_ `Self` pada _method_ akan mereferensi ke `struct People`, atau konteksnya sendiri, sehingga bisa mengakses nilai-nilai yang ada pada _People_.

```rust
impl People {
 fn add_new_identity(&self, other: String) -> String {
   format!("{} {} {}", self.first_name, self.last_name, other)
 }
}
```
