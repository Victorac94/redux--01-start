import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

/* Dentro de este archivo solo se tiene acceso al state definido en este archivo.
   No se tiene acceso al state global*/

//This is part of the Global State
const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  //A estas funciones ( updateObject() ) que actualizan el estado se les llama 'utility functions'
  //Se pueden usar para tener este archivo un poco más limpio
   switch (action.type) {
      case actionTypes.INCREMENT:
         //Cambiamos el state de forma inmutable
         //Aquí podemos modificar los datos que hayamos recibido del servidor
         return updateObject(state, {counter: state.counter + 1});
      case actionTypes.DECREMENT:
         //Cambiamos el state de forma inmutable
         //Aquí podemos modificar los datos que hayamos recibido del servidor
         return updateObject(state, {counter: state.counter - 1});
      case actionTypes.ADD:
         //Cambiamos el state de forma inmutable
         //Aquí podemos modificar los datos que hayamos recibido del servidor
         return updateObject(state, {counter: state.counter + action.value});
      case actionTypes.SUBSTRACT:
         //Cambiamos el state de forma inmutable
         //Aquí podemos modificar los datos que hayamos recibido del servidor
         return updateObject(state, {counter: state.counter - action.value})
   }
  return state;
}

export default reducer;

/*
Tambien podemos actualizar el state de la siguiente manera:

case actionTypes.INCREMENT:
  const newState = Object.assign({}, state);
  newState.counter = state.counter + 1;
  return newState;

O de la siguiente manera:

case actionTypes.INCREMENT:
  return {
    ...state,
    counter: state.counter + 1
}

*/
