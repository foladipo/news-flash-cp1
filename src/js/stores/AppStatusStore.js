import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';

class AppStatusStore extends EventEmitter {
  handleAction(action) {
    switch (action.type) {
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

const appStatusStore = new AppStatusStore();
dispatcher.register(appStatusStore.handleAction.bind(appStatusStore));
export default appStatusStore;
