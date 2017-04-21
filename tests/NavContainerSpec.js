import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';
import NavContainer from '../src/js/views/NavContainer';

chai.use(chaiEnzyme());
const expect = chai.expect;

const wrapper = mount(<NavContainer />);

describe('NavContainer', () => {
  it('should be defined', () => {
    expect(NavContainer).to.not.equal(undefined);
  });
});

describe('NavContainer', () => {
  it('should have an id of nav-container', () => {
    expect(wrapper).to.have.id('nav-container');
  });

  it('should have a class of row', () => {
    expect(wrapper).to.have.className('row');
  });
});
