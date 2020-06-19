## _Variables_ & _Mutability_

Secara _default_ _variabel_ di Rust adalah _immutable_ tidak bisa diubah, Untuk membuat sebuah _variabel_ baru cukup menggunakan _keyword_ **<code>let</code></strong> diawal kemudian nama variabel dan nilainya, contohnya akan seperti ini <strong><code>let name = "hello";</code></strong> dan untuk merubah variabel yang <em>immutable</em> menjadi <em>mutable</em> cukup menambahkan <em>keyword</em> <strong><code>mut</code></strong> setelah <strong><code>let</code></strong> jadinya akan seperti ini <strong><code>let mut name = "hello";</code></strong> berikut kode lengkapnya.

_main.rs_
```
fn main() {
   // immutable variable -> variable yang tidak bisa diubah
   let name = "Adiatma";
   println!("{}", name); // "Adiatma"

   // mutable variable -> variable yang bisa diubah
   let mut change_name = "A";
   println!("{}", change_name); // "A"
   change_name = "Adiatma";
   println!("{}", change_name); // "Adiatma"
}
```

### Perbedaan _Variables_ & _Constants_

Secara default _constant_ itu memiliki sifat _immutable_, sehingga nilainya paten dan tidak bisa diubah. Untuk membuat _variable constant _bisa dengan menggunakan _keyword_ **<code>const</code></strong>.

```
const MAX_POINT: i32 = 1000;
```

Constant sangatlah umum, dan bukan hal yang baru.

### _Shadowing_

_Shadow_ berbeda dengan konsep _mutable_, kegunaan fitur ini adalah agar kita bisa memiliki banyak nama _variabel_ yang sama, dan _variable_ selanjutnya disebut sebagai _shadow_ atau bayangan dari variabel sebelumnya. Fitur ini berguna jika ingin menimpa nilai yang ada sebelumnya dengan proses selanjutnya.

_main.rs_
```
fn main() {
   let x = 1;
   let x = x * 2;

   println!("{}", x); // 2
}
```

Contoh di atas terlihat _variabel_ x yang sebelumnya bernilai satu kemudian nilai x yang sebelumnya akan ditimpa dengan nilai baru. Jika disimpulkan perbedaan _shadow_ dengan _mutable variable _adalah terletak di cara pakainya. 

_Shadow_ akan menimpa nilai yang lama dengan yang baru, _mutable variable_ untuk menggantikan nilai yang sebelumnya dengan yang baru. Untuk penggunaannya _shadow _butuh untuk dikombinasikan dengan **<code>let</code></strong> sehingga berbeda jika dibandingkan dengan <em>mutable variable</em> yang menimpa nilai baru tanpa menggunakan <strong><code>let.</code></strong>
