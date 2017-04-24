import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import ArrivalMessage from '../src/js/views/ArrivalMessage';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('ArrivalMessage', () => {
  it('should be defined', () => {
    expect(ArrivalMessage).to.not.equal(undefined);
  });
});

const wrapper = mount(<ArrivalMessage />);
const children = wrapper.children();
describe('ArrivalMessage', () => {
  it('should have a class of row when rendered', () => {
    expect(wrapper).to.have.className('row');
  });

  it('should NOT have a class of hidden when it is first rendered', () => {
    expect(wrapper).to.not.have('hidden');
  });

  it('should have exactly two (2) direct children', () => {
    expect(children).to.have.length(2);
  });

  const firstChild = children.at(0);
  it('should have a first child that is an h1', () => {
    expect(firstChild.is('h1')).to.equal(true);
  });

  it('should have a first child that is a class of display-4', () => {
    expect(firstChild.is('.display-4')).to.equal(true);
  });

  it('should have a first child that is a class of text-center', () => {
    expect(firstChild.is('.text-center')).to.equal(true);
  });

  it('should have a first child that is a class of bg-success', () => {
    expect(firstChild.is('.bg-success')).to.equal(true);
  });

  // For details of why I decided to use render(), see:
  // http://airbnb.io/enzyme/docs/api/ReactWrapper/text.html#-text-string
  it('should have a first child that has the text \'Welcome to your dashboard\'', () => {
    expect(firstChild.render().text()).to.equal('Welcome to your dashboard');
  });

  const secondChild = children.at(1);
  it('should have a second child that is a p element', () => {
    expect(secondChild.is('p')).to.equal(true);
  });

  it('should have a second child that has a class of lead', () => {
    expect(secondChild.is('.lead')).to.equal(true);
  });

  // For details of why I decided to use render(), see:
  // http://airbnb.io/enzyme/docs/api/ReactWrapper/text.html#-text-string
  const welcomeText = 'To read news articles from your desired source, please use ' +
    'the form in the navigation bar.';
  it(`should have a second child that has text of '${welcomeText}'`, () => {
    expect(secondChild.render().text()).to.equal(welcomeText);
  });
});

describe('When its state is set to something new, ArrivalMessage', () => {
  // The aim of this test is to simulate how ArrivalMessage will react when 
  // its Store changes, in turn due to an appropriate Action.
  const newState = {
    htmlClasses: ['row', 'hidden']
  };
  wrapper.setState(newState);
  it(`should have class hidden when ArrivalMessage.state.htmlClasses is set to ${newState.htmlClasses}`, () => {
    expect(wrapper).to.have.className('hidden');
  });
});
