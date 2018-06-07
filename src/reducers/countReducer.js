const initialState = {
  count: 25
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };

    case "DECREMENT":
      return { ...state, count: state.count - action.payload };
      break;

    default:
      return state;
  }
}
