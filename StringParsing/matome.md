# AOJ 構文解析

## 簡単な文字列処理
構文解析器を書いたりする必要がないものたちです．
STL の使い方の練習など．
- [0105 Book Index](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/0105)
- [0151 Grid](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/0151)
- [0350 Irreducible Fractionalization](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/0350)
- [1602 ICPC Calculator](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1602)
- [2369 CatChecker](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2369)
- [2680 LR](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2680)
  - 分類が難しい．構文解析的な難しさはないはず．

## 簡単な構文解析
簡単な構文解析器を書く練習です．
Python などの `eval` で殴れるレベルです．
- [0109 Smart Calculator](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/0109)
- [0110 Alphametic](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/0110)

## 簡単な構文解析 2
やること自体は単純ですが，ほんの少し面倒なものたちです．
適宜，構造体などを定義して実装するとよいかもしれません．
構文解析器の返り値は必ずしも整数値である必要はないことを覚えておきましょう．

ここでいう簡単とは，定跡に沿って実装すればそのまま Accept される，程度の意味です．
- [0264 Finite Field Calculator](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/0264)
- [0291 Mystery of an Ancient Ruin](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/0291)
- [1001 Binary Tree Intersection And Union](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1001)
- [1012 Operations with Finite Sets](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1012)
- [1102 Calculation of Expressions](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1102)
  - `std::complex<int>` が未規定というのは知っていますか？
- [1145 The Genome Database of All Space Life](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1145)
- [1188 Hierarchical Democracy](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1188)
  - 他の問題と少し見た目が違います．
- [1244 Molecular Formula](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1244)
- [1314 Matrix Calculator](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1314)
  - ある種のハラスメントで*簡単*と言っていますが，実際簡単に見えてきます．
- [1346 Miscalculation](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1346)
- [2255 6/2(1+2)](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2255)
- [2348 Testing Circuits](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2348)
  - やることは簡単ですが，与えられる文字数が大きいです．
  - 計算効率のよくない構文解析器を書きがちな人は注意がいるかもしれません．
- [2435 Zero Division Checker](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2435)
- [2570 Shipura](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2570)
  - ちょっと難しそう
- [2584 Broken Cipher Generator](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2584)
  - ちょっと傾向が違う．
- [2596 Points and Lines](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2596)
  - 幾何かな？
- [2613 Unordered Operators](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2613)
  - これすき．
- [2731 Shifting a Matrix](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2731)
- [2740 Rooted Tree for Misawa-san](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2740)
- [2883 Proof of Knowledge](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2883)

## 全探索をする構文解析
与えられた入力に対して代入を行い，パースを何度も行うタイプの問題です．
- [1037 Midnight Teatime](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1037)
- [1155 How can I satisfy thee? Let me count the ways...](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1155)
- [2401 Equation](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2401)

## Python で楽をするタイプの構文解析
C++ で頑張ろうとすると面倒そうに見えますが，Python で正規表現 (`re`) が使えたりすると殴りやすい問題です．
この手の問題を見極められると嬉しいかもしれません．
- [1078 SAT-EN-3](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1078)
- [1282 Bug Hunt](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1282)
- [2438 YAML](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2438)
- [2523 Time Complexity](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2523)
- [3002 Factorization](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/3002)

## 難しめの構文解析
処理すべき文字列が，必ずしも与えられた文法に沿っていない場合，少々つらさが増します．
特に，与えられた文字列に自分で手を加えたものを処理する必要がある場合，バグを埋め込みやすいので注意です（適当に手を加えた文字列が正しい文法に沿っているかきちんと確認をしましょう）．
- [1022 Indian Puzzle](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1022)
- [2428 Lost Number](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2428)
- [2512 Ononokomachi's Edit War](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2512)

## やや面倒な構文解析
構文解析以外に面倒な要素が含まれていて面倒ですが，落ち着いてやれば平気です．
- [1087 Dimensional Analysis](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1087)
- [1233 Equals are Equals](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1233)
  - 多項式ライブラリが欲しくなりますか？
  - それはそれで結構ですが，抜け道を考えてみるのもアリです．
- [1293 Common Polynomial](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1293)
- [1300 Chemist's Math](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1300)
- [1620 Boolean Expression Compressor](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1620)

## 面倒な構文解析
やりたくない．やらないことはないんですが．
- [1031 Simple GUI Application](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1031)
- [2365 Memory Leak](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2365)
- [2421 Markup language has Declined](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2421)

## 面白い構文解析
やりたい．大変かもしれませんが苦痛ではないはずです．
- [1322 ASCII Expression](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/1322)
- [2437 DNA](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2437)
- [2643 AI](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2643)

## 難しい構文解析
知識が必要そうな問題です．天才にとってはそんなことないかもしれません．基本的には区間 DP です．
- [2067 Reading Brackets in English](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2067)
- [2710 An Equiation in a Mine](https://onlinejudge.u-aizu.ac.jp/challenges/search/categories/2710)

## To-Do
えびちゃんの課題です．
- none