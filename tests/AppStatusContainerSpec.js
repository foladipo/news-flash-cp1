import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render } from 'enzyme';
import AppStatusContainer from '../src/js/views/AppStatusContainer';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('AppStatusContainer', () => {
  it('should be defined', () => {
    expect(AppStatusContainer).to.not.equal(undefined);
  });
});

const wrapper = mount(<AppStatusContainer />);
describe('AppStatusContainer', () => {
  it('should have an id of app-status-container', () => {
    expect(wrapper).to.have.id('app-status-container');
  });

  it('should have a class hidden', () => {
    expect(wrapper).to.have.className('hidden');
  });

  const children = wrapper.children();
  it('should have three (3) direct children', () => {
    expect(children).to.have.length(3);
  });

  // Expect the first child to be an img that's hidden by default
  const firstChild = children.at(0);
  it('should have a first child that\'s an img', () => {
    expect(firstChild.is('img')).to.equal(true);
  });

  it('should have a first child that has an id of loading-articles', () => {
    expect(firstChild).to.have.id('loading-articles');
  });

  it('should have a first child that has src="/img/loading-img.png"', () => {
    expect(firstChild).to.have.attr('src', '/img/loading-img.png');
  });

  it('should have a first child that has class img-responsive', () => {
    expect(firstChild).to.have.className('img-responsive');
  });

  it('should have a first child that has class center-block', () => {
    expect(firstChild).to.have.className('center-block');
  });

  // Expect the first child to be an img that's hidden by default
  const secondChild = children.at(1);
  it('should have a second child that\'s an img', () => {
    expect(secondChild.is('img')).to.equal(true);
  });

  it('should have a second child that has an id of error-loading-articles', () => {
    expect(secondChild).to.have.id('error-loading-articles');
  });

  it('should have a second child that has src="/img/error-loading-img.png"', () => {
    expect(secondChild).to.have.attr('src', '/img/error-loading-img.png');
  });

  it('should have a second child that has class img-responsive', () => {
    expect(secondChild).to.have.className('img-responsive');
  });

  it('should have a second child that has class center-block', () => {
    expect(secondChild).to.have.className('center-block');
  });

  it('should have a second child that has class hidden', () => {
    expect(secondChild).to.have.className('hidden');
  });

  const thirdChild = children.at(2);
  it('should have third child that is an h3', () => {
    expect(thirdChild.is('h3')).to.equal(true);
  });

  it('should have a third child that contains no text by default', () => {
    expect(thirdChild.render().text()).to.equal('');
  });
});
