---
title: '.editorconfig'
metaTitle: 'This is the title tag of this page'
metaDescription: 'This is the meta description'
---

Agar kode yang ditulis konsisten disetiap mesin di level kode editor, kamu bisa menggunakan aturan `.editorconfig` berikut:

```
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[{*.json,*.yml}]
indent_size = 2
indent_style = space
```

Berkas `.editorconfig` bisa disimpan di level project ataupun global.
