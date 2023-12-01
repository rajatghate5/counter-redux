const initialState = 0;
export default function incDecReducers(state = initialState, action) {
  switch (action.type) {
    case "increment_number":
      return state + action.payload;
    case "decrement_number":
      return state - action.payload;

    default:
      return state;
  }
}
