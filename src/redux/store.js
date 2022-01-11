import { applyMiddleware, createStore } from "redux";
import { todoApp } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// function middleware1(store) {
//   // next: 다음 middleware를 지칭
//   console.log("middleware1", 0);
//   return (next) => {
//     console.log("middleware1", 1, next);
//     return (action) => {
//       console.log("middleware1", 2);
//       const returnValue = next(action);
//       console.log("middleware1", 3);
//       return returnValue;
//     };
//   };
// }

// function middleware2(store) {
//   // next: 다음 middleware를 지칭
//   console.log("middleware2", 0);
//   return (next) => {
//     console.log("middleware2", 1, next);
//     return (action) => {
//       console.log("middleware2", 2);
//       const returnValue = next(action);
//       console.log("middleware2", 3);
//       return returnValue;
//     };
//   };
// }
// const store = createStore(todoApp, applyMiddleware(middleware1, middleware2));
const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));

export default store;
