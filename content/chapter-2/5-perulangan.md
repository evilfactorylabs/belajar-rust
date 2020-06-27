---
title: 'Perulangan'
metaTitle: 'Perulangan'
metaDescription: 'Perulangan'
---

## Perulangan

Dengan baris kode seperti di atas yang terjadi adalah perulangan kode dengan mencetak perintah “again!” berkali-kali tanpa berhenti, atau bisa disebut sebagai _overloop_.

## Loop

Untuk melakukan operasi kode secara berulang salah satunya bisa dengan menggunakan `loop`.

```rust
fn main() {
    loop {
        println!("again!");
    }
}
```

Dengan baris kode seperti di atas yang terjadi adalah perulangan kode dengan mencetak perintah “again!” berkali - kali tanpa berhenti, atau bisa disebut sebagai _overloop_.


## While

Setelah mengenal `loop` selanjutnya adalah `while`, berbeda dengan yang sebelumnya, _while_ akan terus berulang jika kondisinya `true`, jadi kita bisa melakukan operasi yang berulang berdasarkan kondisi yang kita tentukan.

```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{}!", number);

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```

## For

Selanjutnya adalah `for` untuk perulangan, berbeda seperti `while`, `for` biasanya digunakan untuk mengulang beberapa koleksi data, seperti dibawah ini. Lebih efektif dibandingkan dengan `while`.

```rust
fn main() {
   let numbers = [1, 2, 3];

   for number in numbers.iter() {
       println!("{}", number);
   }
}
```

Kode diatas terlihat ada hal yang baru yaitu `iter()`, nah fungsi ini digunakan untuk mengkonversi _variabel_ _numbers_ yang bertipe data _array_ menjadi **_iterator_**. Agar bisa diambil item-itemnya di dalam sebuah perulangan.

