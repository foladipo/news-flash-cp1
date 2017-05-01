import React from 'react';
import Article from './Article';
import ArticlesStore from '../stores/ArticlesStore';
import * as ArticlesActions from '../actions/ArticlesActions';
import WelcomeMessageContainer from './WelcomeMessageContainer';
import AppStatusContainer from './AppStatusContainer';

export default class ArticlesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: ArticlesStore.articles,
    };
  }

  componentWillMount() {
    ArticlesStore.on('loadArticles', () => {
      this.setState({
        articles: ArticlesStore.articles,
      });
    });
  }

  fetchArticles() {
    ArticlesActions.startFetchArticles('cnn', 'top');
  }

  render() {
    const Articles = this.state.articles.map((article, index) =>
      // Use the spread operator to extract each key in the article object.
      <Article key={index} {...article} />);
    return (
      <div id="articles-container" className="row container-fluid">
        <WelcomeMessageContainer />
        <AppStatusContainer />
        <div>{Articles}</div>
      </div>
    );
  }
}
