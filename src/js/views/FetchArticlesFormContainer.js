import React from 'react';
import * as Utilities from '../constants/Utilities';
import * as ArticlesActions from '../actions/ArticlesActions';

export default class FetchArticlesFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSources: Utilities.getAllNewsSources()
    };
  }

  handleNewsSourceChange(event) {
    const sourceId = event.target.value;
    this.state.sourceId = sourceId;
    ArticlesActions.newsSourceChange(sourceId);
  }

  handleSortChange(event) {
    const sortBy = event.target.value;
    this.state.sort = sortBy;
    ArticlesActions.sortChange(sortBy);
  }

  handleFetchArticles(event) {
    ArticlesActions.startFetchArticles(this.state.sourceId, this.state.sort);
  }

  render() {
    const newsSourcesOptions = this.state.newsSources.map(source => {
      return <option value={source.id}>{source.name}</option>;
    });

    return (
      <div id='fetch-articles-form-container' className='col-md-6'>
        <div id='choose-news-source-container' className='col-xs-4'>
          <select id='choose-news-source' className='form-control' onChange={this.handleNewsSourceChange.bind(this)}>
            {newsSourcesOptions}
          </select>
        </div>
        <div id='choose-sort-container' className='col-xs-4'>
          <select id='choose-sort' className='form-control' disabled onChange={this.handleSortChange.bind(this)}></select>
        </div>
        <div id='fetch-articles-btn-container' className='col-xs-4'>
          <button id='fetch-articles-btn' className='btn btn-primary' disabled onClick={this.handleFetchArticles.bind(this)}>Get News</button>
        </div>
      </div>
    );
  }
}
