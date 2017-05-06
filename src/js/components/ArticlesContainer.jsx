import React from 'react';
import Article from './Article';
import articlesStore from '../stores/ArticlesStore';
import WelcomeMessage from './WelcomeMessage';
import AppStatus from './AppStatus';

export default class ArticlesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: articlesStore.getArticles(),
    };
  }

  componentWillMount() {
    articlesStore.on('articlesFetched', () => {
      this.setState({
        articles: articlesStore.getArticles(),
      });
    });
  }

  render() {
    const Articles = this.state.articles.map(article =>
      // Use the spread operator to extract each key in the article object.
      <Article key={article.id} {...article} />);
    return (
      <div id="articles-container" className="row container-fluid">
        <WelcomeMessage />
        <AppStatus />
        <div>{Articles}</div>
      </div>
    );
  }
}
