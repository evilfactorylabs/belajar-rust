## _Struct_

_Struct_ atau pendek kata dari _structure_ biasanya digunakan untuk custom tipe data, _struct_ sedikit mirip tipe data _object_. Dengan menggunakan _struct_ kita bisa menulis kode dengan paradigma **Object Oriented Programing (OOP)**.

### Contoh Tipe Data _Struct_

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

Pada kode diatas terlihat **<code>struct People</code></strong> di inisialisasi dan kemudian diisi dengan dua tipe data yaitu <code>String</code> dan <em>signed integer 32 bit</em> atau <em>i32</em>. Nah kemudian di dalam <em>function</em> <em>main</em> terdapat sebuah variabel yang mereferensi ke <strong><code>struct People</code></strong> dan menambahkan nilai berdasarkan tipe data pada <strong><code>struct People</code></strong>, dan di akhir baris kode variable <code>p</code> telah memiliki tipe data dan nilai dari <strong><code>struct People</code></strong> sehingga dapat dibaca dengan menggunakan <em>dot notation </em>untuk mencetak secara spesifik nilai dari <strong><code>struct</code></strong> tersebut.

### _Method_
_Method_ secara syntax terlihat mirip seperti _function_, diinisiasi dengan menggunakan _keyword_ **<code>fn</code></strong> dan kemudian di depannya ada nama <em>method</em>. Hal yang membedakan terletak pada konteksnya. <em>Method</em> berada di dalam konteks <strong><code>struct</code></strong>, seperti contoh dibawah ini.

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

### _Method_ dengan lebih dari satu parameter

Syntax **<code>Self</code></strong> pada <em>method </em>akan mereferensi ke <strong><code>struct People</code></strong>, atau konteksnya sendiri, sehingga bisa mengakses nilai - nilai yang ada pada <em>People</em>.

```rust
impl People {
 fn add_new_identity(&self, other: String) -> String {
   format!("{} {} {}", self.first_name, self.last_name, other)
 }
}
```
