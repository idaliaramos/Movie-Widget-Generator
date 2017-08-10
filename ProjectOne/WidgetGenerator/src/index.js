const ImdbPageScraper = require('./scrapers/ImdbPageScraper');
const RottenTomatoesScraper = require('./scrapers/RottenTomatoesScraper');
const { div, img, p } = require('elementx');
// const { div, img, p, main, form, button, a, input, nav } = require('elementx');
const {
  search,
  createNavigation,
  createContainer,
  createSearch2
} = require('./components/elementsCreated');

addEventListener('DOMContentLoaded', run);
function run() {
  const $root = document.querySelector('#root');
  // $root.className = 'row';

  $root.appendChild(createNavigation());
  $root.appendChild(makeRow());
  document.body.appendChild(createContainer());

  const $button = document.querySelector('button');
  const $input = document.querySelectorAll('input')[0];
  const $input2 = document.querySelectorAll('input')[1];
  let scraper = new ImdbPageScraper();
  let scraper2 = new RottenTomatoesScraper();
  $button.addEventListener('click', function(event) {
    event.preventDefault();
    const movieInput = $input.value;
    const movieInput2 = $input2.value;
    Promise.all([
      scraper.scrape(movieInput),
      scraper2.scrape(movieInput2)
    ]).then(results => {
      const $widget = renderWidget(results[0], results[1]);
      $root.appendChild($widget);
    });
  });
}

function renderWidget(data1, data2) {
  return div(
    { class: 'card-image' },
    div(
      { class: 'col s12 m6' },
      div({ class: 'card' }, [
        div(
          { class: 'card-image' },
          img({ class: 'card-image', src: data1.image })
        ),
        div({ class: 'card-title' }, data1.title),
        div(
          { class: 'card-rating' },
          'Metacritic Rating: ',
          data1.metaCriticRating + '%'
        ),
        div({ class: 'card-rating' }, 'IMDB Rating: ', data1.rating),
        div(
          { class: 'card-rating' },
          'Rotten Tomatoes Rating: ',
          data2.rottenRating + '%'
        ),
        div({ class: 'card-content' }, p(data1.summary))
      ])
    )
  );
}
function makeRow() {
  return div(
    { class: 'row' },
    div(
      { class: 'col s5 push-s7' },
      'this div is 7-columns wide on pushed to the right by 5-columns.'
    ),
    div({ class: 'col s7 pull-s5' }, search(), createSearch2())
  );
}
