function createStore(reducerFn, initialState) {
  let state = initialState;

  // Setup listners to keep track of when the state is changed
  // to triger rerenders (observer pattern)
  const listeners:(() => any)[] = [];

  const subscribe = (listener) => (
    listeners.push(listener)
  );

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducerFn(state, action);
    // call each listener function when the state is changed
    // its just a notification that state is changed
    console.log("Dispatch", action, listeners.length);
    listeners.forEach(l => l());
  };

  return {
    subscribe,
    getState,
    dispatch,
  };
}

function reducer(state, action) {
  if(action.type === 'ADD_MESSAGE') {
    return {
      messages: state.messages.concat(action.message),
    }
  }

  if(action.type === 'DELETE_MESSAGE') {
    return {
      messages: [
        ...state.messages.slice(0, action.index),
        ...state.messages.slice(
          action.index + 1, state.messages.length
        ),
      ],
    };
  }

  return state;
}

// initialize the store
const store = createStore(reducer, { messages: [] });

export default store;
