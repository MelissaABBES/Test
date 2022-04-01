import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList } from '../actions';
import { getListOfSurveys, isCodeListInState, isAnswersInSurvey } from '../selectors';

export function usefetchAllList() {
  const dispatch = useDispatch();
  return useEffect(() => {
    const action = fetchList();
    dispatch(action);
  }, []);
}

export function useSortList() {
  const lists = useSelector(getListOfSurveys);
  const sortList = [].concat(lists).sort((a, b) => (a.itemM > b.itemM ? 1 : -1));
  return sortList;
}

export function useCodeList() {
  const codeList = useSelector(isCodeListInState);
  return codeList;
}

export function useResultType() {
  const results = useSelector(isAnswersInSurvey);
  const getType = results.map((type) => type.type);
  return getType;
}
