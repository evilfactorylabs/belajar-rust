---
title: 'Enum & Pattern Matching'
metaTitle: 'Enum & Pattern Matching'
metaDescription: 'Enum & Pattern Matching'
---

## Enum

_Enum_ adalah fitur yang disediakan untuk membuat beberapa opsi pilihan berdasarkan varian yang ada. Untuk mendefinisikan _enum_ cukup menggunakan _keyword_ **`enum`** seperti dibawah ini.

```rust
enum IpAddress {
	V4,
	V6
}
```
Perbedaan yang mendasari antara _enum_ dengan _struct_ yaitu, _enum_ dapat menyimpan data dengan variasi tipe data berbeda. Untuk mengakses nilai _enum_ bisa dengan cara seperti ini.

```rust
let IpV4 = IpAddress::V4;
```

Untuk penggunaan _enum_ biasanya cocok dipadukan dengan _pattern matching_ atau pola yang cocok jika diterjemahkan ke bahasa indonesia.

## Pattern Matching

Rust punya _control flow operator_ yang cukup _powerful_, yakni dikenal dengan “match” fitur ini bisa digunakan untuk membaca nilai pada sebuah opsi _enum_ dan mengembalikan nilai yang ada berdasarkan kecocokan, untuk lebih lengkapnya berikut adalah contoh kodenya.

```rust
#[derive(Debug)]
enum IpAddress {
   V4,
   V6
}

fn ip_print(ip_address: IpAddress) -> i32 {
   match ip_address {
       IpAddress::V4 => 1,
       IpAddress::V6 => 2,
       _ => 0
   }
}

fn main() {
   println!("{:?} {:?}", ip_print(IpAddress::V4), ip_print(IpAddress::V6));
}
```

Kode diatas terlihat sebuah `enum IpAddress` dan juga sebuah _function_ `is_print(ip_address: IpAddress)` yang tujuannya untuk mencetak nilai _enum_ dengan sebuah parameter yang diinputkan, jika nilai nya cocok dengan opsi yang ada maka akan dikembalikan nilainya.
