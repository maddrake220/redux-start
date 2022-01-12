import axios from "axios";
import { useNavigate } from "react-router-dom";
// action type definition

// github API 호출 시작하는 것을 의미
const GET_USERS_START = "redux-start/users/GET_USERS_START";
// github API 호출에 대한 응답이 성공적으로 돌아온 경우
const GET_USERS_SUCCESS = "redux-start/users/GET_USERS_SUCCESS";
// github API 호출에 대한 응답이 실패한 경우
const GET_USERS_FAIL = "redux-start/users/GET_USERS_FAIL";

// middleware가 자동으로 payload를 통해 type을 변조해서 dispatch 한다.
// -> 각각에 맞게 액션 타입을 생성해야한다.

// redux-promise-middleware definition
const GET_USERS = "redux-start/users/GET_USERS";

const GET_USERS_PENDING = "redux-start/users/GET_USERS_PENDING";
const GET_USERS_FULFILLED = "redux-start/users/GET_USERS_FULFILLED";
const GET_USERS_REJECTED = "redux-start/users/GET_USERS_REJECTED";

// action create function
export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}
export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}
export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// initialState
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// redux
export default function redux(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
}

// redux-thunk
export function getUsersThunk() {
  // 보통 container에서 처리하던 dispatch를
  // 액션을 생성하는 쪽에서 사용하는 것
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

// redux-promise-middleware
export function getUsersPromise() {
  return {
    type: GET_USERS,
    // promise 함수
    // dispatch와 try catch 할 필요 없음.
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}
