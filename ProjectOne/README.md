# Q1 Project: Web Page Scraper and Widget Generator

You've been tasked with the job of scraping data from a particular set of web pages, and then using that data to generate HTML widgets that can (_eventually_) be shared and embedded within other web sites.

You should be able to generate many widgets from the same _type of_ web pages. In other words, with the same code, you should be able to extract data from many source pages (of the _same type_) and, hence, generate many widgets. Each source page should share the same HTML structure, but contain different content. The page scraping process will extract a common data structure that can be used to populate the content of your widgets. Each widget will look the same, but is generated from different content (since presumably the source pages have different content). Here are some examples of web pages you could scrape to generate widgets for.

- ESPN Team Pages
  - [Golden State Warriors](http://www.espn.com/nba/team/_/name/gs/golden-state-warriors)
  - [San Francisco Giants](http://www.espn.com/mlb/team/_/name/sf/san-francisco-giants)
- Rotten Tomatoes Movie Pages
  - [Star Wars: Rogue One](https://www.rottentomatoes.com/m/rogue_one_a_star_wars_story)
  - [Star Wars: The Force Awakens](https://www.rottentomatoes.com/m/star_wars_episode_vii_the_force_awakens)
- Amazon Product Pages
  - [Gorilla Spinners](https://www.amazon.com/gp/product/B071WMGDXX)
  - [Smart Water](https://www.amazon.com/gp/product/B00KIG3WPQ)

## Step 1

The first thing you should do is create an ES6-style class constructor for your web page scraper. It’s name should end in `*PageScraper` (e.g., `ESPNTeamPageScraper`, `RottonTomatoesPageScraper`, `AmazonProductPageScraper`, etc.). The interface for this `PageScraper` class should be as follows:

`scrape(url)`
- **Input Parameters:** the URL for the web page to be fetched and scraped
- **Output:** A promise. When the promise resolves, it should contain an object of key/value pairs representing the data that was extracted from the source web page.

Your `PageScraper`'s source file should be located in the `src/scrapers/` directory.

## Step 2

Create a dynamically generated HTML widget based on the data that was scraped in Step 1.

For the MVP (Minimum Viable Product), simply create a basic HTML form to accept the URL of one or more web pages that will be used as the source of data for your widget.

On submitting the form, invoke your `PageScraper` (from Step 1) to fetch and extract the necessary data. Based on the data scraped from the given web page(s), dynamically generate an HTML widget and display it under the form.

Recall, you should be able to generate many widgets from the same _type of_ web page.

## Technical Requirements

You MUST...
- Use the `fetch` API to make HTTP requests / AJAX calls
- Use the `DOMParser` class to parse HTML and extract data from that HTML using DOM query methods
- Use the `elementx` library, and functional composition, to create *all* HTML/DOM elements
- Use CSS to style your widget and form
- Your widget must contain some type of media element (e.g., video, audio, image, etc.)
- Your widget must be responsive (i.e., adaptable to smaller screen sizes)
- Respond to form input and/or user events
- Have valid, well-indented, and semantic HTML
- Have valid, well-indented, and minimally-specific CSS
- Have linted, readable, and concise JavaScript.
- Be deployed to a production environment, like Surge.
- Optimize for various viewport sizes using responsive design.

You CAN...
- Use a front-end framework like Bootstrap, Foundation, Materialize, or Semantic UI a basis for your CSS

You CANNOT...
- Use web development framework (e.g., React, Angular, Backbone, etc.)
