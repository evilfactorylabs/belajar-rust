## _Control Flow_

_Control flow_ adalah cara untuk mengoperasikan kondisi di Rust. Pengkondisian bukanlah hal yang baru dan sudah umum digunakan di setiap bahasa program, berikut adalah beberapa cara untuk melakukan pengkondisian.

### _If Expressions_

Standarnya **<code>if</code></strong> adalah <em>expression</em>, karena <strong><code>if</code></strong> mengevaluasi dan mengembalikan sebuah nilai berdasarkan <em>statement</em> penentu.

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

### _Multiple Conditions_

Selain **<code>if</code></strong> terdapat juga beberapa kondisi lainnya yakni seperti <strong><code>else if</code></strong> dan <strong><code>else</code></strong>. Hal ini umum sama seperti bahasa yang lainnya.

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

### Menggunakan **<code>if</code></strong> di dalam sebuah <strong><code>let</code></strong> <em>statement</em>

Walaupun  **<code>if</code></strong> adalah sebuah <em>expression</em>, tetapi kita masih diperbolehkan untuk menggunakan <strong><code>if</code></strong> di dalam sebuah <em>statement</em>. Dengan syarat tipe data dari <em>statement</em> harus sama, hal ini tujuannya untuk menjaga konsistensi data.

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
