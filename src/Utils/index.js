import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import xtype from 'xtypejs';
import { fetchList } from '../actions';

export function isSurveyAnswersLoaded(state) {
  return state.isLoad === true;
}

export function isSurveyAnswersIsNotLoaded(state) {
  return state.isNotLoad === false;
}

export function getListOfSurveys(state) {
  return state.list;
}

export function isCodeListInState(state) {
  return state.codeList;
}

export function isAnswersInSurvey(state) {
  return state.answers;
}

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
