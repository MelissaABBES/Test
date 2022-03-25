/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_DETAILS, receivedDetails,
} from 'src/actions';

const detailMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      next(action);
      const { codeList } = store.getState();
      axios({
        method: 'GET',
        url: `http://localhost:8080/api/${codeList}.json`,
      })
        .then((res) => {
          const actionReceivedGamesInfos = receivedDetails(res.data);
          store.dispatch(actionReceivedGamesInfos);
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default detailMiddleware;
