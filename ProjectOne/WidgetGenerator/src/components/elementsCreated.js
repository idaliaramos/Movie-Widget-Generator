const { div, main, form, button, input, nav } = require('elementx');

function createContainer() {
  return div({ class: 'container row' });
}

function createNavigation() {
  return nav(
    div(
      { class: 'nav-wrapper black ' },
      div({ class: 'brand-logo left' }, 'Movie Crunch')
    )
  );
}

function search() {
  return main({ class: 'container small' }, [
    div(
      { class: 'cards' },
      form([
        div(
          { class: 'col s12 m6' },
          div(
            { class: 'input-field' },
            input({
              type: 'url',
              placeholder: 'Enter IMDB Url',
              id: 'userInput',
              name: 'search'
            })
          )
        )
      ]),
      div({ id: 'listings', class: 'row' })
    )
  ]);
}
function createSearch2() {
  return main({ class: 'container' }, [
    // div(
    //   { class: 'thing' },
    form([
      div(
        { class: 'col s12 m6' },
        div(
          { class: 'input-field' },
          input({
            type: 'url',
            placeholder: 'Enter Rotten Tomatoes Url',
            id: 'userInput',
            name: 'search'
          })
        )
      ),
      div(
        { class: 'col s3 m6' },
        button(
          {
            class: 'btn-large amber',
            type: 'submit',
            name: 'action'
          },
          'Search'
        )
      )
    ]),
    div({ id: 'listings', class: 'row' })
    // )
  ]);
}

module.exports = {
  search,
  createNavigation,
  createSearch2,
  createContainer
};
