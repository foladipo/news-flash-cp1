import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import DashboardAppContainer from '../src/js/views/DashboardAppContainer';
import ArticlesContainer from '../src/js/views/ArticlesContainer';
import FooterContainer from '../src/js/views/FooterContainer';
import NavContainer from '../src/js/views/NavContainer';

chai.use(chaiEnzyme());
const expect = chai.expect;

const wrapper = mount(<DashboardAppContainer />);

describe('The NewsFlash dashboard', () => {
  const children = wrapper.children();
  it('should contain three (3) subcomponents only', () => {
    expect(children).to.have.length(3);
  });

  it('should have a navigation section as the top component', () => {
    expect(children.at(0).is(NavContainer)).to.be.true;
  });

  it('should have an articles section as the middle component', () => {
    expect(children.at(1).is(ArticlesContainer)).to.be.true;
  });

  it('should have a footer section as the bottom component', () => {
    expect(children.at(2).is(FooterContainer)).to.be.true;
  });
});

describe('The app container for the NewsFlash dashboard', () => {
  it('should have an HTML id of app-container', function () {
    expect(wrapper).to.have.id('app-container');
  });

  it('should have an HTML class of col-lg-8', () => {
    expect(wrapper).to.have.className('col-lg-8');
  });

  it('should have an HTML class of col-md-10', () => {
    expect(wrapper).to.have.className('col-md-10');
  });

  it('should have an HTML class of col-sm-12', () => {
    expect(wrapper).to.have.className('col-sm-12');
  });
});
