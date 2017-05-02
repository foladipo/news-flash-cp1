import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';

class AppStatusStore extends EventEmitter {
  handleAction(action) {
    switch (action.type) {
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
}

const appStatusStore = new AppStatusStore();
dispatcher.register(appStatusStore.handleAction.bind(appStatusStore));
export default appStatusStore;
