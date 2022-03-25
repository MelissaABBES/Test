import App from '../../src/components/App';
import Answers from '../../src/components/Answers';
import { Provider } from 'react-redux';
import store from '../../src/store';
import {shallow} from 'enzyme';
import listSurvey from '../../public/api/list.json';
import { expect } from '@jest/globals';

describe('<App />', () => {
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  test('it should have one title', () => {
      // Ici je souhaite tester que mon composant contienne un élément avec la class 'content-title'
      // Dans le wrapper on a accès aux méthodes du DOM qui permettent de faire des recherches
      // wrapper.find() équivalent de querySelectorAll()
      expect(wrapper.find('.head_name')).toHaveLength(1);
  });
});
