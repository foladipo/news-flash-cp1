import React from 'react';
import Article from './Article';
import articlesStore from '../stores/ArticlesStore';
import WelcomeMessage from './WelcomeMessage';
import AppStatus from './AppStatus';

/**
 * This Component houses a list of Article's for easy reading.
 * @extends React.Component
 */
export default class ArticlesContainer extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      articles: articlesStore.getArticles(),
    };
  }

  /**
   * Contains callbacks that update this Component whenever a Store it
   *  depends on changes.
   */
  componentWillMount() {
    articlesStore.on('articlesFetched', () => {
      this.setState({
        articles: articlesStore.getArticles(),
      });
    });
  }


  /**
   * Computes and returns a representation of this Component for rendering.
   * @return - HTML representation of this Component for DOM rendering.
   */
  render() {
    const Articles = this.state.articles.map(article =>
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
