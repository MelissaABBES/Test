import {
  GET_CODELIST,
  ISLOAD,
  IS_NOTLOAD,
  RECEIVED_DETAILS,
  RECEIVED_LIST,
  CHANGE_VISIBILITY,
} from '../actions';

export const stateInitial = {
  isLoad: false,
  isNotLoad: true,
  list: [],
  answers: [],
  codeList: '',
};

const reducer = (state = stateInitial, action = {}) => {
  switch (action.type) {
    case CHANGE_VISIBILITY:
      return {
        ...state,
        isLoad: !state.isLoad,
        isNotLoad: !state.isNotLoad,
      };
    case IS_NOTLOAD:
      return {
        ...state,
        isNotLoad: !state.isNotLoad,
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

export default reducer;
