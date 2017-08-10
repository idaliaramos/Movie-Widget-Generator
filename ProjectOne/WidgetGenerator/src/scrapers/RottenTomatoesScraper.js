class RottenTomatoesScraper {
  scrape(url) {
    // return fetch("http://cors-bypass-proxy.axiomlogic.com/https://www.rottentomatoes.com/m/annabelle_creation")
    return fetch(url).then(response => response.text()).then(html => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, 'text/html');
      console.log(doc);
      let ratingObj = {};
      let $rottenRating = doc.querySelector('.meter-value span');
      ratingObj.rottenRating = $rottenRating ? $rottenRating.innerText : 'N/A';
      return ratingObj;
    });
  }
}
module.exports = RottenTomatoesScraper;
