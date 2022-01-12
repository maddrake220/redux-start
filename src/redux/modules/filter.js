import { createActions, handleActions } from "redux-actions";
// action type definition and action create function
export const { showAll, showComplete } = createActions(
  "SHOW_ALL",
  "SHOW_COMPLETE",
  {
    prefix: "redux-start/filter",
  }
);

// initialState
const initialState = "ALL";

// reducer
const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: () => "COMPLETE",
  },
  initialState,
  { prefix: "redux-start/filter" }
);

export default reducer;
// docks pattern
// action type definition
// const SHOW_ALL = "redux-start/filter/SHOW_ALL";
// const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

// action create function
// export function showAll() {
//   return { type: SHOW_ALL };
// }

// export function showComplete() {
//   return { type: SHOW_COMPLETE };
// }

// initial value

// // reducer
// export default function reducer(previousState = initialState, action) {
//   if (action.type === SHOW_COMPLETE) {
//     return "COMPLETE";
//   }
//   if (action.type === SHOW_ALL) {
//     return "ALL";
//   }
//   return previousState;
// }
