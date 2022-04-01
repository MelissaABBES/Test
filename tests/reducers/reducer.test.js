import React from 'react';
import { expect, test } from '@jest/globals';
import reducer, { stateInitial } from '../../src/reducers';
import { fetchList, receivedList } from '../../src/actions';
import data from '../../public/api/list.json';

describe('Reducer for Survey List', () => {

  test('should be a object', () => {
    expect(typeof stateInitial).toBe('object');
  });

  test('should be a function', () => {
    expect(typeof reducer).toBe('function');
  });

  test('Return a initial state if no params givens', () => {
    expect(reducer()).toEqual(stateInitial);
  });

  test('Return a modified state if given actions', () => {
    // Fabriquer l'action 'FETCH_RECIPES'
    // Executer le reducer en lui donnant le state intial 
    // et l'action fabriquée
    // on va décrire qu'on s'attend à ce que 
    // le reducer qui reçoit un state et l'action nous renvoie
    // un certain objet
    const action = fetchList();
    const expectedResult = {
      isLoad: false,
      isNotLoad: false,
      list: [],
      answers: [],
      codeList: '',
    }
    expect(reducer(stateInitial, action)).toEqual(expectedResult);
  });

  test('Return a state with surveys list with RECEIVED_LIST', () => {
    // EXO 
    
    // Fabriquer une action RECEIVED_RECIPES en lui donnant en payload
    // les fausses datas (src/data.js)
    const action = receivedList(data);
    // Faire un objet qui ressemble au résultat attendu
    // une propriété list: data
    // loading: false
    const expectedState = {
      isLoad: false,
      isNotLoad: false,
      list: data,
      answers: [],
      codeList: '',
    }
    // Faire la vérification
    // on s'attend à ce que le reducer exécuté avec l'action RECEIVED_RECIPES
    // nous renovie l'objet attendu
    const returnDuReducer = reducer(stateInitial, action);
    expect(returnDuReducer).toEqual(expectedState);
  });

})
