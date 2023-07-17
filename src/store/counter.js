// Action Type
const INCREMENT = "counter/increment";
const DECREMENT = "counter/decrement";
// Action Creator
export function increaseCounter(num) {
  return { type: INCREMENT, payload: num };
}

export function decreaseCounter(num) {
  return { type: DECREMENT, payload: num };
}

// Initial
const INITIAL_STATE = 0;
// Reducer
export function counterReducer(state = INITIAL_STATE, action) {
  if (action.type === INCREMENT) {
    return state + action.payload;
  } else if (action.type === DECREMENT) {
    return state - action.payload;
  }

  return state;
}
