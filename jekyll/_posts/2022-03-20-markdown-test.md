---
title: テスト + メモ
layout: post
author: rsk0315
---

kramdown + highlight.js + \\(\\KaTeX\\)。

## \\(\\TeX\\) 記法

\\(\\TeX\\) 記法の `_` は `\_` で書くのがよさそう。

| input              | output           |
|--------------------|------------------|
| `$a$`              | $a$              |
| `\(a_i\)`          | \(a_i\)          |
| `\\(a_i\\)`        | \\(a_i\\)        |
| `\\(a _ib_ j\\)`   | \\(a _ib_ j\\)   |
| `\\(a \_ib\_ j\\)` | \\(a \_ib\_ j\\) |

### テーブル

ところで、emacs の Markdown mode で、テーブル部分で tab を押すと整形してくれるっぽい。

```markdown
|left|right|
|:-|-:|
|<|>|
```

これが

```markdown
| left | right |
|:-----|------:|
| <    |     > |
```

こう。押し続けると次の行を追加してくれたりもする。

## コードブロック

コピーボタンをつけた。

```rust
fn main() {
    println!("hello world");
}
```

[例のターミナル用の](https://zenn.dev/rsk0315/articles/2221298693dcb1)も書いた。

```terminal
% echo 1
1
```

```terminal-marker
%> 
%< 
%> echo foo; \
echo 'bar
baz'
%< foo
bar
baz
%> cat <<EOS
qux
EOS
%< qux
```

## 引用ブロック

> ```
> foo
> ```
> bar
> > baz
> > ``` 
> > qux
> > ```
> > ```terminal
> > % quux
> > corge
> > ```

## その他

チェックボックスがあるときの点の有無が GitHub 上の挙動と違うかも。gfm だとチェックボックスにすらなってくれなかった。

- list item
- [x] checked
- [ ] unchecked

あと、gfm だと、

```markdown
<details>
<summary>summary</summary>
*これは markdown として整形してくれない*
</details>
```

```markdown
<details>
<summary>summary</summary>

*これはしてくれる*
</details>
```
のに対し、kramdown だとどちらも整形してくれなかった。

`<span class="...">` とかは直接書ける。<span class="key">⌥⌃⇧⌘X</span> みたいな感じで。
