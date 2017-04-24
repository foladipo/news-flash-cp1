import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';

class ArticlesStore extends EventEmitter {
  constructor() {
    super();
    this.articles = []
  }

  handleAction(action) {
    switch(action.type) {
      case 'SUCCESS_FETCH_ARTICLES':
        const articles = action.data.articles.map(article => {
          return {
            id: Date.now() * Math.random(),
            title: article.title,
            description: article.description,
            url: article.url,
            imageUrl: article.urlToImage,
            author: article.author,
            publishedAt: article.publishedAt
          };
        });
        this.articles = articles;
        this.emit('loadArticles');
        break;
    }
  }
}

const articleStore = new ArticlesStore();
dispatcher.register(articleStore.handleAction.bind(articleStore));

export default articleStore;
