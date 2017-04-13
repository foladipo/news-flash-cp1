import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect, should } from 'chai';

import FirstComponent from '../src/js/views/FirstComponent';

describe('<FirstComponent />', () => {
  it('should be defined', () => {
    const wrapper = shallow(<FirstComponent />);
    expect(wrapper.find('.firstComponent').length).to.equal(1);

  });
});
