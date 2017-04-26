import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';

class WelcomeMessageContainerStore extends EventEmitter {
  constructor() {
    super();
    this.htmlClasses = [];
  }

  handleAction(action) {
    switch(action.type) {
      case 'START_FETCH_ARTICLES':
        this.htmlClasses = ['row', 'hidden'];
        this.emit('loadArticles');
        break;
    }
  }
}

const welcomeMessageStore = new WelcomeMessageContainerStore();
dispatcher.register(welcomeMessageStore.handleAction.bind(welcomeMessageStore));

export default welcomeMessageStore;
