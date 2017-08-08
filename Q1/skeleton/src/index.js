addEventListener('DOMContentLoaded', main);

function main() {
  const $root = document.querySelector('#root');
  const $app = null; // <== Your dynamically generated DOM element goes here
  $root.appendChild($app);
}
