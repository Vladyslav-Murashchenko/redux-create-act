const createAct = (type, actionCreator) => {
  const createAction = (...args) => {
    const action = actionCreator(...args);

    action.type = type;

    return action;
  };

  createAction.type = type;

  return createAction;
};

export default createAct;
