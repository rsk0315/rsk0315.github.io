# 気付きにくいC++未定義動作たち
ある程度はC++を書いた経験があるが，詳しい仕様などは知らない人を読者層として想定して書くつもりです．
多くの競プロerは当てはまると思います．

ここに根拠とする規格を書く．

## まずは用語から
「処理系規定」「未規定」「未定義」などの語の区別を知らず，ひとまとめに「環境依存」などと言っている人をそれなりに見かけるので，その定義から確認します．

ここに定義を書く．

## 書きたいこと
- `std::out_of_range`
- `__foo`
- `_GLIBCXX_DEBUG`
- `-fsanitize=undefined`
- Named requirements
  - `Compare`
- overflow
- `printf`や`scanf`の指定子
- order of evaluation
