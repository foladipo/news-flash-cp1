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
    expect(wrapper.id).to.equal('app-container');
  });
});

describe('The app container for the NewsFlash dashboard', () => {
  it('should have an HTML class of col-mg-8', () => {
    const hasColLg8 = wrapper.class.split(' ').contains('col-lg-8');
    expect(hasColLg8).to.equal(true);
  });

  it('should have an HTML class of col-md-10', () => { 
    const hasColMd10 = wrapper.class.split(' ').contains('col-md-10');
    expect(hasColMd10).to.equal(true);
  });

  it('should have an HTML class of col-sm12', () => {
    const hasColSm12 = wrapper.class.split(' ').contains('col-sm-12');
    expect(hasColSm12).to.equal(true);
  });
});
