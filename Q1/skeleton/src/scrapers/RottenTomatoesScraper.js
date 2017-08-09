class RottenTomatoesScraper {
  scrape(url) {
    // return fetch("http://cors-bypass-proxy.axiomlogic.com/https://www.rottentomatoes.com/m/annabelle_creation")
    return fetch(url).then(response => response.text()).then(html => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, 'text/html');
      console.log(doc);
      let ratingObj = {};
      let $rating = doc.querySelector('.meter-value span');
      ratingObj.rating = $rating ? $rating.innerText : 'N/A';
      console.log($rating);
      console.log(ratingObj);

      let movieObject = {};

      let $title = doc.querySelector('.title_wrapper H1');
      movieObject.title = $title ? $title.innerText : 'N/A';

      let $poster = doc.querySelector('.poster a img');
      movieObject.image = $poster ? $poster.src : 'N/A';
      // : 'https://tinyurl.com/ycdwlm8j';

      let $summary = doc.querySelectorAll('.summary_text')[0];
      movieObject.summary = $summary ? $summary.innerText : 'N/A';

      let $metaCriticRating = doc.getElementsByClassName('metacriticScore')[0];
      movieObject.metaCriticRating = $metaCriticRating
        ? $metaCriticRating.innerText
        : 'N/A';
    });
  }
}
module.exports = RottenTomatoesScraper;
