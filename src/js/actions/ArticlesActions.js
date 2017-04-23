import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';

const API_KEY = '213327409d384371851777e7c7f78dfe';
export function startFetchArticles(sourceId, sort) {
  // Tell stores that we've started fetching articles. Then, fetch the articles 
  // and call errorFetchArticles() or successFetchArticles() based on the failure 
  // or otherwise of the fetch attempt.
  dispatcher.dispatch({
    type: 'START_FETCH_ARTICLES',
    message: 'Fetching articles... Please wait...',
    sourceId,
    sort
  });
  
  const url = `https://newsapi.org/v1/articles?source=${sourceId}&sortBy=${sort}&apiKey=${API_KEY}`;
  axios.get(url)
    .then(response => {
      successFetchArticles(response);
    })
    .catch(error => {
      errorFetchArticles(error);
    });
}

export function errorFetchArticles(error) {
  console.log(error);
  dispatcher.dispatch({
    type: 'ERROR_FETCH_ARTICLES',
    message: 'Failed to load news articles. Please try again.',
    cause: error.message
  });
}

export function successFetchArticles(response) {
  // The data object contains other meta data about the request e.g the sortBy used.
  const data = response.data;
  console.log(response);
  dispatcher.dispatch({
    type: 'SUCCESS_FETCH_ARTICLES',
    data
  });
}

// There's a form to be used to choose the news source a user wants to read and 
// the sorting of the news items by recency, popularity etc. The next few actions are 
// fired as the user changes the form.
export function newsSourceChange(newsSourceId) {
  dispatcher.dispatch({
    type: 'NEWS_SOURCE_CHANGE',
    sourceId: newsSourceId
  });
}

export function sortChange(sort) {
  dispatcher.dispatch({
    type: 'SORT_CHANGE',
    sort
  });
}

window.startFetchArticles = startFetchArticles;
