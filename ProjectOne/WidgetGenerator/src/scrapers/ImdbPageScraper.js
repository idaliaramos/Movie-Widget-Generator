class ImdbPageScraper {
  scrape(url) {
    // let myInit = {
    //   headers: { origin: null }
    // };
    return (
      fetch(url)
        // return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`, myInit)
        .then(response => response.text())
        .then(html => {
          let parser = new DOMParser();
          let doc = parser.parseFromString(html, 'text/html');
          console.log(doc);

          let movieObject = {};

          let $rating = doc.querySelector('.ratingValue strong span');
          movieObject.rating = $rating ? $rating.innerText : 'N/A';

          // let $video = doc.querySelector('.slate').children[0].children[0]
          //   .innerText;
          let $title = doc.querySelector('.title_wrapper H1');
          movieObject.title = $title ? $title.innerText : 'N/A';

          let $poster = doc.querySelector('.poster a img');
          movieObject.image = $poster ? $poster.src : 'N/A';

          let $summary = doc.querySelectorAll('.summary_text')[0];
          movieObject.summary = $summary ? $summary.innerText : 'N/A';

          let $metaCriticRating = doc.getElementsByClassName(
            'metacriticScore'
          )[0];
          movieObject.metaCriticRating = $metaCriticRating
            ? $metaCriticRating.innerText
            : 'N/A';

          return movieObject;
        })
    );
  }
}

module.exports = ImdbPageScraper;
