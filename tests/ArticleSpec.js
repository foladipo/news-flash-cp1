import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';
import Article from '../src/js/views/Article';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Article component', () => {
  it('should be defined', () => {
    expect(Article).to.not.equal(undefined);
  });
});

const testProps = {
  id: '1001',
  title: 'It is alive!',
  description: 'The dog is alive! Yes! And that halves the price of garri in the market.',
  url: 'https://foo.example.com',
  imageUrl: 'https://bar.example.com/logo.png',
  author: 'Lagbaja Tamedu',
  publishedAt: '2016-04-21T13:45:57Z',
};

const emptyProps = {};
const firstWrapper = mount(<Article {...emptyProps} />);
describe('When NOT initialized with any props, the Article component', () => {
  it('should NOT have an id prop', () => {
    expect(firstWrapper).to.not.have.prop('id');
  });

  it('should NOT have a title prop', () => {
    expect(firstWrapper).to.not.have.prop('title');
  });

  it('should NOT have a description prop', () => {
    expect(firstWrapper).to.not.have.prop('description');
  });

  it('should NOT have a url prop', () => {
    expect(firstWrapper).to.not.have.prop('url');
  });

  it('should NOT have an imageUrl prop', () => {
    expect(firstWrapper).to.not.have.prop('imageUrl');
  });

  it('should NOT have an author prop', () => {
    expect(firstWrapper).to.not.have.prop('author');
  });

  it('should NOT have a publishedAt prop', () => {
    expect(firstWrapper).to.not.have.prop('publishedAt');
  });
});

// Use the spread operator to extract the content of testProps, instead of doing it one by one.
const secondWrapper = mount(<Article {...testProps} />);
console.log(`The set of props used to initialize Article is: \n\n${JSON.stringify(testProps)}\n`);
describe('When initialized with a correct set of props, the Article component', () => {
  it('should have an id prop', () => {
    expect(secondWrapper).to.have.prop('id');
  });

  it(`should have its id prop equal to ${testProps.id}`, () => {
    expect(secondWrapper).to.have.prop('id').deep.equal(testProps.id);
  });

  it('should have a title prop', () => {
    expect(secondWrapper).to.have.prop('title');
  });

  it(`should have its title prop equal to ${testProps.title}`, () => {
    expect(secondWrapper).to.have.prop('title').deep.equal(testProps.title);
  });

  it('should have a description prop', () => {
    expect(secondWrapper).to.have.prop('description');
  });

  it(`should have its description prop equal to ${testProps.description}`, () => {
    expect(secondWrapper).to.have.prop('description').deep.equal(testProps.description);
  });

  it('should have a url prop', () => {
    expect(secondWrapper).to.have.prop('url');
  });

  it(`should have its url prop equal to ${testProps.url}`, () => {
    expect(secondWrapper).to.have.prop('url').deep.equal(testProps.url);
  });

  it('should have an imageUrl prop', () => {
    expect(secondWrapper).to.have.prop('imageUrl');
  });

  it(`should have its imageUrl prop equal to ${testProps.imageUrl}`, () => {
    expect(secondWrapper).to.have.prop('imageUrl').deep.equal(testProps.imageUrl);
  });

  it('should have an author prop', () => {
    expect(secondWrapper).to.have.prop('author');
  });

  it(`should have its author prop equal to ${testProps.author}`, () => {
    expect(secondWrapper).to.have.prop('author').deep.equal(testProps.author);
  });

  it('should have a publishedAt prop', () => {
    expect(secondWrapper).to.have.prop('publishedAt');
  });

  it(`should have its publishedAt prop equal to ${testProps.publishedAt}`, () => {
    expect(secondWrapper).to.have.prop('publishedAt').deep.equal(testProps.publishedAt);
  });
});

describe('For the elements in an Article,', () => {
  it('all links should open in a new tab', () => {
    expect(secondWrapper.find('a').every('[target="_blank"]')).to.equal(true);
  });

  it('the Article itself should have a row class', () => {
    expect(secondWrapper).to.have.className('row');
  });

  it('the Article should have two direct children', () => {
    expect(secondWrapper.children()).to.have.length(2);
  });

  const firstChild = secondWrapper.childAt(0);
  it('the first child should be a div', () => {
    expect(firstChild.is('div')).to.equal(true);
  });

  it('the first child to have a class of col-xs-4', () => {
    expect(firstChild).to.have.className('col-xs-4');
  });

  const secondChild = secondWrapper.childAt(1);
  it('the second child should be a div', () => {
    expect(secondChild.is('div')).to.equal(true);
  });

  it('the second child to have a class of col-xs-8', () => {
    expect(secondChild).to.have.className('col-xs-8');
  });
});
