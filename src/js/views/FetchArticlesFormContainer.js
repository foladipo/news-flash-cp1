import React from 'react';
import * as Utilities from '../constants/Utilities';

export default class FetchArticlesFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSources: Utilities.getAllNewsSources()
    };
  }

  render() {
    const newsSourcesOptions = this.state.newsSources.map(source => {
      return <option value={source.id}>{source.name}</option>;
    });

    return (
      <div id='fetch-articles-form-container' className='col-md-6'>
        <div id='choose-news-source-container' className='col-xs-4'>
          <select id='choose-news-source' className='form-control'>
            {newsSourcesOptions}
          </select>
        </div>
        <div id='choose-sort-container' className='col-xs-4'>
          <select id='choose-sort' className='form-control' disabled></select>
        </div>
        <div id='fetch-articles-btn-container' className='col-xs-4'>
          <button id='fetch-articles-btn' className='btn btn-primary' disabled>Get News</button>
        </div>
      </div>
    );
  }
}
