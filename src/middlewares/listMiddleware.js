/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_LIST, receivedList,
} from 'src/actions';

const listMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_LIST:
      axios({
        method: 'GET',
        url: 'http://localhost:8080/api/list.json',
      })
        .then((res) => {
          const actionReceivedGamesInfos = receivedList(res.data);
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

export default listMiddleware;
