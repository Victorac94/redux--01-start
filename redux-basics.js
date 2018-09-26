const redux = require("redux");
const createStore = redux.createStore;

/* Inicializamos la variable que va a hacer de state*/
const initialState = {
  counter: 0
}

//Reducer
/* En (state = initialState, action) el primer argumento inicializa el parametro state
 a un valor default en caso de que cuando se haya llamado la función rootReducer no se
 haya provisto un valor a ese primer argumento, como cuando se llama a rootReducer por
 primera vez. (en createStore(rootReducer)). Podemos tener varios reducer pero al final
 todos se combinan en uno solo. El reducer tiene que retornar un nuevo state */
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    //Aqui cambiamos el state de forma inmutable, creando primero una copia y después
    //modificando una propiedad de esa copia.
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state;
}


//Store
/* Cuando creamos un Central Store, con createStore(), hay que pasarle obligatoriamente un
Reducer, en este caso rootReducer. Con store.getState() cogemos el state actual del Central Store */
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
/* Subscription hace que no tengamos que estar llamando manualmente store.getState() sin saber
si algo en el state ha cambiado. Subscription solo se ejecuta cuando algo en el state ya ha cambiado.
store.subscribe() recibe como argumento una función sin argumentos que es la que realiza todas las acciones
necesarias. .subscribe() se ejecuta cuando se despacha una acción. */
store.subscribe(() => {
  return console.log('[Subscription]', store.getState());
});


//Dispatching Action
/* Para mandar una acción tenemos que llamar dispatch a store (store.dispatch), y darle
un objeto con al menos una key llamada 'type' con un valor preferiblemente en mayusculas.
Además se pueden poner mas keys/values como name, id, key...etc. También podemos agrupar
todos estos otros valores en una unica key, a la que podemos llamar payload. */
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
