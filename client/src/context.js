import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, currentUser: state.currentUser };
    default:
      return;
  }
};

const initialState = { currentUser: { email: 'Leo@foodnome.com' } };

const CounterContext = React.createContext(initialState);

function CounterProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
