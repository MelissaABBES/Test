export const FETCH_LIST = 'FETCH_LIST';
export const RECEIVED_LIST = 'RECEIVED_LIST';
export const GET_CODELIST = 'GET_CODELIST';

export const FETCH_DETAILS = 'FETCH_DETAILS';
export const RECEIVED_DETAILS = 'RECEIVED_DETAILS';

export const ISLOAD = 'ISLOAD';
export const IS_NOTLOAD = 'IS_NOTLOAD';

export const fetchList = () => ({
  type: FETCH_LIST,
});

export const receivedList = (payload) => ({
  type: RECEIVED_LIST,
  payload,
});

export const fetchDetails = () => ({
  type: FETCH_DETAILS,
});

export const receivedDetails = (payload) => ({
  type: RECEIVED_DETAILS,
  payload,
});

export const getCodeList = (payload) => ({
  type: GET_CODELIST,
  payload,
});

export const isLoaded = () => ({
  type: ISLOAD,
});

export const isNotLoaded = () => ({
  type: IS_NOTLOAD,
});
