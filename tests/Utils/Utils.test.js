import { expect, test } from '@jest/globals';
import { isSurveyAnswersLoaded, isSurveyAnswersIsNotLoaded, isCodeListInState, getListOfSurveys } from '../../src/Utils';
import data from '../../public/api/list.json';

describe('isSurveyAnswersLoaded selector', () => {
  describe('when state isLoaded is `false`', () => {
    test('should return `false`', () => {
      expect(isSurveyAnswersLoaded({isLoad: false})).toBe(false);
    });
  })
})

describe('isSurveyAnswersIsNotLoaded selector', () => {
  describe('when state isLoaded is `true`', () => {
    test('should return `true`', () => {
      expect(isSurveyAnswersIsNotLoaded({isNotLoad: true})).toBe(true);
    });
  })
})

describe('isCodeListInState selector', () => {
  describe('when state codeList is empty', () => {
    test('should return " " ', () => {
      expect(isCodeListInState({codeList: ''})).toBe("");
    });
  })
})

