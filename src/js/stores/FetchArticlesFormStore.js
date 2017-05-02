import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';
import * as Utilities from '../constants/Utilities';

class FetchArticlesFormStore extends EventEmitter {
  constructor() {
    super();
    this.availableSorts = [];
  }

  handleAction(action) {
    switch (action.type) {
      case 'CHANGE_NEWS_SOURCE':
        this.availableSorts = Utilities.getAvailableSortForNewsSource(action.sourceId);
        this.emit('changeNewsSource');
        break;

      case 'CHANGE_SORT':
        this.emit('changeSort');
        break;

      case 'FETCH_ARTICLES':
        this.emit('fetchArticles');
        break;

      case 'FETCH_ARTICLES_FAILED':
        this.emit('fetchArticlesFailed');
        break;

      case 'ARTICLES_FETCHED':
        this.emit('articlesFetched');
        break;
    }
  }

  getAvailableSorts() {
    return this.availableSorts;
  }
}

const fetchArticlesFormStore = new FetchArticlesFormStore();
dispatcher.register(fetchArticlesFormStore.handleAction.bind(fetchArticlesFormStore));

export default fetchArticlesFormStore;
