class ImdbPageScraper {
  scrape(url) {
    return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`)
      .then(response => response.text())
      .then(html => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');
        // console.log(doc);
        let movieObject = {};

        let $rating = doc.querySelector('.ratingValue').children[0].children[0]
          .innerText;
        let $title = doc.querySelector('.title_wrapper').children[0].innerText;
        let $poster = doc.getElementsByClassName('poster')[0].children[0]
          .children[0].src;
        console.log($poster);

        let $summary = doc.querySelectorAll('.summary_text')[0].innerText;

        let $metaCriticRating = doc.getElementsByClassName('metacriticScore')[0]
          .innerText;
        movieObject.title = $title;
        movieObject.rating = $rating;
        movieObject.metaCriticRating = $metaCriticRating;
        movieObject.summary = $summary;
        movieObject.image = $poster;
        // console.log($summary);
        // console.log(movieObject);

        return movieObject;
      });
  }
}

module.exports = ImdbPageScraper;
