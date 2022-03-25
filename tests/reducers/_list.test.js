// // Je cherche ici à tester le reducer 'recipe'
// import { expect, test } from '@jest/globals';
// import recipeReducer, {initialState} from 'src/reducers/recipes';
// import {fetchList, receivedList} from 'src/actions/recipes';
// import data from 'public/api/list.json';
// // Je peux décrire un ensemble de tests à l'aide du mot 'describe'
// describe('Reducer for recipes', () => {
//     // 'test' me permet de décrire un comportement attendu
//     test('should be a function', () => {
//       expect(typeof recipeReducer).toBe('function');
//     });

//     test('Return a initial state if no params givens', () => {
//       expect(recipeReducer()).toEqual(initialState);
//     });

//     test('Return a modified state if given actions', () => {
//       // Fabriquer l'action 'FETCH_RECIPES'
//       // Executer le reducer en lui donnant le state intial 
//       // et l'action fabriquée
//       // on va décrire qu'on s'attend à ce que 
//       // le reducer qui reçoit un state et l'action nous renvoie
//       // un certain objet
//       const action = fetchRecipes();
//       const expectedResult = {
//         loading: true,
//         list: [],
//       }
//       expect(recipeReducer(initialState, action)).toEqual(expectedResult);
//     });

//     test('Return a state with recipes list with RECEIVED_RECIPES', () => {
//       // EXO 
      
//       // Fabriquer une action RECEIVED_RECIPES en lui donnant en payload
//       // les fausses datas (src/data.js)
//       const action = receivedRecipes(data);
//       // Faire un objet qui ressemble au résultat attendu
//       // une propriété list: data
//       // loading: false
//       const expectedState = {
//         list: data,
//         loading: false,
//       }
//       // Faire la vérification
//       // on s'attend à ce que le reducer exécuté avec l'action RECEIVED_RECIPES
//       // nous renovie l'objet attendu
//       const returnDuReducer = recipeReducer(initialState, action);
//       expect(returnDuReducer).toEqual(expectedState);
//     });



// });


