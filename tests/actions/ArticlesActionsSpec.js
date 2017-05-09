import chai from 'chai';
import * as ArticlesActions from '../../src/js/actions/ArticlesActions';

const expect = chai.expect;

describe('ArticlesActions', () => {
  it('should be defined', () => {
    expect(ArticlesActions).to.not.equal(undefined);
  });

  const numberOfActions = Object.keys(ArticlesActions).length;
  it('should have eight (8) Actions defined', () => {
    expect(numberOfActions).to.equal(8);
  });
});
