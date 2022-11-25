export function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return state + 1;
    case "mius":
      return state - 1;
    case "nanugi":
      return state / 10;

    case "multi":
      return state * 10;
    default:
      return 0;
  }
}
