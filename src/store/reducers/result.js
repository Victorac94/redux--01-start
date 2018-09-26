import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

/* Dentro de este archivo solo se tiene acceso al state definido en este archivo.
   No se tiene acceso al state global*/

//This is part of the Global State
const initialState = {
  results: []
}

//  No lo ponemos como en STORE_RESULT porque usar filter con un array podría darnos problemas
// con la utility function que hemos creado
const deleteResult = (state, action) => {
  //Cambiamos el state de forma inmutable
  const updatedArray = state.results.filter(result => result.id !== action.elemId);
  // .filter devuelve un array con segun el filtro puesto, no modifica el array original
  return updateObject(state, {results: updatedArray});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      //Cambiamos el state de forma inmutable
      //Aquí podemos modificar los datos que hayamos recibido del servidor
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
        // .concat devuelve un array con los cambios hechos, no modifica el array original
    case actionTypes.REMOVE_RESULT:
      //Aquí podemos modificar los datos que hayamos recibido del servidor
      return deleteResult(state, action);
  }

  return state;
}

export default reducer;
