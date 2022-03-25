import {
  GET_CODELIST,
  RECEIVED_LIST,
} from '../actions';

const stateInitial = {
  list: [],
  codeList: '',
};

const reducer = (state = stateInitial, action = {}) => {
  switch (action.type) {
    case GET_CODELIST:
      return {
        ...state,
        codeList: action.payload,
      };
    case RECEIVED_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
