import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import DashboardAppContainer from '../src/js/views/DashboardAppContainer';

chai.use(chaiEnzyme());
const expect = chai.expect;

const wrapper = mount(<DashboardAppContainer />);

describe('The NewsFlash dashboard', () => {
  it('should have a navigation section', () => {
    expect(wrapper.NavContainer).to.not.equal(undefined);
  });

  it('should have an articles section', () => {  
    expect(wrapper.ArticlesContainer).to.not.equal(undefined);
  });

  it('should have a footer section', () => {  
    expect(wrapper.FooterContainer).to.not.equal(undefined);
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
