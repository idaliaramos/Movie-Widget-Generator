const ImdbPageScraper = require('./scrapers/ImdbPageScraper');
const RottenTomatoesScraper = require('./scrapers/RottenTomatoesScraper');
const { div, img, p } = require('elementx');
// const { div, img, p, main, form, button, a, input, nav } = require('elementx');
const {
  search,
  createNavigation,

  createSearch2
} = require('./components/elementsCreated');

addEventListener('DOMContentLoaded', run);
function run() {
  const $root = document.querySelector('#root');
  // $root.className = 'row';

  $root.appendChild(createNavigation());
  $root.appendChild(makeRow());
  const widgetC = document.getElementById('widget');
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
      widgetC.appendChild($widget);
    });
  });
}

// function renderWidget(data1, data2) {
//   return div(
//     { class: 'card' },
//     div(
//       { class: 'col s12 m6 l4' },
//       div({ class: 'card-content' }, [
//         div(
//           { class: 'card-image' },
//           img({ class: 'card-image', src: data1.image })
//         ),
//         div({ class: 'card-title' }, data1.title),
//         div(
//           { class: 'card-rating' },
//           'Metacritic Rating: ',
//           data1.metaCriticRating + '%'
//         ),
//         div({ class: 'card-rating' }, 'IMDB Rating: ', data1.rating),
//         div(
//           { class: 'card-rating', style: 'font-weight= oblique' },
//           'Rotten Tomatoes Rating: ',
//           data2.rottenRating + '%'
//         ),
//         div({ class: 'card-content' }, p(data1.summary))
//       ])
//     )
//   );
// }
function renderWidget(data1, data2) {
  return div(
    { class: 'col s12 m6 l4' },
    div({ class: 'header' }, data1.title),
    div(
      { class: 'card horizontal' },
      div({ class: 'card-image' }, img({ src: data1.image })),
      div(
        { class: 'card-stacked' },
        div(
          { class: 'card-rating', id: 'firstRating' },
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
      )
    )
  );
}
function makeRow() {
  return div(
    { class: 'row' },
    div({ class: 's12 m6 l6' }, search(), createSearch2()),
    div(
      { class: 's12 m6 l6 ', id: 'widget' } //Widget goes here
    )
  );
}
