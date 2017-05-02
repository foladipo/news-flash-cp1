import React from 'react';
import Article from './Article';
import articlesStore from '../stores/ArticlesStore';
import * as ArticlesActions from '../actions/ArticlesActions';
import WelcomeMessageContainer from './WelcomeMessageContainer';
import AppStatusContainer from './AppStatusContainer';

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
