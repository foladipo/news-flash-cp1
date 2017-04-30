export function getAllNewsSources() {
  const newsSources = [
    { id: 'abc-news-au', name: 'ABC News (AU)' },
    { id: 'al-jazeera-english', name: 'Al Jazeera English' },
    { id: 'ars-technica', name: 'Ars Technica' },
    { id: 'associated-press', name: 'Associated Press' },
    { id: 'bbc-news', name: 'BBC News' },
    { id: 'bbc-sport', name: 'BBC Sport' },
    { id: 'bloomberg', name: 'Bloomberg' },
    { id: 'breitbart-news', name: 'Breitbart News' },
    { id: 'business-insider', name: 'Business Insider' },
    { id: 'business-insider-uk', name: 'Business Insider (UK)' },
    { id: 'buzzfeed', name: 'Buzzfeed' },
    { id: 'cnbc', name: 'CNBC' },
    { id: 'cnn', name: 'CNN' },
    { id: 'daily-mail', name: 'Daily Mail' },
    { id: 'engadget', name: 'Engadget' },
    { id: 'entertainment-weekly', name: 'Entertainment Weekly' },
    { id: 'espn', name: 'ESPN' },
    { id: 'espn-cric-info', name: 'ESPN Cric Info' },
    { id: 'financial-times', name: 'Financial Times' },
    { id: 'football-italia', name: 'Football Italia' },
    { id: 'fortune', name: 'Fortune' },
    { id: 'four-four-two', name: 'FourFourTwo' },
    { id: 'fox-sports', name: 'Fox Sports' },
    { id: 'google-news', name: 'Google News' },
    { id: 'hacker-news', name: 'Hacker News' },
    { id: 'ign', name: 'IGN' },
    { id: 'independent', name: 'Independent' },
    { id: 'mashable', name: 'Mashable' },
    { id: 'metro', name: 'Metro' },
    { id: 'mirror', name: 'Mirror' },
    { id: 'mtv-news', name: 'MTV News' },
    { id: 'mtv-news-uk', name: 'MTV News (UK)' },
    { id: 'national-geographic', name: 'National Geographic' },
    { id: 'new-scientist', name: 'New Scientist' },
    { id: 'newsweek', name: 'Newsweek' },
    { id: 'new-york-magazine', name: 'New York Magazine' },
    { id: 'nfl-news', name: 'NFL News' },
    { id: 'polygon', name: 'Polygon' },
    { id: 'recode', name: 'Recode' },
    { id: 'reddit-r-all', name: 'Reddit /r/all' },
    { id: 'reuters', name: 'Reuters' },
    { id: 'talksport', name: 'TalkSport' },
    { id: 'techcrunch', name: 'TechCrunch' },
    { id: 'techradar', name: 'TechRadar' },
    { id: 'the-economist', name: 'The Economist' },
    { id: 'the-guardian-au', name: 'The Guardian (AU)' },
    { id: 'the-guardian-uk', name: 'The Guardian (UK)' },
    { id: 'the-hindu', name: 'The Hindu' },
    { id: 'the-huffington-post', name: 'The Huffington Post' },
    { id: 'the-lad-bible', name: 'The Lad Bible' },
    { id: 'the-new-york-times', name: 'The New York Times' },
    { id: 'the-next-web', name: 'The Next Web' },
    { id: 'the-sport-bible', name: 'The Sport Bible' },
    { id: 'the-telegraph', name: 'The Telegraph' },
    { id: 'the-times-of-india', name: 'The Times of India' },
    { id: 'the-verge', name: 'The Verge' },
    { id: 'the-wall-street-journal', name: 'The Wall Street Journal' },
    { id: 'the-washington-post', name: 'The Washington Post' },
    { id: 'time', name: 'Time' },
    { id: 'usa-today', name: 'USA Today' },
  ];
  return newsSources;
}

export function getAvailableSortForNewsSource(source) {
  let availableSortTypes = [];
  switch (source) {
    case 'abc-news-au':
      availableSortTypes = ['top'];
      break;

    case 'al-jazeera-english':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'ars-technica':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'associated-press':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'bbc-news':
      availableSortTypes = ['top'];
      break;

    case 'bbc-sport':
      availableSortTypes = ['top'];
      break;

    case 'bloomberg':
      availableSortTypes = ['top'];
      break;

    case 'breitbart-news':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'business-insider':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'business-insider-uk':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'buzzfeed':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'cnbc':
      availableSortTypes = ['top'];
      break;

    case 'cnn':
      availableSortTypes = ['top'];
      break;

    case 'daily-mail':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'engadget':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'entertainment-weekly':
      availableSortTypes = ['top'];
      break;

    case 'espn':
      availableSortTypes = ['top'];
      break;

    case 'espn-cric-info':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'financial-times':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'football-italia':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'fortune':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'four-four-two':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'fox-sports':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'google-news':
      availableSortTypes = ['top'];
      break;

    case 'hacker-news':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'ign':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'independent':
      availableSortTypes = ['top'];
      break;

    case 'mashable':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'metro':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'mirror':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'mtv-news':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'mtv-news-uk':
      availableSortTypes = ['top'];
      break;

    case 'national-geographic':
      availableSortTypes = ['top'];
      break;

    case 'new-scientist':
      availableSortTypes = ['top'];
      break;

    case 'newsweek':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'new-york-magazine':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'nfl-news':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'polygon':
      availableSortTypes = ['top'];
      break;

    case 'recode':
      availableSortTypes = ['top'];
      break;

    case 'reddit-r-all':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'reuters':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'talksport':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'techcrunch':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'techradar':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'the-economist':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'the-guardian-au':
      availableSortTypes = ['top'];
      break;

    case 'the-guardian-uk':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'the-hindu':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'the-huffington-post':
      availableSortTypes = ['top'];
      break;

    case 'the-lad-bible':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'the-new-york-times':
      availableSortTypes = ['top'];
      break;

    case 'the-next-web':
      availableSortTypes = ['latest'];
      break;

    case 'the-sport-bible':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'the-telegraph':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'the-times-of-india':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'the-verge':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'the-wall-street-journal':
      availableSortTypes = ['top'];
      break;

    case 'the-washington-post':
      availableSortTypes = ['top'];
      break;

    case 'time':
      availableSortTypes = ['top', 'latest'];
      break;

    case 'usa-today':
      availableSortTypes = ['top', 'latest'];
      break;
  }

  return availableSortTypes;
}
