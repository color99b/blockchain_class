const TYPE = {
  ADD: "comment/add",
  Edit: "comment/edit",
  REMOVE: "comment/remove",
};

const add = (text, userName, boardId) => ({
  type: TYPE.ADD,
  payload: { text, userName, boardId },
});

const edit = (id, text) => ({
  type: TYPE.Edit,
  payload: { id, text },
});

const remove = (id) => ({
  type: TYPE.REMOVE,
  payload: { id },
});

export const initialize = [];
export const action = { add, edit, remove };
let id = 0;
export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD:
      id++;
      return [
        { id, ...payload, createdAt: new Date().toLocaleString() },
        ...state,
      ];
    case TYPE.Edit: {
      const index = state.findIndex((item) => item.id == payload.id);
      return [
        ...state.slice(0, index),
        {
          id: index,
          ...state[index],

          ...payload,
          createdAt: new Date().toLocaleString(),
        },
        ...state.slice(index + 1),
      ];
    }
    case TYPE.REMOVE: {
      console.log(...state);
      console.log("들어옴");
      const index = state.findIndex((item) => item.id == payload.id);

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
};
