# emacs 覚え書き

## 困ったときは
こういうのは最初に書いておくべきだと思うので最初に書きます．

### 表記について
- `RET`
  - Enter キー
- `SPC`
  - スペースキー
- `DEL`
  - *Backspace* キー
- `C-x`
  - Ctrl を押しながら `x`
- `M-x`
  - Meta（Alt）を押しながら `x`
  - `ESC` を押してから `x`
- `C-M-x`
  - Ctrl と Meta を押しながら `x`
  - `ESC` を押してから `C-x`

### やめるとき
`C-x C-c` をします．

後ですぐ戻ってくるときは `C-z`（または `C-x C-z`）を押して中断することもできます．戻ってくるときはシェルで `fg` などを叩きましょう．別のプロセスを起動した場合などは，`jobs` を叩いてみます．
#_
$ jobs
- [1]+  Stopped                 emacs tutorial.md
#_
`[1]` と表示されているものを再開したければ `%1` などと入力するとよいです．`%emacs` などでもいいでしょう．

`C-z` による中断ではバッファやカーソル位置などが保たれるので，効率的です．
再開の際も，ファイル名を指定する手間を省けるのでよいです．

### 保存したいとき
`C-x C-s` や `C-x s` を押します．
前者は強制，後者は確認つきです．

### 変なコマンドを入力してしまったとき
まだ実行していないのなら，画面下部に `Quit` と表示されるまで `C-g` を叩きます．
*G*et rid of とか *G*et out of などからきているようなこじつけなような．

`ESC ESC ESC` とするのもよいかもしれません．

実行してしまったときは undo コマンド（`C-_` や `C-/`，または `C-x u`）を叩きましょう．`C-x l` を押すと実行したコマンドがわかるので，確認してその後の参考にしましょう．タイプミスから新たなコマンドを覚えられたらおいしいものです．

## 移動コマンド
移動のコマンドは `f`（進行方向へ），`b`（後退方向へ），`a`（開始位置へ），`e`（終了位置へ）に修飾子の `C-` や `M-` がついたものが多いです．
うまく対比しながら覚えていきましょう．
`f` は forward，`b` は backward，`a` は謎（a は最初の文字なので？），`e` は end です．

いま，以下のソースを編集していて，最後の `for` 文の `:` の位置にカーソルがあるとします．
```sample.cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
  size_t n;
  std::cin >> n;

  std::vector<int> a(n);
  for (int &ai: a)
    std::cin >> ai;

  std::sort(a.begin(), a.end());

  for (int ai: a)
    std::cout << ai << std::endl;
}
```

### 文字レベルの移動
#_
-                 [91mv [1mC-b[0m
-  15   for (int a[7mi[0m[7;91;7m:[0m[7m [0ma)
-                   [91m^ [1mC-f[0m
#_
`C-b` で一文字戻り，`C-f` で一文字進みます．
この程度なら矢印キーに頼っても問題ないと思っています．

### 単語レベルの移動
#_
-                [91mv [1mM-b[0m
-  15   for (int [7ma[0mi[7;91;7m:[0m a[7m)[0m
-                     [91m^ [1mM-f[0m
#_
`M-b` で一つ前の語頭へ，`M-f` で一つ後の語末へ移動します．
単語の区切りは C++ の識別子の区切り方とは必ずしも同じではないことには注意です（`std::partial_sum` などについて自分で試してみましょう）．

### 行内の移動
#_
-     [91mv [1mC-a[0m
-  15 [7m [0m for (int ai[7;91;7m:[0m a)[7m [0m
-                      [91m^ [1mC-e[0m
#_
`C-a` で行頭まで戻り，`C-e` で行末まで進みます．

### 文単位の移動
#_
-       [91mv [1mM-a[0m
-  15   [7mf[0mor (int ai[7;91;7m:[0m a)
-  16     std::cout << ai << std::endl;[7m [0m
-                                      [91m^ [1mM-e[0m
#_
`M-a` で文頭へ，`M-e` で文末へ移動します．
`for (...) ...;` と `for (...) {...}` の場合などで若干違いがあります．

### 関数単位の移動
#_
-     [91mv [1mC-M-a[0m
-   5 [7mi[0mnt main() {
-   6   size_t n;
-   7   std::cin >> n;
-   8
-   9   std::vector<int> a(n);
-  10   for (int &ai: a)
-  11     std::cin >> ai;
-  12
-  13   std::sort(a.begin(), a.end());
-  14
-  15   for (int ai[7;91;7m:[0m a)
-  16     std::cout << ai << std::endl;
-  17 }
-     [7m [0m
-     [91m^ [1mC-M-e[0m
#_

`C-M-a` で関数定義の開始位置へ，`C-M-e` で関数定義の終了位置へ移動します．

### ここまでのまとめ
#_
-     [91mv [1mC-M-a[0m
-   5 [7mi[0mnt main() {
-   6   size_t n;
-   7   std::cin >> n;
-   8
-   9   std::vector<int> a(n);
-  10   for (int &ai: a)
-  11     std::cin >> ai;
-  12
-  13   std::sort(a.begin(), a.end());
-  14
-                [91;1mC-b[0m
-       [91mv [1mM-a[0m     [91mv[0m   [91mv [1mM-f[0m
-       [7mf[0mor (int [7ma[0m[7mi[0m[7;91;7m:[0m[7m [0ma[7m)[0m
-            [91;1mM-b[0m [91m^[0m  [91m^[0m
-                  [91;1mC-f[0m
-  15     std::cout << ai << std::endl;[7m [0m
-                                      [91m^ [1mM-e[0m
-  16
-  17 }
-     [7m [0m
-     [91m^ [1mC-M-e[0m
#_
ちょっとごちゃっとしていますが仕方ないでしょう．

### 画面単位の移動
`C-v` で一画面分進み，`M-v` で一画面分戻ります．
`v` は view からきているっぽい．

### 大きな移動
`M-<` でバッファの先頭へ，`M->` でバッファの末尾へ移動します．

### 行番号を指定して移動
`M-g M-g` または `M-g g` で行番号を指定して移動できます．
画面下に `Goto line:` とのプロンプトが表示されるので，整数値を入力します．

### カーソル位置の調整
`C-l` でカーソル位置を基準として画面を再描画します．
連続して `C-l` を押すと一度目は中央，二度目は上端，三度目は下端をカーソルに合わせます．

## 選択・コピペなど
### 選択
`C-SPC` と押すと `Mark set` と表示され，そこから移動することで選択されます．矩形選択については後述します．

選択範囲に対して `M-%` で置換（後述）したり，`M-;` でコメントアウトしたりすることが可能ですので，頭の片隅に入れておきましょう．

### 切り取り
`C-w` を押すと選択された領域（カーソル位置からマーク位置）を切り取ります．
切り取られた文字列はキルリングと呼ばれるところに追加されていきます（キルと呼ばれる操作）．

### 単語の消去
`DEL` で後退方向へ，`C-d` で進行方向へ一文字消去します（キルではない）．

`M-DEL` で後退方向へ，`M-d` で進行方向へ一単語キルします．

`C-k` でカーソル位置から行末までをキルします．

### コピー
`M-w` を押すと選択された領域をコピーします．

### 貼りつけ（ヤンク）
`C-y` を押すとキルリングから文字列を貼り付けます．続けて `M-y` を押すと別の候補をリングから持ってきます．

``ESC ` o u`` で CUA モードを有効にすると `C-x` で切り取り，`C-c` でコピー，`C-v` で貼りつけができるようになりますが，emacs らしさがないですね．

### 矩形選択
`C-x SPC` と押すと `Mark set (rectangle mode)` と表示されて矩形選択できます．

`C-x r t` _string_ `RET` とすると矩形領域に一気に _string_ を挿入したりできます．

## 検索・置換

### 通常の検索
`C-s` や `C-r` を押すと画面下部に `I-search:` や `I-search backward:` とのプロンプトが表示され，検索ができます．`RET` や移動コマンドなどで終了します．

### 正規表現による検索
`M-C-`[`sr`] を押すと `Regexp I-search`\\(?:` backward`\\)?`:` とのプロンプトが表示され，検索ができます．

### 通常の置換
`M-%` を押すとよいです．画面下部のプロンプト（`Query replace:` など）に従って入力しましょう．

### 正規表現による置換
`C-M-%` に割り当てられていますが，効かないかもしれません．
かわりに ``ESC ` e r R`` などをしてみましょう．
成功すれば `Query replace regexp:` などのプロンプトが出てきます．

## コマンドへの引数
emacs のコマンドに対して整数を引数として渡すことができます．
多くの場合はそのコマンドの繰り返し回数を意味します．

渡し方は`C-u` _arg_ [`C-u`] _command_ です．
_arg_ の部分は与えたい引数（`1 2 3` など）に，_command_ はそれを渡されるコマンドに適宜置き換えられるとします．
_arg_ の次の `C-u` は _command_ が数字でなければ省略可能です．

たとえば，`C-u 10 a` と叩くと `aaaaaaaaaa` と入力されます．
これは `M-1 0 a` と叩いても同じ結果が得られます．

## シェルコマンドの実行
`M-!` と叩くと `Shell command:` とのプロンプトが表示されます．
引数を与えた場合（つまり `M-1 M-!` などとした場合）は，その出力がバッファに書き込まれます．

## 複数ファイルの編集・画面の分割
### ファイルの開閉
`C-x C-f` でファイルを開きます．
`C-x C-r` とすると読み取り専用で開けます．

`C-x k` でバッファを消すことができます．

### バッファの移動
`C-x <left>` や `C-x <right>` などで前後のバッファに移動します．
``ESC ` b`` で開かれたメニューから選択することもできます．

### 分割
`C-x 2` や `C-x 3` によって分割できます．

### 移動
`C-x o` によって別の窓に移動できます．

### 終了
`C-x 1` によってアクティブでない窓を閉じます．
`C-x 0` によってアクティブな窓を閉じます．

### スクロール
`C-M-v` によって次の（`C-o` で移動する）窓で `C-v` をするのと同じことができます．

## その他
### 補完
単語の途中で `M-/` を押すと，その prefix を持つ単語をバッファの中から探し，補完します．
繰り返して押すと別の候補を試します．

## コマンドを忘れたら？
`C-h k` に続けてキー列を入力すると，そのキー列に割り当てられたコマンドの説明を見ることができます．

ヘルプの窓を閉じるときは `C-x 1` などを使いましょう．