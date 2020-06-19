---
title: 'Konfigurasi Dasar'
metaTitle: 'This is the title tag of this page'
metaDescription: 'This is the meta description'
---

## Git

Karena kita menggunakan GitHub untuk menyimpan kode-kode kita, kamu memerlukan [Git](https://git-scm.com) di mesin kamu. Jika kamu datang dari Subversion ataupun Mercurial, kamu bisa baca tulisan [Migrating to Git](https://git-scm.com/book/en/v2/Git-and-Other-Systems-Migrating-to-Git).

## Kunci GPG

Untuk meyakinkan segala aktivitas terkait _development_ dilakukan oleh kamu, kamu bisa melakukan "sign" di setiap "commit" yang kamu buat. Sebelumnya, kamu harus memiliki kunci GPG terlebih dahulu, dan kunci tersebut harus disubmit ke akun GitHub kamu.

### Membuat kunci GPG

Silahkan pasang terlebih dahulu [GPG CLI tools](https://www.gnupg.org/download/) berdasarkan sistem operasi yang kamu gunakan, lalu buka terminal dan eksekusi perintah berikut untuk membuat kunci baru

```bash
$ gpg --full-generate-keys
```

Langsung tekan enter jika kamu males baca tulisan yang ada dilayar sehingga pilihan yang kamu pilih mengarah ke pilihan "default".

Lalu tulis namamu dan alamat email `@evilfactory.id` kamu. Untuk bagian comment, bisa dikosongkan atau bisa isi iseng atau buat gaya-gayan, misal seperti si ini:

```bash
$ gpg --list-keys

pub   rsa4096 2019-11-03 [SC]
      B0B63B776767DFAA669D06715CA1E57AFBF76F90
uid           [unknown] ri7nz (S A C R 3 G E O M E T R Y) <ri7nz@evilfactory.id>
sub   rsa4096 2019-11-03 [E]
```

Bagian `(S A C R 3 G E O M E T R Y)` adalah comment. Lalu tekan enter, terus kamu akan disuruh membuat passphrase. Passphrase ini seperti password yang intinya buat mengamankan. Jika sudah, kamu bisa lihat kunci GPG kamu dengan perintah ini:

```bash
$ gpg --export --armor emailmu@evilfactory.id
```

Keluaran dari perintah tersebut bisa kamu salin dan tempel ke halaman SSH and GPG Keys di GitHub [disini](https://github.com/settings/keys).

### Sign commit

Agar ketika "commit" kamu ingin melakukan "sign", kamu bisa menggunakan perintah berikut:

```bash
$ git commit -S -m
```

Ya, parameter `-S` adalah kuncinya. Jika kamu ingin melakukan sign untuk **setiap commit** tanpa perlu membawa parameter `-S` secara eksplisit, kamu bisa atur di berkas `~/.gitconfig` jika kamu ingin mengaturnya secara global.

> Bagaimana jika saya ingin melakukan "sign" dengan email yang berbeda? Misal, yang satu email kantor yang satu email evilfactorylabs?

Kamu bisa menggunakan konfigurasi yang dilakukan oleh Fariz:

```bash
# ~/.gitconfig

[user]
	name = Fariz Rizaldy
	email = farizrizaldy@icloud.com
	signkey = 292E8F8794194AA8
[commit]
	gpgsign = true

[includeIf "gitdir:~/Developer/evilfactorylabs/"]
  path = .gitconfig-evil
```

Yang mana "default" nya adalah di bagian `[user]` dan bila CWD berada di `~/Developer/evilfactorylabs`, maka gunakan konfigurasi yang ada di berkas `.gitconfig-evil` yang isinya kurang lebih seperti ini:

```
# ~/.gitconfig-evil

[user]
  name = Fariz Rizaldy
  email = fariz@evilfactory.id
  signkey = 48515FA6F194FADD
```

Untuk mendapatkan `signkey`, kamu bisa ambil menggunakan perintah berikut:

```bash
$ gpg --list-keys --keyid-format LONG
```

Bagian `pub rsa(2048|4096)/<signkey>` lah yang harus kamu salin.

### Verify

Jika kamu sudah melakukan commit, kamu bisa cek dengan perintah berikut:

```bash
$ git log --show-signature
```

Jika keluarannya kurang lebih seperti ini (contoh):

```bash
commit 04c8ec5496c43d1a033c1689471e288afb35c747
gpg: Signature made Mon Dec  9 21:24:24 2019 WIB
gpg:                using RSA key BFB886801B6C42B53A8A97FF48515FA6F194FADD
gpg:                issuer "fariz@evilfactory.id"
gpg: Good signature from "Fariz Rizaldy <fariz@evilfactory.id>" [ultimate]
Author: Fariz Rizaldy <fariz@evilfactory.id>
Date:   Mon Dec 9 21:24:24 2019 +0700

    ci: add dockerignore
```

Berarti kamu sudah melakukannya dengan benar! Dan kita bisa mem-verifikasi bahwa commit tersebut benar-benar dilakukan di mesinmu dan olehmu

![Contoh](https://i.imgur.com/9OVRvX6.png)

Gambar diatas adalah contoh ketika commit yang dilakukan benar-benar dilakukan olehmu di mesinmu.

## Code Editor

Diharapkan menggunakan [VSCodium](https://github.com/VSCodium/vscodium) (VSCode without Microsoft), [Vim](https://www.vim.org/), ataupun [Emacs](https://www.gnu.org/software/emacs/). Editor lain seperti Sublime ataupun dari keluarga Jetbrains pun tidak apa-apa, asal bukan hasil _crack_ dan juga menghormati berkas [`.editorconfig`](https://editorconfig.org/) yang akan dibahas di halaman selanjutnya.

## Lingkungan

Direkomendasikan menggunakan lingkungan UNIX-like (BSD, GNU/Linux, Darwin, dll). Jika menggunakan Windows bisa menggunakan [Cygwin](https://www.cygwin.com/) ataupun [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) agar lingkungan _development_ konsisten diberbagai mesin.
