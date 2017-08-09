const ImdbPageScraper = require('./scrapers/ImdbPageScraper');
const { div, img, p, main, form, button, a, input, nav } = require('elementx');

addEventListener('DOMContentLoaded', run);
function run() {
  const $root = document.querySelector('#root');
  $root.appendChild(banner);
  $root.appendChild(search);

  // 1. generate the HTML form that takes the URL as input
  // 2. when that form submits, invoke your scraper (i.e. call scraper.scrape(url))
  // 3. when that scraper finishes, generate a widget
  let scraper = new ImdbPageScraper();
  scraper
    .scrape('http://www.imdb.com/title/tt5140878/?ref_=inth_ov_tt')
    .then(data => {
      console.log(data);
      const $widget = renderWidget(data);
      // $root.appendChild(nav)
      $root.appendChild($widget);
    });
  // $app = ????????;
  // $root.appendChild($app);
}

function renderWidget(data) {
  return div(
    { class: 'row' },
    div(
      { class: 'col s12 m7' },
      div({ class: 'card' }, [
        div({ class: 'card-image' }, img({ src: 'data.poster' })),
        div({ class: 'card-title' }, data.title),
        div(
          { class: 'card-rating' },
          'Metacritic Rating ',
          data.metaCriticRating
        ),
        div({ class: 'card-rating' }, 'IMDB Rating ', data.rating),
        div({ class: 'card-content' }, p(data.summary)),
        div(
          { class: 'card-action' },
          a(
            { href: 'http://www.imdb.com/title/tt5140878/?ref_=inth_ov_tt' },
            'ATag title'
          )
        )
      ])
    )
  );
}

let banner = nav(
  div({ class: 'nav-wrapper' }, a({ class: 'brand-logo' }, 'Movie title'))
);

let search = main({ class: 'container' }, [
  div(
    { class: 'row' },
    form([
      div(
        { class: 'col offset-s2 s7' },
        div(
          { class: 'input-field' },
          input({
            type: 'url',
            placeholder: 'Enter movie',
            id: 'userInput',
            name: 'search'
          })
        )
      ),
      div(
        { class: 'col s3' },
        button(
          {
            class: 'btn-large waves-effect waves-light',
            type: 'submit',
            name: 'action'
          },
          'Search'
        )
      )
    ]),
    div({ id: 'listings', class: 'row' })
  )
]);

// NOTE: Pseudo-code for how to run two scrapers in parallel
// Promise.all([
//   scraper1.scrape('some imdb url'),
//   scraper2.scrape('some net critic url')
// ]).then(results => {
//   results[0]; // <=== the daga object from imdb
//   results[1]; // <=== the data object from meta critc
//   const $widget = renderWidget(results[0], results[1]);
//   // appendChild($widget)
// })

// function rottenTomatoesScraper() {
//   fetch(
//     'http://cors-bypass-proxy.axiomlogic.com/https://www.rottentomatoes.com/m/the_dark_tower_2017'
//   )
//     .then(response => response.text())
//     .then(html => {
//       console.log(html);
//       let parser = new DOMParser();
//       let doc = parser.parseFromString(html, 'text/html');
//       // let image = doc.getElementsByClassName('image');
//       console.log('the Doc', doc);
//     });
// }
