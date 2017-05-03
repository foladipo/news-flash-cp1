import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import FetchArticlesForm from '../src/js/components/FetchArticlesForm';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('FetchArticlesForm', () => {
  it('should be defined', () => {
    expect(FetchArticlesForm).to.not.equal(undefined);
  });
});

const wrapper = mount(<FetchArticlesForm />);
describe('When rendered, FetchArticlesForm', () => {
  it('should have an id of fetch-articles-form-container', () => {
    expect(wrapper).to.have.id('fetch-articles-form-container');
  });

  it('should have a class of col-md-12', () => {
    expect(wrapper).to.have.className('col-md-12');
  });

  const children = wrapper.children();
  it('should have three (3) direct children', () => {
    expect(children).to.have.length(3);
  });

  it('should have three (3) direct children that each have a class of col-xs-4', () => {
    expect(children.every('.col-xs-4')).to.equal(true);
  });

  it('should have a first child with an id of choose-news-source-container', () => {
    expect(children.at(0)).to.have.id('choose-news-source-container');
  });

  it('should have a first child that contains a select element with an id of choose-news-source', () => {
    expect(children.at(0).find('select')).to.have.id('choose-news-source');
  });

  it('should have a second child with an id of choose-sort-container', () => {
    expect(children.at(1)).to.have.id('choose-sort-container');
  });

  it('should have a second child that contains a select element with an id of choose-sort', () => {
    expect(children.at(1).find('select')).to.have.id('choose-sort');
  });

  it('should have a #choose-sort select element that\'s disabled by default', () => {
    expect(children.at(1).find('select')).to.have.attr('disabled');
  });

  it('should have a third child with an id of fetch-articles-btn-container', () => {
    expect(children.at(2)).to.have.id('fetch-articles-btn-container');
  });

  it('should have a third child that contains a button element with an id of fetch-articles-btn', () => {
    expect(children.at(2).find('button')).to.have.id('fetch-articles-btn');
  });

  it('should have a #fetch-articles-btn button element that\'s disabled by default', () => {
    expect(children.at(2).find('button')).to.have.attr('disabled');
  });

  it('should have a #fetch-articles-btn button element that also has a class btn', () => {
    expect(children.at(2).find('button')).to.have.className('btn');
  });

  it('should have a #fetch-articles-btn button element that also has a class btn-primary', () => {
    expect(children.at(2).find('button')).to.have.className('btn-primary');
  });
});
