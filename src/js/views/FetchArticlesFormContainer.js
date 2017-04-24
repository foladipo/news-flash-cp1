import React from 'react';
import * as Utilities from '../constants/Utilities';
import * as ArticlesActions from '../actions/ArticlesActions';
import FetchArticlesFormStore from '../stores/FetchArticlesFormStore';

export default class FetchArticlesFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceId: '',
      newsSources: Utilities.getAllNewsSources(),
      sortBy: '',
      sorts: [],
      isSelectSortDisabled: true,
      isFetchArticlesBtnDisabled: true
    };
  }

  // NB: State components are merged. That is, when setState() is called, React 
  // merges the object provided into the current state. For details, see this link: 
  // https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-are-merged
  componentWillMount() {
    FetchArticlesFormStore.on('changeNewsSource', () => {
      // NB: There is a second form of setState() that takes a function as argument and 
      // supplies that function with previousState and props. The function should return an 
      // object that will be used to set the new state. For details, see this link:
      // https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
      this.setState((previousState, props) => {
        const availableSorts = FetchArticlesFormStore.availableSorts;
        const newState = {
          // Give sortBy a default value.
          sortBy: availableSorts[0],
          sorts: availableSorts,
          isSelectSortDisabled: false,
          isFetchArticlesBtnDisabled: false
        };
        
        return newState;
      });
    });

    FetchArticlesFormStore.on('startFetchArticles', () => {
      this.setState({
        isFetchArticlesBtnDisabled: true
      });
    });

    FetchArticlesFormStore.on('successFetchArticles', () => {
      finishFetch();
    });

    FetchArticlesFormStore.on('errorFetchArticles', () => {
      finishFetch();
    });

    const finishFetch = () => {
      this.setState({
        isFetchArticlesBtnDisabled: false
      });
    }
  }

  handleNewsSourceChange(event) {
    const sourceId = event.target.value;
    this.state.sourceId = sourceId;
    ArticlesActions.newsSourceChange(sourceId);
  }

  handleSortChange(event) {
    const sortBy = event.target.value;
    this.state.sortBy = sortBy;
    ArticlesActions.sortChange(sortBy);
  }

  handleFetchArticles(event) {
    ArticlesActions.startFetchArticles(this.state.sourceId, this.state.sortBy);
  }

  render() {
    const newsSourcesOptions = this.state.newsSources.map((source, index) => {
      return <option key={index} value={source.id}>{source.name}</option>;
    });

    const sortOptions = this.state.sorts.map((oneSort, index) => {
      return <option key={index} value={oneSort}>{oneSort[0].toUpperCase() + oneSort.substr(1)}</option>
    });

    return (
      <div id='fetch-articles-form-container' className='col-md-6'>
        <div id='choose-news-source-container' className='col-xs-4'>
          <select id='choose-news-source' className='form-control' 
          onChange={this.handleNewsSourceChange.bind(this)}>
            {newsSourcesOptions}
          </select>
        </div>
        <div id='choose-sort-container' className='col-xs-4'>
          <select id='choose-sort' className='form-control' disabled={this.state.isSelectSortDisabled} 
          onChange={this.handleSortChange.bind(this)}>
            {sortOptions}
          </select>
        </div>
        <div id='fetch-articles-btn-container' className='col-xs-4'>
          <button id='fetch-articles-btn' className='btn btn-primary' 
          disabled={this.state.isFetchArticlesBtnDisabled} onClick={this.handleFetchArticles.bind(this)}>
          Get News
          </button>
        </div>
      </div>
    );
  }
}
