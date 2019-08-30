const defaultActionCreator = () => ({});

const createAct = (type, actionCreator = defaultActionCreator) => {
  const createAction = (...args) => {
    const action = actionCreator(...args);

    action.type = type;

    return action;
  };

  createAction.type = type;

  return createAction;
};

export default createAct;
