# redux-create-act
Small and simple util to avoid string constants for actions in redux, which doesn't forse you to use FSA or custom createReducer.

## Installation
```
npm i redux-create-act
```

## Usage
Just create your action creator as usual, 
but wrap it to `createAct` like here: 
```
createAct('YOUR_TYPE', yourActionCreator)
```
Notice that you don't need `type` field in your action.

```js
import createAct from 'redux-create-act';

const add = createAct('ADD', (payload) => ({
  payload,
}));

const subtract = createAct('SUBTRACT', (payload) => ({
  payload,
}));

const reducer = (state = 0, action = {}) => {
  switch (action.type) {
    case add.type:
      return state + action.payload;
    case subtract.type:
      return state - action.payload;
    default:
      return state;
  }
};
```

You can use it with redux-thunk as usual.
Here is rewiten example from redux-thunk doc.

```js
...
function fetchSecretSauce() {
  return fetch('https://www.google.com/search?q=secret+sauce');
}

const makeASandwich = createAct('MAKE_SANDWICH', (forPerson, secretSauce) => ({
  forPerson,
  secretSauce,
}));

const apologize = createAct(
  'APOLOGIZE',
  (fromPerson, toPerson, error) => ({
    fromPerson,
    toPerson,
    error,
  }),
);

function makeASandwichWithSecretSauce(forPerson) {
  return function(dispatch) {
    return fetchSecretSauce().then(
      (sauce) => dispatch(makeASandwich(forPerson, sauce)),
      (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
    );
  };
}

```
