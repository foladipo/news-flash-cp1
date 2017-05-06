import chai from 'chai';
import sinon from 'sinon';
import * as ArticlesActions from '../../src/js/actions/ArticlesActions';
import dispatcher from '../../src/js/dispatcher/Dispatcher';

const expect = chai.expect;
const sourceId = 'cnn';
const sortBy = 'top';

describe('ArticlesActions', () => {
  it('should be defined', () => {
    expect(ArticlesActions).to.not.equal(undefined);
  });
});

describe('ArticlesActions', () => {
  it('should have a fetchArticlesFailed Action', () => {
    expect(ArticlesActions.fetchArticlesFailed).to.not.equal(undefined);
  });

  const firstSpy = sinon.spy();
  dispatcher.register(firstSpy);
  const error = {
    message: 'Network error',
  };
  ArticlesActions.fetchArticlesFailed(error);
  it('should successfully dispatch the fetchArticlesFailed Action', () => {
    expect(firstSpy.called).to.equal(true);
  });

  it('should dispatch the fetchArticlesFailed Action with the right payload', () => {
    const payload = {
      type: 'FETCH_ARTICLES_FAILED',
      message: 'Failed to load news articles. Please try again.',
      cause: error.message,
    };
    expect(firstSpy.calledWithExactly(payload)).to.equal(true);
  });

  it('should have an articlesFetched Action', () => {
    expect(ArticlesActions.articlesFetched).to.not.equal(undefined);
  });

  const secondSpy = sinon.spy();
  dispatcher.register(secondSpy);
  const mockApiResponse = {
    data: {
      status: 'ok',
      source: 'cnn',
      sortBy: 'top',
      articles: [
        {
          author: 'Frank Pallotta',
          title: 'FCC is reviewing complaints about Colbert\'s Trump jokes. But that\'s its job',
          description: 'The FCC is reviewing complaints about Stephen Colbert\'s comments about President Trump on Monday night that some found to be offensive.',
          url: 'http://money.cnn.com/2017/05/05/media/stephen-colbert-donald-trump-fcc/index.html',
          urlToImage: 'http://i2.cdn.turner.com/money/dam/assets/151117083530-stephen-colbert-late-show-desk-780x439.jpg',
          publishedAt: '2017-05-05T09:41:36Z',
        },
        {
          author: 'Robert Mclean',
          title: 'Colbert mocks House Republicans after American Health Care Act passes',
          description: 'Stephen Colbert took House Republicans to task Thursday on \'The Late Show\' for passing legislation to replace Obamacare.',
          url: 'http://money.cnn.com/2017/05/05/media/colbert-gop-american-health-care-act/index.html',
          urlToImage: 'http://i2.cdn.turner.com/money/dam/assets/151117153751-stephen-colbert-late-show-standing-780x439.jpg',
          publishedAt: '2017-05-05T12:58:22Z',
        },
      ],
    },
  };
  ArticlesActions.articlesFetched(mockApiResponse);
  it('should successfully dispatch the articlesFetched Action', () => {
    expect(secondSpy.called).to.equal(true);
  });

  it('should dispatch the articlesFetched Action with the right payload', () => {
    const payload = {
      type: 'ARTICLES_FETCHED',
      data: mockApiResponse.data,
    };
    expect(firstSpy.calledWithExactly(payload)).to.equal(true);
  });

  it('should have a fetchArticles Action', () => {
    expect(ArticlesActions.fetchArticles).to.not.equal(undefined);
  });

  const thirdSpy = sinon.spy();
  dispatcher.register(thirdSpy);
  ArticlesActions.fetchArticles(sourceId, sortBy);
  it('should successfully dispatch the fetchArticles Action', () => {
    expect(thirdSpy.called).to.equal(true);
  });

  it('should dispatch the fetchArticles Action with the right payload', () => {
    const payload = {
      type: 'FETCH_ARTICLES',
      message: 'Fetching articles... Please wait...',
      sourceId,
      sort: sortBy,
    };
    expect(thirdSpy.calledWithExactly(payload)).to.equal(true);
  });

  it('should have a changeNewsSource Action', () => {
    expect(ArticlesActions.changeNewsSource).to.not.equal(undefined);
  });

  const fourthSpy = sinon.spy();
  dispatcher.register(fourthSpy);
  ArticlesActions.changeNewsSource(sourceId);
  it('should successfully dispatch the changeNewsSource Action', () => {
    expect(fourthSpy.called).to.equal(true);
  });

  it('should dispatch the changeNewsSource Action with the right payload', () => {
    const payload = {
      type: 'CHANGE_NEWS_SOURCE',
      sourceId,
    };
    expect(fourthSpy.calledWithExactly(payload)).to.equal(true);
  });

  it('should have a changeSort Action', () => {
    expect(ArticlesActions.changeSort).to.not.equal(undefined);
  });

  const fifthSpy = sinon.spy();
  dispatcher.register(fifthSpy);
  ArticlesActions.changeSort(sortBy);
  it('should successfully dispatch the changeSort Action', () => {
    expect(fifthSpy.called).to.equal(true);
  });

  it('should dispatch the changeSort Action with the right payload', () => {
    const payload = {
      type: 'CHANGE_SORT',
      sort: sortBy,
    };
    expect(fifthSpy.calledWithExactly(payload)).to.equal(true);
  });

  it('should have a fetchSources Action', () => {
    expect(ArticlesActions.fetchSources).to.not.equal(undefined);
  });

  const sixthSpy = sinon.spy();
  dispatcher.register(sixthSpy);
  ArticlesActions.fetchSources();
  it('should successfully dispatch the fetchSources Action', () => {
    expect(sixthSpy.called).to.equal(true);
  });

  it('should dispatch the fetchSources Action with the right payload', () => {
    const payload = {
      type: 'FETCH_SOURCES',
      message: 'We\'re updating our list of news sources... Please wait...',
    };
    expect(sixthSpy.calledWithExactly(payload)).to.equal(true);
  });

  it('should have a sourcesFetched Action', () => {
    expect(ArticlesActions.sourcesFetched).to.not.equal(undefined);
  });

  const seventhSpy = sinon.spy();
  dispatcher.register(seventhSpy);
  const mockApiResponse2 = {
    data: {
      sources: [
        {
          name: 'CNN',
          id: 'cnn',
        },
        {
          name: 'ESPN',
          id: 'espn',
        },
      ],
    },
  };
  ArticlesActions.sourcesFetched(mockApiResponse2);
  it('should successfully dispatch the sourcesFetched Action', () => {
    expect(seventhSpy.called).to.equal(true);
  });

  it('should dispatch the sourcesFetched Action with the right payload', () => {
    const payload = {
      type: 'SOURCES_FETCHED',
      data: mockApiResponse2.data,
    };
    expect(seventhSpy.calledWithExactly(payload)).to.equal(true);
  });

  it('should have a fetchSourcesFailed Action', () => {
    expect(ArticlesActions.fetchSourcesFailed).to.not.equal(undefined);
  });

  const eigthSpy = sinon.spy();
  dispatcher.register(eigthSpy);
  ArticlesActions.fetchSourcesFailed();
  it('should successfully dispatch the fetchSourcesFailed Action', () => {
    expect(eigthSpy.called).to.equal(true);
  });

  it('should dispatch the fetchSourcesFailed Action with the right payload', () => {
    const payload = {
      type: 'FETCH_SOURCES_FAILED',
      message: 'Ooops! Update failed. Please check your internet connection and try again.',
    };
    expect(eigthSpy.calledWithExactly(payload)).to.equal(true);
  });
});
