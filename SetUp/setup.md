# 基本的な環境構築
CentOSを対象とした環境構築ガイド．

Ubuntuなどにもある程度は流用可能．
`./configure` では `--build=x86_64-pc-linux` にするとか，`apt-get` では `*-devel` ではなく `*-dev`になりがち，のようなことを覚えておくとよいかも？

## VMware Toolsのインストール
#_
$ cd ~/Downloads
$ cp /run/media/rsk0315/VMware\ Tools/VMwareTools-*.tar.gz ./
$ tar xvf VMwareTools-*.tar.gz
$ cd vmware-tools-distrib/
$ sudo ./vmware-install.pl
#_

## `sudo` の設定
以下のコマンドを用いて `/etc/sudoers` を編集し，いちいちパスワードを求められないようにする．
#_
$ sudo visudo
#_
差分は次の通り．
#_
$ sudo diff -up ~/tmp/sudoers /etc/sudoers
---- /home/rsk0315/tmp/sudoers
-+++ /etc/sudoers
-@@ -99,7 +99,7 @@ root	ALL=(ALL) 	ALL
- %wheel	ALL=(ALL)	ALL
- 
- ## Same thing without a password
--# %wheel	ALL=(ALL)	NOPASSWD: ALL
-+%wheel	ALL=(ALL)	NOPASSWD: ALL
- 
- ## Allows members of the users group to mount and unmount the 
- ## cdrom as root
#_

## `git` のアップグレード
ビルドするのに必要なライブラリ群をインストールする．
#_
$ sudo yum install openssl-devel curl-devel expat-devel
#_
`gettext-devel`，`perl-devel`，`zlib-devel`，`perl-ExtUtils-MakeMaker`も依存している？ 最初から入っているかも？

古い `git` が入っていることを期待し，以下を実行．
#_
$ git clone https://github.com/git/git.git
$ cd git
$ make && make install
#_
`prefix` は `$(HOME)` になっているので，`$PATH` を見てちゃんと新しいのが実行されるかを確認する．必要に応じて以下を実行してみる．
#_
$ git --version
$ which git
#_

`GIT_EDITOR` などを適宜変更しよう．
#_
$ man git-var
#_
を参考にするとよい．

## `vim` のアップグレード
#_
$ sudo yum install libX11-devel libXt-devel gtk2-devel ncurses-devel
#_
`atk-devel` も依存している？
#_
$ git clone https://github.com/vim/vim.git
$ cd vim
$ ./configure --prefix=$HOME --build=x86_64-redhat-linux --with-x \
>     CFLAGS=-I/usr/include/X11
$ make && make install
#_

## `emacs` のインストール
`http://ftp.jaist.ac.jp/pub/GNU/emacs/` などから最新のものをダウンロード．
#_
$ sudo yum install gnutls-devel
$ cd ~/Downloads
$ curl http://ftp.jaist.ac.jp/pub/GNU/emacs/emacs-26.1.tar.xz -o emacs-26.1.tar.xz
$ tar xvf emacs-26.1.tar.xz
$ cd emacs-26.1/
$ ./configure --prefix=$HOME --build=x86_64-redhat-linux --without-x 
$ make && make install
#_

## `python3` のインストール
#_
$ sudo yum install https://centos7.iuscommunity.org/ius-release.rpm
$ sudo yum install python36u{,-{libs,devel,pip}}
#_

`pip` を使って便利モジュールを入れるのも忘れずに．
#_
$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
$ python3 get-pip.py --user
$ pip install --user numpy
$ pip install --user scipy
$ pip install --user pandas 
$ pip install --user matplotlib
$ pip install --user Image
$ pip install --user mechanicalsoup
#_

## `bash` のアップグレード
#_
$ curl http://ftp.gnu.org/gnu/bash/bash-5.0-alpha.tar.gz -o bash-5.0-alpha.tar.gz
$ tar xvf bash-5.0-alpha.tar.gz 
$ cd bash-5.0-alpha/
$ ./configure --prefix=$HOME --build=x86_64-redhat-linux
$ make && make install
$ cp doc/bash.1 ~/usr/share/man/man1/
#_

## GCCのアップグレード
`yum install gcc` でインストールできる GCC は古いのでつらい．
#_
$ sudo yum install centos-release-scl
$ sudo yum install devtoolset-7-gcc-c++
#_
として新しいものをインストールできる．かわりに `devtoolset-7\*` とすると他にもいろいろ入る．@[url:https://www.softwarecollections.org/en/scls/rhscl/devtoolset-7/]@ を参考にしよう．
#_
$ scl enable devtoolset-7 bash
#_
とすることでそれを有効にした状態でシェルを起動することができる．
`PATH` に `/opt/rh/devtoolset-7/root/usr/bin/` を追加するだけでもよさそう？

もちろん，ソースからビルドしてもよい（やや時間がかかる）．
#_
$ curl http://ftp.tsukuba.wide.ad.jp/software/gcc/releases/gcc-8.2.0/gcc-8.2.0.tar.xz -o gcc-8.2.0.tar.xz
$ tar xvf gcc-8.2.0.tar.xz
$ cd gcc-8.2.0/
$ ./contrib/download_prerequisites
$ ./configure --prefix=$HOME --build=x86_64-redhat-linux --program-suffix=-8.2 --disable-multilib --enable-languages=c,c++ C{,XX}FLAGS=-O3
$ make -j4 BOOT_CFLAGS='-march=native -O3'
$ make install
#_

`-fsanitize=undefined` つきでコンパイルしたファイルを正しく実行するためには `libubsan.so` が必要．
#_
$ ./a.out
- ./a.out: error while loading shared libraries: libubsan.so.1: cannot open shared object file: No such file or directory
#_
また，システムにあるライブラリが古くて以下のようなエラーが出ることがある．
#_
$ ./a.out
- ./a.out: /lib64/libstdc++.so.6: version `CXXABI_1.3.9' not found (required by ./a.out)
#_
これらを回避するために，`$HOME/lib64/` を `LD_LIBRARY_PATH` に追加するとよい．
```[~/.bashrc]
LD_LIBRARY_PATH=$HOME/lib64/${LD_LIBRARY_PATH:+:}$LD_LIBRARY_PATH
```

また，一般にパスを追加する際に以下のようにするのは危険に思われる．
```
# PATH=/new/path/to/dir:$PATH  # bad?
```
`$PATH` が空のときにカレントディレクトリが含まれてしまうためである（ヒント：`::` または先頭・末尾の `:` によって表される空ディレクトリ名は `.` を意味する）．
`$PATH` が空でないときのみ展開する記法を用いて以下のようにしたい．
```
# PATH=/new/path/to/dir${PATH:+:$PATH}
```
また，`"..."` で囲まないことについては，空白除去が行われない感じなので問題ない気がする（嘘かもしれないので注意）．

## その他有用なものたちのインストール
#_
$ sudo yum install php
$ sudo yum install mawk
$ sudo yum install ruby ruby-devel
$ sudo yum install xsel
#_
@[LaTeX]@も早いうちに入れよう．

## @[LaTeX]@のインストール
@[TeX]@ Liveを使う．
#_
$ sudo yum install perl-Digest-MD5
$ sudo ./install-tl
#_

# 発展的な環境構築
趣味の領域に含まれると思われるもの．

## `bashrc` の編集
最初の状態では以下の内容しかなく，そっけなさすぎる（インストールの手順にもよるとは思うが）．
```[~/.bashrc]
# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions
```

### エイリアス
ファイルの移動時に上書き確認をするのは基本中の基本．
```[~/.bashrc]
alias rm='rm -iv' cp='cp -iv' mv='mv -iv'
```

### シェルオプション
リダイレクトの上書きを防ぐのも基本．
```[~/.bashrc]
# Shell options
set -o noclobber       # same as `set -C'
shopt -s histverify autocd
```
`noclobber` によって `>` による上書きを防ぐことができる．強制的に上書きしたいときは `>|` を使う．
`histverify` は履歴展開が起こったときコマンドが即座に実行されないようにする．
`autocd` はコマンドとして見つからなかった文字列を `cd` への引数と解釈させる．
`~` や `..` などのみでディレクトリを移動できるようになるが，暴発には注意．

### ページャのオプション
```[~/.bashrc]
# Pager configurations
export LESS=FR
```
- `less -F`：一画面で収まるならそのまま表示
- `less -r`：エスケープシーケンスを解釈
  - これは表示が乱れることがある？ のでやめた
  - `man` にもその旨が書いてあった
- `less -R`：`ESC [ ... m`のシーケンスのみを解釈

### 補完の設定
`Tab` などによる補完の設定．

何かしらの原因で，空行で補完を試みると `bash: words: bad array subscript` のようなエラーが起きることがある．
空行での補完を無効化すると抑止できるので，それをする．

また，バックアップファイルなどが補完されると厄介なので，`FIGNORE` によってそれを防ぐ．

```[~/.bashrc]
# Completion configurations
completion_loader () { return 124; }
complete -EFcompletion_loader +o{bashdefault,default}
export FIGNORE=.o:\~:#${FIGNORE:+:$FIGINORE}
```

### 履歴関連
```[~/.bashrc]
# History configurations
HISTCONTROL=ignoredups
```

個人的に `g` → `a` → `%` の流れを無限に繰り返しがちなので，それで履歴が圧迫されるのは避けたい．
...と思って `erasedups` を入れていたが，これは `C-o` による `operate-and-get-next` をこわすことがわかったのでやめ．

### その他環境変数の設定
```[~/.bashrc]
# Editor configurations
export EDITOR=vim
export EDITOR=emacs  # ... or whatever you like
```

これ，`emacs` を最後に書いておくことで，コピペした場合に `emacs` が設定されるようにする小汚いテクなんだよね．

### キーバインドの補助設定
`C-s` などが期待通りに動作するようにする．
```[~/.bashrc]
# Key bindings
stty rprnt undef stop undef werase undef kill undef
```
デフォルトに戻す場合は以下の通り．
#_
$ stty rprnt \^r stop \^s werase \^w kill \^u
#_
履歴展開が有効な場合に `^` が暴発しないように注意．
また，個別に以下のようにしてもよい．
#_
$ stty rprnt \^r
$ stty stop \^s
$ stty werase \^w
$ stty kill \^u
#_

### `inputrc`の編集
```[~/.inputrc]
# emacs-like key bindings
"\C-u": universal-argument
"\ew": copy-region-as-kill
"\C-w": kill-region
"\e\C-w": kill-whole-line

# variables
set enable-bracketed-paste On
set mark-symlinked-directories On
```
`enable-bracketed-paste` が有効のとき，改行文字が `accept-line` として暴発するのを防ぐ（タブ文字の `complete` なども同様）．
`mark-symlinked-directories` が有効のとき，ディレクトリを指すリンクが Tab 補完されたときに `/` が付加される．

```[~/.inputrc]
"\e%": "\C-a#\C-j%\C-j"
```
`M-%` によって，現在の行を残しつつプロセスを再開（`%`）する．
C シェルの真似をして `M-C-z` で `C-z` の逆をできたらよかったのだけど，`C-z` で suspend するのを無効化しないと `"\e\C-z"` に書き込めないようなので断念．

## エディタの初期化ファイル
### `init.el` の編集

emacs の初期化ファイル．
```[~/.emacs.d/init.el]
;; テーマの設定
(load-theme 'tango-dark t)

;; 行数を表示
;; (global-linum-mode t)
;; (setq linum-format "%4d ")
(if (version<= "26.0.50" emacs-version)
    (global-display-line-numbers-mode)
  (and (global-linum-mode t) (setq linum-format "%4d ")))

;; タブ文字を展開する
(setq-default indent-tabs-mode nil)

;; 括弧の対応付けを表示
(show-paren-mode t)

;; モードラインの整形
(setq
 mode-line-position
 `((-3 "%p ")
   (line-number-mode " L%l")
   (column-number-mode
    (,(version< emacs-version "26") " C%c"
     (column-number-indicator-zero-based " C%c" " CC%C"))))
 column-number-mode t
 column-number-indicator-zero-based nil)

;; その他モジュールの読み込み
(add-to-list 'load-path "~/.emacs.d/elisp")
(require 'markdown)
```

### `vimrc` の編集
```[~/.vimrc]
" 色の設定
:colorscheme koehler
:syntax on

" ステータスバーの設定
:set showcmd
:set ruler

" 行番号
:set number

" ショートカット
:nnoremap ZX <Esc>:w<CR><C-z>

" バックスペースの挙動
:set backspace=eol,start,indent
" インデントの設定 cf: ':h cinoption-values'
:set expandtab
:set tabstop=4
:set softtabstop=4
:set shiftwidth=4
:set autoindent
:set smartindent  " ここよくわかってません

" 言語特有の設定
augroup langc
    au BufNewFile,BufRead *.c,*.cpp,*.cc,*.cxx,*.C,*.h,*.hpp
        \ setlocal tabstop=2 softtabstop=2 shiftwidth=2 cindent
    au BufNewFile *.rs
        \ 0r ~/codefolio/Rust/scanner.rs
augroup END
```

`vimrc` が長い方がえらいと思っている人たちは正気ですか？
...とか書いてたくせに（そらで完全に書けるほど）短いとは言えなくなってきましたね．

## `gitconfig` の編集
パラメータなどについては以下を参照．
#_
$ git help config
#_
`color.diff` の項目を見るとよい．数値を指定したときに `<Esc>38;5;##m` の形式になってくれるのはたまたまなのかも？
```[~/.gitconfig]
[color.diff]
        new = green bold
        old = red bold
        frag = 43 bold
        commit = 106
```

## フォントの設定
MigMixはいいぞ．
`/etc/fonts/conf.d/65-nonlatin.conf` を編集する．とりあえず一番上にしよう．
#_
$ diff -up ~/tmp/65-nonlatin.conf /etc/fonts/conf.d/65-nonlatin.conf
---- /home/rsk0315/tmp/65-nonlatin.conf
-+++ /etc/fonts/conf.d/65-nonlatin.conf
-@@ -4,6 +4,7 @@
- 	<alias>
- 		<family>serif</family>
- 		<prefer>
-+			<family>MigMix 1M</family>
- 			<family>Artsounk</family> <!-- armenian -->
- 			<family>BPG UTF8 M</family> <!-- georgian -->
- 			<family>Kinnari</family> <!-- thai -->
-@@ -69,6 +70,7 @@
- 	<alias>
- 		<family>sans-serif</family>
- 		<prefer>
-+			<family>MigMix 1M</family>
- 			<family>Nachlieli</family> <!-- hebrew -->
- 			<family>Lucida Sans Unicode</family>
- 			<family>Yudit Unicode</family>
-@@ -144,6 +146,7 @@
- 	<alias>
- 		<family>monospace</family>
- 		<prefer>
-+			<family>MigMix 1M</family>
- 			<family>Miriam Mono</family> <!-- hebrew -->
- 			<family>VL Gothic</family>
- 			<family>IPAMonaGothic</family>
#_

# 便利コマンドの定義

## プロンプト文字列
`\s-\v\$ ` ではそっけないので変える．`~/.bashrc` に追記．
```[~/.bashrc]
# Prompt strings
PS0=$'\x1b[0m'
PS1="\n\$(. ~rsk0315/.bashrc.d/ps1.sh)"
PS1+=$'\n\[\x1b[0m\]\$ \[\x1b[1m\]'
```

`ps1.sh` は以下の通りで，
- カレントディレクトリ
- シェルの階層
- バージョン情報

を表示する．

```[~/.bashrc.d/ps1.sh]
# -*- mode: sh; sh-shell: bash -*-

. ~rsk0315/.bashrc.d/color-seq.sh

print_wd () {
    wd="$(pwd)"
    if [[ "$wd" =~ ^"$HOME" ]]; then
        wd="${wd/#$HOME/$'\176'}"
        [[ "$wd" == \~ ]] || wd+=/
    elif [[ "$wd" == / ]]; then
        wd=/
    else
        wd+=/
    fi
    echo -n "$(color_seq 45 nr)$wd$(color_seq '' n)"
}

print_wd
echo : bash-"$BASH_VERSION" "[$((SHLVL-1))]"
```

`color-seq.sh` は色のエスケープシーケンスを生成する（関数を定義する）スクリプト．
別に関数にする必要はなくて，普通にスクリプトとして置いておいてもいい気がする．

```[~/.bashrc.d/color-seq.sh]
# -*- mode: sh; sh-shell: bash -*-

color_seq () {
    color="$1"
    attr="$2"

    res=
    [[ "$attr" =~ n ]] && res+=$'\01'
    res+=$'\x1b['

    if [[ -z "$color" ]]; then
        res+=0
        [[ "$attr" =~ b ]] && res+=\;1
        [[ "$attr" =~ r ]] && res+=\;0
        res+=m
    else
        [[ "$attr" =~ b ]] && res+=1\;
        [[ "$attr" =~ r ]] && res+=0\;
        res+="38;5;${color}m"
    fi
    [[ "$attr" =~ n ]] && res+=$'\02'
    echo "$res"
}
```

## 終了ステータス
`echo $?` を叩かないとわからないのは不便なので，勝手に出してくれるようにする．
典型的な値についてはコメントつき．

```[~/.bashrc.d/exit-status.sh]
# -*- mode: sh; sh-shell: bash -*-

declare -a signals=(
    [1]='Program received signal SIGHUP, Hangup.'
    [2]='Program received signal SIGINT, Interrupt.'
    [3]='Program received signal SIGQUIT, Quit.'
    [4]='Program received signal SIGILL, Illegal instruction.'
    [5]='Program received signal SIGTRAP, Trace/breakpoint trap.'
    [6]='Program received signal SIGABRT, Aborted.'
    [7]='Program received signal SIGBUS, Bus error.'
    [8]='Program received signal SIGFPE, Arithmetic exception.'
    [9]='Program terminated with signal SIGKILL, Killed.'
    [10]='Program received signal SIGUSR1, User defined signal 1.'
    [11]='Program received signal SIGSEGV, Segmentation fault.'
    [12]='Program received signal SIGUSR2, User defined signal 2.'
    [13]='Program received signal SIGPIPE, Broken pipe.'
    [14]='Program terminated with signal SIGALRM, Alarm clock.'
    [15]='Program received signal SIGTERM, Terminated.'
    [16]='Program received signal ?, Unknown signal.'
    [17]=''
    [18]='Program received signal SIGCONT, Continued.'
    [19]='Program received signal SIGSTOP, Stopped (signal).'
    [20]='Program received signal SIGTSTP, Stopped (user).'
    [21]='Program received signal SIGTTIN, Stopped (tty input).'
    [22]='Program received signal SIGTTOU, Stopped (tty output).'
    [23]=''
    [24]='Program received signal SIGXCPU, CPU time limit exceeded.'
    [25]='Program received signal SIGXFSZ, File size limit exceeded.'
    [26]='Program terminated with signal SIGVTALRM, Virtual timer expired.'
    [27]=''
    [28]=''
    [29]='Program terminated with signal SIGIO, I/O possible.'
    [30]='Program received signal SIGPWR, Power fail/restart.'
    [31]='Program received signal SIGSYS, Bad system call.'
    #[32]='Program received signal SIG32, Real-time event 32.'
)

. ~rsk0315/.bashrc.d/color-seq.sh

declare -gi status=0
on_debug () {
    status=$1
    declare -gi executed+=1
    if (( executed == 0 )); then
        declare -gi failcount=0
        return
    fi

    #if (( status != 0 )); then
    #    declare -gi failcount+=1
    #fi
}

on_err () {
    declare -gi failcount+=1
}

on_prompt () {
    declare -gi status=$1

    if (( failcount <= 0 )); then
        if (( executed > 1 )); then
            echo -e "$(color_seq 10 r)(*'-')b < All commands exited successfully$(color_seq '')" >&2
        elif (( executed == 1 )); then
            echo -e "$(color_seq 10 r)(*'-')b < Exited successfully$(color_seq '')" >&2
        fi
    elif (( status == 0 )); then
        if (( executed > 1 )); then
            echo -ne "$(color_seq 10 r)(*'-')b < Last command exited successfully, " >&2
            echo -ne "$(color_seq 9 r)but $failcount command" >&2
            if (( failcount > 1 )); then echo -n s >&2; fi
            echo -e " failed$(color_seq '')" >&2
        else
            :;
        fi
    elif (( executed > 0 )); then
        echo -e "$(color_seq 9 r)exited with code $status" >&2

        if (( status < 128 )); then
            case $status in
                1)
                    echo "(*'~')? < Something went wrong?" >&2;;
                2)
                    echo "(*'~')? < Incorrect usage or some error occurred?" >&2;;
                127)
                    echo "(*'~')? < Command not found? Check \$PATH, \$PWD, permissions, and spelling" >&2;;
                *)
                    echo "(*'~')..." >&2;;
            esac
        elif (( ${#signals[status-128]} > 0 )); then
            echo "(*'~')/ < ${signals[status-128]}" >&2
        else
            echo "(*'~')..." >&2
        fi

        echo -ne "$(color_seq '')" >&2
    fi

    declare -gi failcount=-1
    declare -gi executed=-1

    declare -gi status=0
}

trap 'on_debug "$?" "$_"' DEBUG
trap 'on_err "$_"' ERR
PROMPT_COMMAND='on_prompt "$?" "$_"'
```
バックグラウンドで実行したり `!` で論理反転したりするとこわれるけど仕方ない．

以下を `~/.bashrc` に追記して反映させる．
```[~/.bashrc]
# Display previous exit status
. ~rsk0315/.bashrc.d/exit-status.sh
```

## 最新ファイルの出力
`ls` を利用して最新のファイルを選ぶスクリプト．
GNU拡張の `ls` は ` ` や `'` などをエスケープできるオプション `-Q` があって素敵なんだけど，それを復元するのが厄介なので諦める．そもそもそんなファイル名にする方がどうかしている．

```[~/bin/latest]
# -*- mode: sh; sh-shell: bash -*-

while getopts :p:s: foo; do
    case $foo in
        p ) perm="$OPTARG";;
        s ) suffix="$OPTARG";;
    esac
done

latest=$(ls -ltA | grep -E "${suffix:+\\.(}$suffix${suffix:+)}\$" \
             | grep "^-$perm" | awk '$0=$9' | sed q)
[[ -z "$latest" ]] && exit 1
echo $latest
```
パーミッションと拡張子を指定可能．見つからなければ `1` を返す．

もしもそうしたファイル名に対応する必要があるなら以下のようにする．
テストするべき項目は少なくとも以下の通り．
- ``\"' $`` などを含むファイル名
- 空白文字 `\t\n\r\v\f` や連続するスペースを含むファイル名
- `\001` や `\177` などを含むファイル名
- 末尾に `\n` を含むファイル名
  - `$(...)` は末尾の改行を削除するため
  - これどうにもならなくないか
  - ゴミ文字 `X` をつけて読み手側で処理する？ そんなの狂っている

次のような方法でunescapeしようとした．
1. ファイル名の先頭の `"` と末尾の `"` を取り除く
  - このとき，symlinkがあると `"..." -> "..."` のような形式になることに注意
2. `'` を `'\'$'` に置き換える
  - `'` を `'\''`にするやつ + `$'...'`
3. 末尾に `'` を，先頭に `$'` を付加したものを `echo` する
  - シェルインジェクションに対して弱いとこわれる

`printf` を使うと `%` でこわれると思っていたが，こわれていたのは私の頭だった．
```[~/bin/latest-Q]
# -*- mode: sh; sh-shell: bash -*-

while getopts :p:s: foo; do
    case $foo in
        p ) perm="$OPTARG";;
        s ) suffix="$OPTARG";;
    esac
done

latest=$(ls -ltAQ | grep -E "${suffix:+\\.($suffix)}\"" \
             | grep -v '.#' $(: to ignore vim backups) \
             | grep "^[-l]$perm" | sed s/%/%%/g \
             | sed -E 's/[^"]*"((\\.|[^\\"])*)".*/\1/; q')
latest=$(printf "$latest-")
latest="${latest%-}"

[[ -f "$latest" ]] && echo "$latest"
```
シェルインジェクションの心配はなさそう．
念のため，生成されたファイル名が存在するかのチェックをかませる．

`"a" -> "b"` のようなsymlinkに対して `-> ` のようなsuffixを指定するとこわれそう．順番変えるだけでなんとかなる？

### 最新ソースのコンパイル
それを利用して最新のソースを `make` する．俗にいう `g` に対応するスクリプト．
```[~/bin/g]
# -*- mode: sh; sh-shell: bash -*-

CC="${CC:-gcc-8.2}"
CXX="${CXX:-g++-8.2}"

cflags="-Wall -O3 -fsanitize=undefined"
CFLAGS="$cflags $CFLAGS $@"
CXXFLAGS="$cflags $CXXFLAGS $@"

src="$(latest -s'c|cxx|cc|C|cpp')" \
    || { echo no source files found. >&2; exit; }
make CC="$CC" CXX="$CXX" CFLAGS="$CFLAGS" CXXFLAGS="$CXXFLAGS" "${src%.*}"
```

最新以外のファイルをするために `g foo` とできるようにしたいけど，オプションの解析が面倒になるんだよね．
コンパイラを変えるときも `g CC=gcc` とできたら自然な気がするけど，仕方なく `CC=gcc g` とする．いや，ある種こちらの方が自然なのかも？
`set -k` をしていると位置に関係なく環境変数をいじれるらしい．

`g` の場合は末尾の文字が `\n` でないことがわかっているので，`latest` の部分を `latest-Q` に変えるか `latest` 自体を差し替えれば堅牢なバージョンになる．

GNU `make` はスペースに関してガバガバっぽいので，これをする必要があるならコンパイル部分を自分で書いたほうがいいのかも．

### 最新の実行ファイルの実行
最新の実行ファイルを実行する．俗にいう `a` に対応するスクリプト．必ずしも `./a.out` とは限らないファイルを実行できる．
```[~/bin/a]
# -*- mode: sh; sh-shell: bash -*-

src=$(latest -p ..x) || { echo no executables found. >&2; exit; }
set -x
"./$src" "$@"
```

`a` の場合は末尾文字が `\n` になりうる（ここおふざけポイント）ので，工夫が必要．
`$(...)` ではtrailing newlinesが除去されるので，`latest-Q` が成功した場合は `-\n` を追加する．（実質的には `\n-` が追加される．わかる？）
```[~/bin/aa]
# -*- mode: sh; sh-shell: bash -*-

src=$(latest-Q -p ..x && echo -) \
    || { echo no executables found. >&2; exit; }
src="${src::-2}"
[[ -f "$src" ]] || exit
set -x
"./$src" "$@"
```
