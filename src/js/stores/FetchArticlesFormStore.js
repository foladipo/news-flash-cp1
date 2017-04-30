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
      case 'NEWS_SOURCE_CHANGE':
        this.availableSorts = Utilities.getAvailableSortForNewsSource(action.sourceId);
        this.emit('changeNewsSource');
        break;

      case 'SORT_CHANGE':
        this.emit('changeSort');
        break;

      case 'START_FETCH_ARTICLES':
        this.emit('startFetchArticles');
        break;

      case 'ERROR_FETCH_ARTICLES':
        this.emit('errorFetchArticles');
        break;

      case 'SUCCESS_FETCH_ARTICLES':
        this.emit('successFetchArticles');
        break;
    }
  }
}

const fetchArticlesFormStore = new FetchArticlesFormStore();
dispatcher.register(fetchArticlesFormStore.handleAction.bind(fetchArticlesFormStore));

export default fetchArticlesFormStore;
