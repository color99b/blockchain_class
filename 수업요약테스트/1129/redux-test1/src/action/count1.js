export const COUNT1 = {
  PLUS: "count1/plus",
  MIUS: "count1/minus",
};

const plus = (input) => ({
  type: COUNT1.PLUS,
  payload: { input },
});

const minus = (input) => ({
  type: COUNT1.MIUS,
  payload: { input },
});

export const actions = { plus, minus };
