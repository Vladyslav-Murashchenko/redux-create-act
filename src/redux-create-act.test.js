import createAct from '.';

test('simple usage works', () => {
  const TYPE = 'increment';
  const PAYLOAD = 2;

  const increment = createAct(TYPE, (payload) => ({
    payload,
  }));

  const result = {
    type: TYPE,
    payload: PAYLOAD,
  };

  expect(increment(PAYLOAD)).toStrictEqual(result);
  expect(increment.type).toBe(TYPE);
});
