document.addEventListener('DOMContentLoaded', (() => {
  [...document.getElementsByTagName('pre')]
    .filter((pre) => pre.getAttribute('data-lang') === 'test')
    .forEach((pre) => {
      pre.innerText = 'hello';
    });
}));
