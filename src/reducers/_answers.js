import {
  ISLOAD,
  IS_NOTLOAD,
  RECEIVED_DETAILS,
} from '../actions';

const stateInitial = {
  isLoad: false,
  isNotLoad: false,
  answers: [],
};

const reducer = (state = stateInitial, action = {}) => {
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
    case RECEIVED_DETAILS:
      return {
        ...state,
        answers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
