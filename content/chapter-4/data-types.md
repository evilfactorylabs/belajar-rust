## Data _Types_

Setiap nilai di _Rust_ memiliki tipe data tertentu, Rust punya dua _subset_ tipe data yaitu **_scalar_** dan **_compound_**.

### _Scalar_

_Scalar_ merepresentasikan nilai tunggal, ada empat tipe data _scalar_ yaitu _integer_, _floating-point_, _numeric operations_, _booleans_, dan _char_.

#### _Integer_

Tipe data _integer_ dibagi menjadi dua yaitu **_signed_** dan **_unsigned_**. _Signed integer_ diidentifikasi dengan _keyword_ `i`  dan _unsigned integer_ ditandai dengan  `u`. berikut adalah tabelnya.

<table>
  <tr>
   <td>Length
   </td>
   <td>Signed
   </td>
   <td>Unsigned
   </td>
  </tr>
  <tr>
   <td>8-bit
   </td>
   <td>i8
   </td>
   <td>u8
   </td>
  </tr>
  <tr>
   <td>16-bit
   </td>
   <td>i16
   </td>
   <td>u16
   </td>
  </tr>
  <tr>
   <td>32-bit
   </td>
   <td>i32
   </td>
   <td>u32
   </td>
  </tr>
  <tr>
   <td>64-bit
   </td>
   <td>i64
   </td>
   <td>u64
   </td>
  </tr>
  <tr>
   <td>128-bit
   </td>
   <td>i128
   </td>
   <td>u128
   </td>
  </tr>
  <tr>
   <td>arch
   </td>
   <td>isize
   </td>
   <td>usize
   </td>
  </tr>
</table>

Perbedaan _Signed_ dan _Unsigned_, _Signed_ dapat menyimpan number yang positif dan negatif, _Unsigned_ hanya menyimpan nilai yang positif.

#### _Floating Point_

Rust punya tipe data primitif yaitu _floating point numbers_, tipe data ini ditandai dengan `f32` dan `f64` yang mana adalah `32 bit` dan `64 bit`.

```rust
fn main() {
	let x = 2.0; // f64 default
	let c: f32 = 3.2; // f32
}
```

#### _Numeric Operations_

Rust juga mendukung operasi matematika, misalnya untuk operasi penjumlahan, pembagian, dan pengurangan.

```rust
fn main() {
    // addition
    let addition = 5 + 10;
    // subtraction
    let subtraction = 95.5 - 4.3;
    // multiplication
    let multiplication = 4 * 30;
    // division
    let division = 56.7 / 32.2;
    // modulo
    let modulo = 43 % 5;
}
```

#### _Booleans_

Mirip seperti tipe data pada umumnya, tipe data ini yaitu _boolean_ memiliki dua nilai yaitu `true` dan `false`.

#### _Char_

_Char_ adalah salah satu tipe data primitif yang tersedia di Rust. Tipe data ini merepresentasikan _ASCII (Accented letters)_. 

```rust
let name = "Adiatma";
```

### _Compound_

Tipe data _compound_ dapat mengoleksi atau mengumpulkan nilai-nilai ke dalam satu tipe data, ada dua tipe data _compound_ primitif yang diketahui oleh Rust yaitu _tuples_ dan _array_.

#### _Tuple_

_Tuple_ adalah cara untuk mengelompokkan tipe data tertentu ke dalam satu bentuk kelompok seperti dibawah ini.

```rust
let tup: (i32, f32, u8) = (500, 6.4, 1); 
```

#### _Array_

_Array_ adalah tipe data koleksi namun berbeda dengan _tuple_, _array_ di Rust sedikit berbeda dengan _array_ pada bahasa program umumnya, tipe data _array_ di Rust punya ukuran yang _absolute_ atau pasti, contohnya seperti dibawah.


```rust
let numbers: [i32; 2] = [1, 2];
```

Penggunaan _array_ sangat bermanfaat jika kita ingin menggunakan alokasi data di _stack_ memori.

## _Function_

Untuk membuat sebuah _function_ baru cukup diawali dengan _keyword_ `fn` yang kemudian depannya nama _function_ contohnya seperti dibawah ini.

```rust
fn hello() {
 // statements or expressions here;
}
```

Kemudian _conventional style_ untuk penamaan _function_ menggunakan _snake case_.

### Pengelompokan tipe _function_

Rust sengaja mengelompokan _function_ berdasarkan fungsi dan kegunaannya. Sehingga mudah untuk dikenali dan dibedakan. Berikut adalah beberapa kelompok _function_ di Rust.


#### _Normal Function_

Adalah fungsi biasa yang tidak memiliki parameter dan tidak mengembalikan nilai, bisa dibilang ini _naked function_ atau fungsi yang telanjang.


#### _Function Parameters_

Fungsi dengan sebuah parameter nilai yang disisipkan kedalam _function_ untuk diolah lebih lanjut. contohnya seperti ini.

```rust
fn hello(name: &str) {
   println!("{}", name);
}
```

#### _Function Bodies Contain **Statements**_ & **_Expressions_**

Rust adalah _expression-based language_, mungkin di bahasa program yang lain hal ini tidak menjadi sebuah perbedaan, di Rust berbeda, untuk melihat perbedaannya kita coba untuk pahami dulu apa itu _statements_ dan _expression_.

**_Statements_** adalah sebuah instruksi untuk melakukan aksi dan tidak mengembalikan sebuah nilai. **_Expressions_** mengevaluasi dan mengembalikan sebuah nilai.

Contoh _statement_ `let x = 1;` ini adalah _statement_, dan _expression_ `{ let x = 3; x + 1 }`. **_Statement_** biasanya ditandai dengan _semicolon_ (`;`) di akhir _statement_, dan _expression_ tidak memiliki _semicolon_.


#### _Function with Return Values_

Fungsi yang bisa mengembalikan sebuah nilai, fungsi ini ditandai dengan _keyword_ `->` setelah nama fungsi, contohnya seperti dibawah ini.

```rust
fn add(x: i32, y: i32) -> i32 {
   x + y
}
```

Nah contoh diatas adalah fungsi sederhana untuk menjumlahkan x dan y, yang kembaliannya adalah tipe data _signed integer 32 bit_.
