import * as actionTypes from './actionTypes';

export const saveResult = res => {
  /*
  const updatedResult = res * 2;

  Aquí podriamos modificar los datos que hayamos recibido del servidor. Aunque
  es mejor modificar los datos en el reducer, y aquí (en action creators)
  solo manejar código asíncrono.
  */
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  }
}

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout( () => {
      // const oldState = getState().ctr.counter;
      // console.log(oldState);
      dispatch(saveResult(res));
    }, 2000)
  }
}

export const removeResult = (id) => {
  return {
    type: actionTypes.REMOVE_RESULT,
    elemId: id
  }
}
