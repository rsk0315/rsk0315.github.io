for js in js/*.js; do
    sha=$(cat $js | sha384sum | tr a-f A-F | awk '$0=$1' | basenc -d --base16 | base64)
    print -r "<script defer src=\"https://rsk0315.github.io/hatenablog/$js\" integrity=\"sha384=${sha}\" crossorigin=\"anonymous\"></script>"
done

for css in css/*.css; do
    sha=$(cat $css | sha384sum | tr a-f A-F | awk '$0=$1' | basenc -d --base16 | base64)
    print -r "<link rel=\"stylesheet\" href=\"https://rsk0315.github.io/hatenablog/$css\" integrity=\"sha384-${sha}\" crossorigin=\"anonymous\">"
done
