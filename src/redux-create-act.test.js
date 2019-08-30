import createAct from '.';

const TYPE = 'increment';
const PAYLOAD = 2;

test('works with single argument', () => {
  const actionCreator = createAct(TYPE);

  const result = {
    type: TYPE,
  };

  expect(actionCreator()).toStrictEqual(result);
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
