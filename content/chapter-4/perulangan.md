## Perulangan

Seperti bahasa program pada umumnya tentunya setiap bahasa punya fitur untuk perulangan, di Rust ada beberapa cara untuk melakukan perulangan yakni bisa dengan menggunakan **<code>loop<em>, while </em></code></strong>dan <strong><code>for<em>.</em></code></strong>

### _Loop_

Untuk melakukan operasi kode secara berulang salah satunya bisa dengan menggunakan **<code>loop</code></strong>.


```
fn main() {
    loop {
        println!("again!");
    }
}
```


Dengan baris kode seperti di atas yang terjadi adalah perulangan kode dengan mencetak perintah “again!” berkali - kali tanpa berhenti, atau bisa disebut sebagai _overloop_.


### _While_

Setelah mengenal **<code>loop</code></strong> selanjutnya adalah <strong><code>while</code></strong>, berbeda dengan yang sebelumnya, <em>while</em> akan terus berulang jika kondisinya <code>true</code>, jadi kita bisa melakukan operasi yang berulang berdasarkan kondisi yang kita tentukan.

_main.rs_


```
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{}!", number);

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```



### _For_

Selanjutnya adalah **<code>for</code></strong> untuk perulangan, berbeda seperti <strong><code><em>while</em></code></strong>, <strong><code><em>for</em></code></strong> biasanya digunakan untuk mengulang beberapa koleksi data, seperti dibawah ini. Lebih efektif dibandingkan dengan <strong><code><em>while</em></code></strong>.

_main.rs_


```
fn main() {
   let numbers = [1, 2, 3];

   for number in numbers.iter() {
       println!("{}", number);
   }
}
```

Kode diatas terlihat ada hal yang baru yaitu `iter()`, nah fungsi ini digunakan untuk mengkonversi _variabel_ _numbers_ yang bertipe data _array_ menjadi **_iterator_**. Agar bisa diambil item - itemnya di dalam sebuah perulangan.
