const TYPE = {
  PLUS: "count1/plus",
  MINUS: "count1/minus",
  INPUT: "count1/input",
}; // action에서 사용할 type을 미리 정의

const plus = {
  type: TYPE.PLUS,
};

const minus = {
  type: TYPE.MINUS,
};

const input = (input) => ({
  type: TYPE.INPUT,
  payload: { input },
});

export const action = { plus, minus, input };

export const initialize = { count1: 0 };

export const reducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.PLUS:
      return state + 1;

    case TYPE.MINUS:
      return state - 1;

    case TYPE.INPUT:
      return payload.input;

    default:
      return state;
  }
};
