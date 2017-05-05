import React from 'react';
import uuid from 'uuid';
import * as ArticlesActions from '../actions/ArticlesActions';
import dashboardStore from '../stores/DashboardStore';

export default class FetchArticlesFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceId: '',
      newsSources: [],
      sortBy: '',
      sortOptions: [],
      isSelectSortDisabled: true,
      isFetchArticlesBtnDisabled: true,
    };
  }

  componentWillMount() {
    dashboardStore.on('sourcesFetched', () => {
      this.setState(() => {
        const sources = dashboardStore.getSources();
        const firstSourceId = sources[0].id;
        const availableSorts = dashboardStore.getSorts(firstSourceId);
        const newState = {
          sourceId: firstSourceId,
          newsSources: sources,
          sortBy: availableSorts[0],
          sortOptions: availableSorts,
          isSelectSortDisabled: false,
          isFetchArticlesBtnDisabled: false,
        };

        return newState;
      });
    });

    dashboardStore.on('changeNewsSource', () => {
      this.setState(() => {
        const availableSorts = dashboardStore.getSorts(this.state.sourceId);

        if (availableSorts === undefined) {
          return {};
        }

        const newState = {
          sortBy: availableSorts[0],
          sortOptions: availableSorts,
          isSelectSortDisabled: false,
          isFetchArticlesBtnDisabled: false,
        };

        return newState;
      });
    });

    dashboardStore.on('fetchArticles', () => {
      this.setState({
        isFetchArticlesBtnDisabled: true,
      });
    });

    const finishFetch = () => {
      this.setState({
        isFetchArticlesBtnDisabled: false,
      });
    };

    dashboardStore.on('articlesFetched', () => {
      finishFetch();
    });

    dashboardStore.on('fetchArticlesFailed', () => {
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

  handleFetchArticles() {
    ArticlesActions.fetchArticles(this.state.sourceId, this.state.sortBy);
  }

  render() {
    const newsSourcesOptions = this.state.newsSources.map(source =>
      <option
        key={uuid.v4()}
        value={source.id}
      >
        {source.name}
      </option>);

    const sortOptions = this.state.sortOptions.map(oneSort =>
      <option
        key={uuid.v4()}
        value={oneSort}
      >
        {oneSort[0].toUpperCase() + oneSort.substr(1)}
      </option>,
    );

    return (
      <div id="fetch-articles-form-container" className="col-md-12">
        <div id="choose-news-source-container" className="col-xs-4">
          <select
            id="choose-news-source"
            className="form-control"
            onChange={this.handleChangeNewsSource.bind(this)}
          >
            {newsSourcesOptions}
          </select>
        </div>
        <div id="choose-sort-container" className="col-xs-4">
          <select
            id="choose-sort" className="form-control"
            disabled={this.state.isSelectSortDisabled}
            onChange={this.handleChangeSort.bind(this)}
          >
            {sortOptions}
          </select>
        </div>
        <div id="fetch-articles-btn-container" className="col-xs-4">
          <button
            id="fetch-articles-btn" className="btn btn-primary"
            disabled={this.state.isFetchArticlesBtnDisabled}
            onClick={this.handleFetchArticles.bind(this)}
          >
          Get News
          </button>
        </div>
      </div>
    );
  }
}
