import { expect, test } from '@jest/globals';
import { isSurveyAnswersLoaded, isSurveyAnswersIsNotLoaded, isCodeListInState } from '../../src/selectors';

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
    test('should return empty ', () => {
      expect(isCodeListInState({codeList: ''})).toBe("");
    });
  })
})

