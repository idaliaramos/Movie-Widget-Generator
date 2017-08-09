const ImdbPageScraper = require('./scrapers/ImdbPageScraper');
const { div, img, p, main, form, button, a, input, nav } = require('elementx');

addEventListener('DOMContentLoaded', run);
function run() {
  const $root = document.querySelector('#root');
  // $root.className = 'row';
  $root.appendChild(banner);
  $root.appendChild(search);
  $root.appendChild(container);

  const $button = document.querySelector('button');
  const $input = document.querySelector('input');
  let scraper = new ImdbPageScraper();
  $button.addEventListener('click', function(event) {
    event.preventDefault();
    const movieInput = $input.value;
    console.log('Movie', movieInput);
    scraper.scrape(movieInput).then(data => {
      console.log(data);
      const $widget = renderWidget(data);
      // $root.appendChild(nav)
      $root.appendChild($widget);
    });
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

function renderWidget(data) {
  return div(
    { class: 'card-image' },
    div(
      { class: 'col s12 m6' },
      div({ class: 'card' }, [
        div(
          { class: 'card-image' },
          img({ class: 'card-image', src: data.image })
          // video({
          //    width= "320", height = "240" },
          //    source({src:'', type: "video/mp4" }))
        ),
        div({ class: 'card-title' }, data.title),
        div(
          { class: 'card-rating' },
          'Metacritic Rating ',
          data.metaCriticRating
        ),
        div({ class: 'card-rating' }, 'IMDB Rating ', data.rating),
        div({ class: 'card-content' }, 'Summary', p(data.summary))
      ])
    )
  );
}

let container = div({ class: 'container' });

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
