const ImdbPageScraper = require('./scrapers/ImdbPageScraper');
const RottenTomatoesScraper = require('./scrapers/RottenTomatoesScraper');
const { div, img, p, main, form, button, a, input, nav } = require('elementx');
const {
  search,
  createNavigation,
  createContainer,
  createSearch2
} = require('./components/search');

addEventListener('DOMContentLoaded', run);
function run() {
  const $root = document.querySelector('#root');
  // $root.className = 'row';
  $root.appendChild(createNavigation());
  let searchDiv = search();
  $root.appendChild(searchDiv);
  $root.appendChild(createSearch2());
  $root.appendChild(createContainer());

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

    // scraper.scrape(movieInput).then(data => {
    //   const $widget = renderWidget(data);
    //   // $root.appendChild(nav)
    //   $root.appendChild($widget);
    // });
  });

  // scraper.scrape(url).then(data => {
  //   console.log(data);
  //   const $widget = renderWidget(data);
  //   // $root.appendChild(nav)
  //   $root.appendChild($widget);
  // });
  // $app = ????????;
  // $root.appendChild($app);
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
        div({ class: 'card-rating' }, 'IMDB Rating ', data1.rating),
        div(
          { class: 'card-rating' },
          'Rotten Tomatoes Rating: ',
          data2.rottenRating + '%'
        ),
        div({ class: 'card-content' }, 'Summary', p(data1.summary))
      ])
    )
  );
}

// let container = div({ class: 'container row' });
//
// let banner = nav(
//   div({ class: 'nav-wrapper' }, div({ class: 'brand-logo' }, 'Movie title'))
// );

// let search = main({ class: 'container' }, [
//   div(
//     { class: 'row' },
//     form([
//       div(
//         { class: 'col offset-s2 s7' },
//         div(
//           { class: 'input-field' },
//           input({
//             type: 'url',
//             placeholder: 'Enter IMDB Url',
//             id: 'userInput',
//             name: 'search'
//           })
//         )
//       )
//     ]),
//     div({ id: 'listings', class: 'row' })
//   )
// ]);

// let search2 = main({ class: 'container' }, [
//   div(
//     { class: 'row' },
//     form([
//       div(
//         { class: 'col offset-s2 s7' },
//         div(
//           { class: 'input-field' },
//           input({
//             type: 'url',
//             placeholder: 'Enter Rotten Tomatoes Url',
//             id: 'userInput',
//             name: 'search'
//           })
//         )
//       ),
//       div(
//         { class: 'col s3' },
//         button(
//           {
//             class: 'btn-large waves-effect waves-light',
//             type: 'submit',
//             name: 'action'
//           },
//           'Search'
//         )
//       )
//     ]),
//     div({ id: 'listings', class: 'row' })
//   )
// ]);
// let scraper1 = new ImdbPageScraper
// let scraper2= new RottenTomatoesScraper
// Promise.all([
//   scraper1.scrape(input.value),
//   scraper2.scrape(input.value)
// ]).then(results => {
//   results[0];
//   results[1];
//   const $widget = renderWidget(results[0], results[1]);
//   $root.appendChild($widget)
// });
