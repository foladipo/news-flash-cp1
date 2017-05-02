import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';
import FooterContainer from '../src/js/components/FooterContainer';

chai.use(chaiEnzyme());
const expect = chai.expect;

const wrapper = mount(<FooterContainer />);

describe('FooterContainer', () => {
  it('should be defined', () => {
    expect(FooterContainer).to.not.equal(undefined);
  });
});

describe('FooterContainer', () => {
  it('should have an id of footer-container', () => {
    expect(wrapper).to.have.id('footer-container');
  });

  it('should have a class of row', () => {
    expect(wrapper).to.have.className('row');
  });
});
