# 気付きにくい C++ 未定義動作たち
ある程度は C++ を書いた経験があるが，詳しい仕様などは知らない人を読者層として想定して書くつもりです．
多くの競プロ-er は当てはまると思います．

@[url:http://github.com/cplusplus/draft/papers]@ で見られるドラフトを参考にして書いていますが，あくまでドラフトなので改訂されたりすることはあります．

出典を示す際は，章番号やそれに準ずる番号は版によって前後しうるので，タグ？（[intro.scope] とか [defns.argument.macro] のようなもの．正しい呼び方を知りたい）を利用しようと思っています．

## まずは用語から
「処理系定義」「未規定」「未定義」などの語の区別を知らず，ひとまとめに「環境依存」などと言っている人をそれなりに見かけるので，その定義から確認します．

### 処理系定義
処理系定義の動作（implementation-defined behavior）は，well-formed なプログラム構成および正しいデータによる動作で，処理系に依存するものです．各々の処理系のドキュメントによって．その動作は規定されます（[defns.impl.defined]）.

### 未規定
未規定の動作（unspecified behavior）は，well-formed なプログラム構成および正しいデータによる動作，処理系に依存するものです．どのような動作かをドキュメントで示す必要はありません（[defns.unspecified]）.

### 未定義
未定義動作（undefined behavior）は，規格書が何の要求もしない動作です．
規格書で明示的に定義が示されていない場合や，プログラム構成やデータが正しくない場合も未定義動作であるとされます．

未定義動作として許容される動作は次のようなものです．（これはコンパイラ目線で読むといいかもしれません．）
- そのような状況を完全に無視して予期しない結果を招かせる
- コンパイル時・実行時に環境に応じて文書化されたように動作する（診断メッセージはなくてよい）
- コンパイルや実行を終了させる（診断メッセージあり）

（[defns.undefined]）

ざっくり言うと，
- 処理系定義・未規定はセーフ
- 未定義はアウト
- 「環境依存」という分類はない

です．

未定義動作を起こしうるコードがたまたま期待どおりに動いた場合でも，それは「コードが正しい」ことを示す理由にはならないことも覚えておきましょう．

## 例（処理系定義・未規定）
例を挙げておくと分かりやすいかもしれないので例を挙げます．
具体的に何が「処理系定義」で何が「未規定」かは区別して覚えておく必要は無いと思います．

- `sizeof(int)` などの値は処理系定義です（[expr.sizeof]）
- `E1 >> E2` において `E1` が負の場合の値は処理系定義です（[expr.shift]）
- `char` が符号つきかどうかは処理系定義です（[dcl.type.simple]）
- `"foo" == "foo"` が `true` かどうかは未規定です（[lex.string]）
- 標準ライブラリの関数が `inline` かどうかは未規定です（[global.functions] および [member.functions]）
- `std::complex` を `float`，`double`，`long double` 以外で実体化した場合の動作は未規定です（[complex.numbers]）


## 例（未定義）
未定義動作の例を挙げます．

何がどうまずいか考えてもらうため，先にコードと実行例を示してから解説を入れる形式にします．
*未定義動作*なので，手元で同じコードを実行した場合に必ずしも同じ動作が再現するとは限らないことに注意してください．同じ環境であってもコンパイラのバージョンなどによって動作が変わることもあります．

### 配列境界外参照
#`[sample.cpp]
#include <cstdio>

int main() {
  int a[5]={31, 41, 59, 26, 53}, x=58;
  for (int i=0; i<=5; ++i)
    if (a[i] == x) return !printf("Found!\n");
}
#`
#_
$ g++ -O2 sample.cpp
$ ./a.out
- Found!
#_
これは比較的有名な例ですね．以下のように説明されます．
1. `a[5]` にアクセスすることはないと仮定できる
2. `i` が `5` に到達する前にループを抜けることになる
3. `return !printf("Found!\n");` を実行できる

配列の境界を超えてアクセスするようなコードを実行した場合に必ず Segfault が起きると思っている人はいませんか？ それは勘違いであると早めに気付いておきましょう．

### 識別子
#`[sample.cpp]
#define _STDIO_H
#include <cstdio>

int main() {
  printf("Hello, world.\n");
}
#`

#_
$ g++ sample.cpp
- In file included from [01msample.cpp:2[m:
- [01m/usr/include/c++/8.2.0/cstdio:98:11:[m [01;31merror: [m‘[01m::FILE[m’ has not been declared
-    using ::[01;31mFILE[m;
-            [01;31m^~~~[m
- [01m/usr/include/c++/8.2.0/cstdio:99:11:[m [01;31merror: [m‘[01m::fpos_t[m’ has not been declared
-    using ::[01;31mfpos_t[m;
-            [01;31m^~~~~~[m
- ...
- [01msample.cpp:[m In function ‘[01mint main()[m’:
- [01msample.cpp:5:3:[m [01;31merror: [m‘[01mprintf[m’ was not declared in this scope
-    [01;31mprintf[m("Hello, world.\n");
-    [01;31m^~~~~~[m
- [01msample.cpp:5:3:[m [01;36mnote: [m‘[01mprintf[m’ is defined in header ‘[01m<cstdio>[m’; did you forget to ‘[01m#include <cstdio>[m’?
- [01msample.cpp:3:1:[m
- +[32m#include <cstdio>[m
-
- [01msample.cpp:5:3:[m
-    [01;36mprintf[m("Hello, world.\n");
-    [01;36m^~~~~~[m
#_

ただの Hello, world ですが，コンパイルが通りません．
`_STDIO_H` を `#define` したことによる影響なのは明白ですが，なぜこれがよくないかを説明できますか？

（「インクルードガードとして使われているから」と思った人へ：もし `#define STDIO_H_` などと書いていた場合でも，処理系によっては同じエラーが起こりうると思いますか？）

もう一つ例を出します．
#`[sample.cpp]
#include <cstdio>

int foo() { return 42; }
int _Z3foov;

int main() {
  printf("%d\n", foo());
}
#`
#_
$ g++ sample.cpp
- /tmp/ccMfblBf.s: Assembler messages:
- /tmp/ccMfblBf.s:42: Error: symbol `_Z3foov' is already defined
#_
一見 `_Z3foov` という名前は再定義されていないように見えますが，なぜこうなるかわかりますか？

具体的には，以下の識別子は処理系に予約されていて，処理系が自由に使っていい（プログラマが使わないと仮定していい）ことになっています（[lex.name]）．
- アンダースコアで始まる（`_.*`）
  - これはグローバル名前空間のみ
- 連続するアンダースコアを含む（`.*__.*`）
- アンダースコアに続く大文字で始まる（`_[A-Z].*`）


今回の場合は，`_STDIO_H` は内部的にインクルードガードに使われていて，`_Z3foov` は関数 `foo(int)` の内部的な名前（mangled name）として使われているため，このようなエラーが起きています．

仮にこれらの用途で使われない識別子であったとしても，予約された識別子を敢えて使おうとするのは賢明な判断ではないでしょう．

ところで，`_USE_MATH_DEFINES` のような識別子も同様で，これらを `#define` した場合の動作は（C++ の規格的な意味で）未定義です．
コンパイラはそれによって規格に従わない動作をする（プログラマが自由に使えるはずの` M_PI` などの識別子を `#define` する）ことができます．
@[url:https://qnighy.hatenablog.com/entry/2015/05/22/225558]@ に詳しい記述があります．

### 比較関数
#`[sample.cpp]
#include <cstdio>
#include <vector>

int main() {
  int a[512]={};
  std::sort(a, a+512, [](int, int) { return true; });
}
#`
#_
$ g++ sample.cpp
$ ./a.out
- Segmentation fault (core dumped)
#_

単純なソートですが，Segfault になってしまったのはなぜでしょう？
`std::sort`（など）では比較関数は以下の性質（strict weak ordering）を満たす必要があります（[alg.sorting]）．
- すべての `a` について `!(a < a)`
- `a < b` ならば `!(b < a)`
- `a < b` かつ `b < c` ならば `a < c`

今回はこれを満たさなかったため，予期しない結果となりました．
最適化オプションをつけると，Segfault になってくれずにプログラムが終了しなくなったりします．

### オーバーフロー
#`[sample.cpp]
#include <cstdio>

int main() {
  int x;
  scanf("%d", &x);
  if (x < 0 && -x < 0) printf("-2147483648\n");
}
#`
#_
$ g++ -O3 sample.cpp
$ ./a.out <<< -2147483648  # no output
#_
今は `int` は 32-bit で負数は 2 の補数で表現する処理系を仮定します．

`-(-2147483648)` を手順どおりに計算しようとすると，以下のように `-2147483648` になってしまいます．
1. `0x80000000` をビット反転して `0x7FFFFFFF` を得る
2. `0x7FFFFFFF` に `1` を足して `0x80000000` を得る

そのため，上の状況では `x < 0` も `-x < 0` も `true` となるように思われますね．
実際は，*符号つき*整数型がオーバーフローしたときの動作は未定義となっています（[expr.pre]）．
そのため，今回はそうなる状況は無視されて何も出力せずに終了するコードが生成されました（`x` が他のどの値でも `x < 0 && -x < 0` は `true` になりえないことに注意）．

`-S` で生成されるアセンブラのコードを見てもそうなっていることが確認できます．
#_
$ g++ -S -O3 sample.cpp
#_
#`[sample.s]
	.file	"sample.cpp"
	.text
	.section	.rodata.str1.1,"aMS",@progbits,1
.LC0:
	.string	"%d"
	.section	.text.startup,"ax",@progbits
	.p2align 4,,15
	.globl	main
	.type	main, @function
main:
.LFB12:
	.cfi_startproc
	subq	$24, %rsp
	.cfi_def_cfa_offset 32
	movl	$.LC0, %edi
	xorl	%eax, %eax
	leaq	12(%rsp), %rsi
	call	scanf
	xorl	%eax, %eax
	addq	$24, %rsp
	.cfi_def_cfa_offset 8
	ret
	.cfi_endproc
.LFE12:
	.size	main, .-main
	.ident	"GCC: (GNU) 8.2.0"
	.section	.note.GNU-stack,"",@progbits
#`

なお，$n$ビットの*符号なし*整数型は $2^n$ を法とした演算を行うため，実質的にオーバーフローしない（その型で表せる範囲を超えた値にならない）とされています（[basic.fundamental]）．


## 対策
未定義なコードを書くプログラマが悪いとはいえ，いくらかは処理系に検知してほしいものですよね．

### `_GLIBCXX_DEBUG`
GCC においては，`_GLIBCXX_DEBUG` を `#define` することでデバッグモードでコンパイルしてくれます．

この識別子は，前述の通り処理系に予約されたものです．
C++ の規格で定められた機能ではないので，別のコンパイラでこれを行いたいときは，サポートされているか確認しましょう．
GCC ではちゃんと @[url:https://gcc.gnu.org/onlinedocs/libstdc++/manual/using_macros.html]文書化@ されています．

たとえば，以下のように教えてくれます．
#`[sample.cpp]
// #define _GLIBCXX_DEBUG  /* ソース内で #define してもいい */
#include <cstdio>
#include <vector>

int main() {
  std::vector<int> x{1, 2};
  printf("%d\n", x[2]);
}
#`
#_
$ g++ -D_GLIBCXX_DEBUG sample.cpp  # コンパイル時に #define してもいい
$ ./a.out
- /usr/include/c++/8.2.0/debug/vector:417:
- Error: attempt to subscript container with out-of-bounds index 2, but 
- container only holds 2 elements.
- 
- Objects involved in the operation:
-     sequence "this" @ 0x0x7ffc383c92c0 {
-       type = std::__debug::vector<int, std::allocator<int> >;
-     }
- Aborted (core dumped)
#_
`std::vector` の代わりに `__gnu_debug::vector`（`std::__debug::vector`？）を使って様々なチェックを行ってくれます．
少々分かりにくいかもしれませんが，エラーにならないよりはマシですね．

上のソートの例のような場合でも活躍してくれます．
#_
$ ./a.out
- /usr/include/c++/8.2.0/bits/stl_algo.h:4864:
- Error: comparison doesn't meet irreflexive requirements, assert(!(a < a)).
-
- Objects involved in the operation:
-     instance "functor" @ 0x0x7ffdd0ed71b0 {
-       type = main::{lambda(int, int)#1};
-     }
-     iterator::value_type "ordered type" {
-       type = int;
-     }
- Aborted (core dumped)
#_

### `.at(i)`
添字のアクセスに関しては，規格で定められた別の方法が存在します．
#`[sample.cpp]
#include <cstdio>
#include <vector>

int main() {
  std::vector<int> x{1, 2};
  printf("%d\n", x.at(2));
}
#`
#_
$ g++ sample.cpp
$ ./a.out
- terminate called after throwing an instance of 'std::out_of_range'
-   what():  vector::_M_range_check: __n (which is 2) >= this->size() (which is 2)
- Aborted (core dumped)
#_
これはこれでわかりにくい上，`[i]` で書かれたコードにはたくさん変更を加える必要があるため，あまり適してはいない気もします．
ただ，規格で定められているという意味では安心かもしれません．

### `-fsanitize=undefined`
GCC では実行時の検出機能も用意されています（お使いの `g++` がこれに対応していないならバージョンアップすることをオススメします）．
オーバーフローや配列境界外参照などを検出してくれます．

#`[sample.cpp]
#include <cstdio>

int main() {
  int x, a[123456]={};
  scanf("%d", &x);
  printf("%d\n", x*x);
  printf("%d\n", x<<x);
  printf("%d\n", a[x]);
}
#`
#_
$ ./a.out
- [1mubsan-overflow.cpp:6:9:[1m[31m runtime error: [1m[0m[1msigned integer overflow: 123456 * 123456 cannot be represented in type 'int'[1m[0m
- -1938485248
- [1mubsan-overflow.cpp:7:19:[1m[31m runtime error: [1m[0m[1mshift exponent 123456 is too large for 32-bit type 'int'[1m[0m
- 123456
- [1mubsan-overflow.cpp:8:21:[1m[31m runtime error: [1m[0m[1mindex 123456 out of bounds for type 'int [123456]'[1m[0m
- [1mubsan-overflow.cpp:8:9:[1m[31m runtime error: [1m[0m[1mload of address 0x7ffc8771b670 with insufficient space for an object of type 'int'[1m[0m
- [1m0x7ffc8771b670:[1m[30m note: [1m[0mpointer points here[1m[0m
-  00 00 00 00  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  d3 08 40 00 00 00 00 00  45 c4 14 cd
- [1m[32m              ^ [1m[0m
- 0
#_

インストールの方法によっては，実行時に以下のようなエラーが出ることがあります．
#_
$ ./a.out
- ./a.out: error while loading shared libraries: libubsan.so.1: cannot open shared object file: No such file or directory
#_
その場合は `sudo find / -name libubsan.so.1 2>/dev/null` などをして見つかったディレクトリを `LD_LIBRARY_PATH` に追加しましょう．
#`[~/.bashrc]
# for example
export LD_LIBRARY_PATH=$HOME/lib64/${LD_LIBRARY_PATH:+:}$LD_LIBRARY_PATH
#`

## 書きたいこと
- order of evaluation
- `P + J` が $[0, n]$ を超えるだけで UB になるやつ
- 何もしない無限ループをコンパイラがいいように利用できるやつ
