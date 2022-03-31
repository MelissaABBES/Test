import {
  GET_CODELIST,
  ISLOAD,
  IS_NOTLOAD,
  RECEIVED_DETAILS,
  RECEIVED_LIST,
} from '../actions';

export const stateInitial = {
  isLoad: false,
  isNotLoad: false,
  list: [],
  answers: [],
  codeList: '',
};

export default (state = stateInitial, action = {}) => {
  switch (action.type) {
    case IS_NOTLOAD:
      return {
        ...state,
        isNotLoad: state.isNotLoad,
      };
    case ISLOAD:
      return {
        ...state,
        isLoad: !state.isLoad,
      };
    case GET_CODELIST:
      return {
        ...state,
        codeList: action.payload,
      };
    case RECEIVED_DETAILS:
      return {
        ...state,
        answers: action.payload,
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
