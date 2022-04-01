export function isSurveyAnswersLoaded(state) {
  return state.isLoad === true;
}

export function isSurveyAnswersIsNotLoaded(state) {
  return state.isNotLoad === true;
}

export function getListOfSurveys(state) {
  return state.list;
}

export function isCodeListInState(state) {
  return state.codeList;
}

export function isAnswersInSurvey(state) {
  const anwsers = state.answers;
  return anwsers;
}
