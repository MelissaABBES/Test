import React from 'react';
import App from '../../src/components/App';
import { shallow } from 'enzyme';
import { expect, test } from '@jest/globals';

import { Provider } from 'react-redux';
import store from '../../src/store';

describe('<Survey />', () => {

  test('App Should have 1 app', () => {
    let providerComponent = shallow(<App />);
    const wrapper = providerComponent.find('.app');
    expect(wrapper).toHaveLength(1);
  })

  test('App Should have 1 head', () => {
    const component = shallow(<App />);
    const wrapper = component.find('.head');
    expect(wrapper).toHaveLength(1);
  })

});
