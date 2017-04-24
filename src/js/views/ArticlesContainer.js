import React from 'react';
import Article from './Article';
import ArticlesStore from '../stores/ArticlesStore';
import * as ArticlesActions from '../actions/ArticlesActions';

export default class ArticlesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: ArticlesStore.articles
    }
  }

  componentWillMount() {
    ArticlesStore.on('loadArticles', () => {
      this.setState({
        articles: ArticlesStore.articles
      });
    })
  }

  fetchArticles() {
    ArticlesActions.startFetchArticles('cnn', 'top');
  }

  render() {
    const Articles = this.state.articles.map((article, index) => {
      // Use the spread operator to extract each key in the article object.
      return <Article key={index} {...article} />;
    });
    return (
      <div id='articles-container' className='row'>
        <h1>This is the articles container.</h1>
        <div>{Articles}</div>
      </div>
    );
  }
}

window.ArticleStore = ArticlesStore;
