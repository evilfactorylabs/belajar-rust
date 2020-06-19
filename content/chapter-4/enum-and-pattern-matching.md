## _Enum_ & _Pattern Matching_

### _Enum_

_Enum_ adalah fitur yang disediakan untuk membuat beberapa opsi pilihan berdasarkan varian yang ada. Untuk mendefinisikan _enum_ cukup menggunakan _keyword_ **<code>enum</code></strong> seperti dibawah ini.


```
enum IpAddress {
	V4,
	V6
}
```


Untuk mengakses nilai _enum_ bisa dengan cara seperti ini.


```
let IpV4 = IpAddress::V4;
```


Untuk penggunaan _enum_ biasanya cocok dipadukan dengan _pattern matching_ atau pola yang cocok jika diterjemahkan ke bahasa indonesia.


### _Pattern Matching_

Rust punya _control flow operator_ yang cukup _powerful_, yakni dikenal dengan “match” fitur ini bisa digunakan untuk membaca nilai pada sebuah opsi _enum_ dan mengembalikan nilai yang ada berdasarkan kecocokan, untuk lebih lengkapnya berikut adalah contoh kodenya.

_main.rs_


```
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

Kode diatas terlihat sebuah **<code>enum IpAddress<em> </em></code></strong>dan juga sebuah <em>function <code>is_print(ip_address: IpAddress)</code> </em>yang tujuannya untuk mencetak nilai <em>enum</em> dengan sebuah parameter yang diinputkan, jika nilai nya cocok dengan opsi yang ada maka akan dikembalikan nilainya.
