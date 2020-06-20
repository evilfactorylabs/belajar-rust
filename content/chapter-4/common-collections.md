## _Common Collections_

Rust punya tipe data _collections_, yang merupakan kumpulan atau koleksi data dalam berbagai tipe dan nilai. Ada beberapa tipe data _collections_ yang cukup populer di Rust. Berikut adalah beberapa daftarnya.

- _Vector_ mirip seperti _array_ tetapi berbeda.
- _Strings_ digunakan untuk menyimpan tipe data _character_.
- _Hash Map_ memungkinkan kita untuk menyimpan nilai yang terasosiasi dengan _key_ tertentu.

### _Vector_

`Vec<T>` yang dikenal sebagai _vector_, sebuah tipe data yang dapat menyimpan lebih dari satu nilai kedalam _single_ data struktur yang nilainya dapat ditambahkan atau dirubah.

Untuk meng inisiasi vector baru, cukup dituliskan seperti ini `Vec::new().`


```rust
fn main() {
   let numbers: Vec<i32> = Vec::new();
}
```

Vector juga dapat diinisiasi dengan standar nilai _default _caranya dengan menggunakan syntax seperti ini `vec![]` berikut adalah contohnya.


```rust
fn main() {
   let numbers: Vec<i32> = vec![1, 2, 3];
}
```


Untuk mengupdate dan menambahkan nilai baru, _vector_ punya _method _bawaan yaitu `push.`


```rust
fn main() {
   let mut numbers: Vec<i32> = Vec::new();
   numbers.push(1);
}
```


Untuk bisa menggunakan `push` tambahkan _keyword_ **<code>mut</code></strong> setelah <em>keyword</em> <strong><code>let</code></strong> tujuannya untuk membuatnya menjadi <em>mutable</em>.

Cara membaca elemen nilai yang berada didalam sebuah _vector_, bisa dengan menggunakan method `get` seperti ini `numbers.get(index)` berikut adalah contoh detailnya.


```rust
fn main() {
   let mut numbers: Vec<i32> = Vec::new();
   numbers.push(1);
   match numbers.get(0) {
       Some(v) => println!("{}", v),
       None => println!("index not found!"),
   } // 1
}
```

Atau bisa juga dengan cara yang seperti ini, dengan menggunakan _references_.

```rust
fn main() {
   let mut numbers: Vec<i32> = Vec::new();
   numbers.push(1);

   println!("{}", &numbers[0]); // 1
}
```

Jika ingin digunakan dengan cara di _loop_ bisa juga jadinya seperti ini.

```rust
fn main() {
   let mut numbers: Vec<i32> = Vec::new();
   numbers.push(1);

   for number in numbers {
       println!("{}", number);
   } // 1
}
```

Selain itu bisa juga dengan menggunakan _mutable references._

```rust
fn main() {
   let mut numbers: Vec<i32> = Vec::new();
   numbers.push(1);

   for number in &mut numbers {
       *number += 10;
       println!("{}", number); // output -> 11
   }
}
```

### _String_

Kita dapat menyimpan text _UTF-8 encoded_ ke dalam tipe data _String. _Rust hanya punya satu tipe _string_ yang tersedia di inti bahasanya, yakni `str` yang dikenal dengan _string slice_ yang biasanya terlihat seperti ini `&str` istilahnya _borrowed_ _string_.

Rust juga memiliki tipe data `String` untuk kemudahan pengolahan data _mutable_ dengan menggunakan _string_. Sehingga bisa menyimpan _encode_ yang berbeda - beda dengan mudah. 

Untuk penggunaanya sedikit mirip dengan apa yang bisa dilakukan oleh _vector_. Untuk inisiasi cukup dengan cara seperti ini `String::new()` dan untuk konversi tipe data _string literal_ menjadi `String` bisa dengan menggunakan _method_ `to_string()`, seperti contoh dibawah ini.

```rust
fn main() {
   let text = "Hello World";
   let convert_text_to_string = text.to_string();
   println!("{}", convert_text_to_string); // "Hello World"
}
```

Selain itu bisa juga membuat string dengan nilai yang bawaan atau istilahnya _initial content_ contohnya seperti ini.

```rust
fn main() {
   let hello = String::from("Hello");   
   println!("{}", hello);
}
```

Untuk merubah data atau memperbaharui bisa dengan menambahkan _keyword_ **<code>mut</code></strong> setelah <strong><code>let</code></strong> seperti contoh berikut.

```rust
fn main() {
   let mut hello = String::from("Hello");
   hello.push_str(" World");
   println!("{}", hello); // "Hello World"
}
```

Kemudian juga bisa menggabungkan data dengan menggunakan _function_ `format!`  seperti ini.

```rust
fn main() {
   let hello = String::from("Hello");
   let world = String::from("World");
   let hello_world = format!("{} {}", hello, world);
   println!("{}", hello_world); "Hello World"
}
```

### _HashMap_

Untuk menyimpan koleksi data dengan _key_ yang terasosiasi bisa menggunakan _HashMap_. Syntaxnya seperti ini `HashMap&lt;K, V>` yaitu K mewakili _key_ dan V adalah _value_.

Untuk menggunakan _HashMap_ kita butuh untuk mengambilnya dari _standard library_, bisa dengan menggunakan **<code>use</code></strong> seperti contoh dibawah.

```rust
use std::collections::HashMap;

fn main() {
   let mut scores = HashMap::new();

   scores.insert(String::from("Team A"), 10);
   scores.insert(String::from("Team B"), 11);

   println!("{:?}", scores); // {"Team B": 11, "Team A": 10}
}
```

Cara mengakses _value _pada _HashMap _bisa menggunakan _method_ `get` dan _key_ dimasukan sebagai parameter, lengkapnya seperti dibawah ini.

```rust
use std::collections::HashMap;

fn main() {
   let mut scores = HashMap::new();

   scores.insert(String::from("Team_A"), 10);
   scores.insert(String::from("Team_B"), 11);

   println!("{:?}", scores.get(&String::from("Team_A"))); // Some(10)
}
```

Kemudian tahapan selanjutnya dari _HashMap _adalah cara untuk memperbaharui nilai jika _key_ tersebut tidak memiliki nilai.

```rust
use std::collections::HashMap;

fn main() {
   let mut scores = HashMap::new();

   scores.insert(String::from("Team_A"), 10);

   scores.entry(String::from("Team_A")).or_insert(11);
   scores.entry(String::from("Team_B")).or_insert(12);

   println!("{:?}", scores);
}
```

Berikut adalah keluarannya.

```bash
{"Team_A": 10, "Team_B": 12}
```

Terlihat _key_ `Team_A` tetap menggunakan nilai yang sebelumnya, dan _key_ `Team_B` ditambahkan nilai baru.

Selanjutnya kita akan coba membuat sebuah text yang kemudian akan dipecah berdasarkan _white space_ lalu setiap kata yang sama akan disimpan di dalam _HashMap_ dan dihitung jumlahnya.

```rust
use std::collections::HashMap;

fn main() {
   let text = "hari ini saya ngantuk saya pengen tidur karena ngantuk";

   // please find a couple text and count it.
   let mut result = HashMap::new();

   for t in text.split_whitespace() {
       let count = result.entry(t).or_insert(0);
       *count += 1;
   }

   println!("{:?}", result);
}
```

Berikut adalah keluarannya.

```bash
{"karena": 1, "hari": 1, "saya": 2, "tidur": 1, "ini": 1, "pengen": 1, "ngantuk": 2}
```

Sebelumnya terdapat sebuah _variable_ `text` yang diisi dengan tipe data _string_. Nah, kemudian ada _mutable variable_ dengan nama _result_ yang tujuannya sih untuk menampung data _string_ nya, di tahap selanjutnya  kita akan memotong text berdasarkan _white space_ dengan menggunakan function `split_whitespace()`  yaitu fungsi bawaan di Rust untuk memotong berdasarkan _whitespace_ dan kemudian di dalam perulangan tersebut kita _define_ lagi _variable_ `count` yang isinya untuk mengupdate _HashMap_ _key_ berdasarkan text elemen, kemudian ada function `or_insert()` tujuannya untuk mengambil _value_ berdasarkan _index_, yang _default_ nilainya adalah 0, kemudian kita menggunakan tanda bintang `(*)` agar bisa mengakses nilai dari _count_ secara langsung, nah hal ini disebut dengan _dereferences_.
