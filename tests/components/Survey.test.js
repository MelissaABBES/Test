import React from 'react';
import Survey from '../../src/components/Survey';
import App from '../../src/components/App';
import { shallow, mount, ShallowWrapper } from 'enzyme';
import { expect } from '@jest/globals';

import { Provider } from 'react-redux';
import store from '../../src/store';

describe('<Survey />', () => {
  // const wrapper = shallow(<Provider store={store}><Survey name='name' code='code' handleCode={() => {}} handleVisibility={() => {}} infosVisible={true} /></Provider>);
  // console.log(wrapper.debug({ ignoreProps: true }));
  // test('it should have one title', () => {
  //   console.log(wrapper.debug({ ignoreProps: true }));
  //     expect(wrapper.find('Survey')).toHaveLength(1);
  // });

  // it('<Survey />', () => {
  //   const component = shallow(<Provider store={store}><Survey name='name' code='code' handleCode={() => {}} handleVisibility={() => {}} infosVisible={true} /></Provider>);
  //   console.log(component.debug({ ignoreProps: true }));
  //   const wrapper = component.find('.survey');
  //   expect(wrapper.lenght).toBe(2);
  // });

  it('Provider contain App', () => {
    let providerComponent = shallow(<Provider store={store}><App /></Provider>);
    console.log(providerComponent.debug());
    const wrapper = providerComponent.find('App');
    expect(wrapper.lenght).toBe(1);
  })

  // it('<App />', () => {
  //   const component = shallow(<Provider store={store}><App /></Provider>);
  //   console.log(component.debug());
  //   const wrapper = component.find('.head');
  //   expect(wrapper.lenght).toBe(1);
  // })

});
