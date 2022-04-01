import { expect, test } from '@jest/globals';
import {usefetchAllList, useSortList} from '../../src/Utils';
import { getListOfSurveys } from '../../src/selectors'

describe('usefetchAllList utils', () => {
    test('should be a function', () => {
      expect(typeof usefetchAllList).toBe('function');
    });
})

describe('useSortList utils', () => {
  test('should be the equal to getListOfSurveys', () => {
    expect(typeof useSortList).toEqual(typeof getListOfSurveys);
  });
})
