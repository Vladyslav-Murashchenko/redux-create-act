# redux-create-act
Small and simple util to avoid string constants for actions in redux, which doesn't forse you to use FSA or custom createReducer.

## Installation
`npm i redux-create-act`

## Usage
```jsx
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
