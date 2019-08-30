import createAct from '.';

const TYPE = 'increment';
const PAYLOAD = 2;

test('works with single argument', () => {
  const actionCreator = createAct(TYPE);

  const result = {
    type: TYPE,
  };

  expect(actionCreator()).toStrictEqual(result);
  expect(actionCreator.type).toBe(TYPE);
});

test('works with two arguments', () => {
  const actionCreator = createAct(TYPE, (payload) => ({
    payload,
  }));

  const result = {
    type: TYPE,
    payload: PAYLOAD,
  };

  expect(actionCreator(PAYLOAD)).toStrictEqual(result);
  expect(actionCreator.type).toBe(TYPE);
});

test('works with nested actions', () => {
  const number = 1443;
  const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  const object = {
    number,
    string,
  };
  const array = [number, string, object];

  const actionCreator = createAct(TYPE, (argNumber, argObject, argString, argArray) => ({
    data: {
      number: argNumber,
      object: argObject,
    },
    data2: {
      string: argString,
      array: argArray,
    },
  }));

  const result = {
    type: TYPE,
    data: {
      number,
      object,
    },
    data2: {
      string,
      array,
    },
  };

  expect(actionCreator(number, object, string, array)).toStrictEqual(result);
  expect(actionCreator.type).toBe(TYPE);
});
