`/html-test/codetest.html`
#_
$ echo 1
- 1
$ echo 42\
> \<foo\>
- 42<foo>
$ echo $'\x1b[31mred \x1b[91mbright \x1b[1mbold'
- [31mred [91mbright [1mbold
$ echo $'\x1b[38;5;24;48;5;153;1m256 colors'
- [38;5;24;48;5;153;1m256 colors
$ echo $'\x1b[38;2;16;0;172m'... and 24-bit colors\!
- [38;2;16;0;172m... and 24-bit colors!
#_
