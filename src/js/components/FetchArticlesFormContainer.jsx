import React from 'react';
import * as Utilities from '../constants/Utilities';
import * as ArticlesActions from '../actions/ArticlesActions';
import fetchArticlesFormStore from '../stores/FetchArticlesFormStore';

export default class FetchArticlesFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceId: '',
      newsSources: Utilities.getAllNewsSources(),
      sortBy: '',
      sorts: [],
      isSelectSortDisabled: true,
      isFetchArticlesBtnDisabled: true,
    };
  }

  componentWillMount() {
    fetchArticlesFormStore.on('changeNewsSource', () => {
      this.setState(() => {
        const availableSorts = fetchArticlesFormStore.getAvailableSorts();
        const newState = {
          sortBy: availableSorts[0],
          sorts: availableSorts,
          isSelectSortDisabled: false,
          isFetchArticlesBtnDisabled: false,
        };

        return newState;
      });
    });

    fetchArticlesFormStore.on('fetchArticles', () => {
      this.setState({
        isFetchArticlesBtnDisabled: true,
      });
    });

    const finishFetch = () => {
      this.setState({
        isFetchArticlesBtnDisabled: false,
      });
    };

    fetchArticlesFormStore.on('articlesFetched', () => {
      finishFetch();
    });

    fetchArticlesFormStore.on('fetchArticlesFailed', () => {
      finishFetch();
    });
  }

  handleChangeNewsSource(event) {
    const sourceId = event.target.value;
    this.state.sourceId = sourceId;
    ArticlesActions.changeNewsSource(sourceId);
  }

  handleChangeSort(event) {
    const sortBy = event.target.value;
    this.state.sortBy = sortBy;
    ArticlesActions.changeSort(sortBy);
  }

  handleFetchArticles(event) {
    ArticlesActions.fetchArticles(this.state.sourceId, this.state.sortBy);
  }

  render() {
    const newsSourcesOptions = this.state.newsSources.map((source, index) => <option key={index} value={source.id}>{source.name}</option>);

    const sortOptions = this.state.sorts.map((oneSort, index) => <option key={index} value={oneSort}>{oneSort[0].toUpperCase() + oneSort.substr(1)}</option>);

    return (
      <div id="fetch-articles-form-container" className="col-md-12">
        <div id="choose-news-source-container" className="col-xs-4">
          <select
            id="choose-news-source" className="form-control"
            onChange={this.handleChangeNewsSource.bind(this)}
          >
            {newsSourcesOptions}
          </select>
        </div>
        <div id="choose-sort-container" className="col-xs-4">
          <select
            id="choose-sort" className="form-control" disabled={this.state.isSelectSortDisabled}
            onChange={this.handleChangeSort.bind(this)}
          >
            {sortOptions}
          </select>
        </div>
        <div id="fetch-articles-btn-container" className="col-xs-4">
          <button
            id="fetch-articles-btn" className="btn btn-primary"
            disabled={this.state.isFetchArticlesBtnDisabled} onClick={this.handleFetchArticles.bind(this)}
          >
          Get News
          </button>
        </div>
      </div>
    );
  }
}
