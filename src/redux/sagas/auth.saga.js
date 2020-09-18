import { call, put, cancelled, take, cancel, fork } from "redux-saga/effects";
import { requestTokenRefresh, requestLogin } from "../../helpers/api";
import history from "../../helpers/history";
import {
  loginFailed,
  loginSuccess,
  logOut,
  tokenRefreshFailed,
  tokenRefreshSuccess,
} from "../actions";
import * as types from "../../contants/actionTypes";

const customApiError = (statusCode, message) => {
  let error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

function* tokenRefreshFlow() {
  try {
    const {
      data: { status, user },
    } = yield call(requestTokenRefresh);
    if (status === "success") yield put(tokenRefreshSuccess(user));
  } catch (err) {
    yield put(tokenRefreshFailed());
    history.push("/login");
  }
}

function* logInFlow(email, password) {
  try {
    const {
      status: statusCode,
      data: { status, user, message },
    } = yield call(requestLogin, email, password);
    if (status !== "success") throw customApiError(statusCode, message);
    yield put(loginSuccess(user));
    history.push("/");
  } catch (err) {
    yield console.log(err);
    yield put(loginFailed(err));
  } finally {
    if (yield cancelled()) {
      history.push("/login");
    }
  }
}

function* authWatcher() {
  while (true) {
    const { email, password } = yield take(types.LOGIN_REQUESTING);

    const task = yield fork(logInFlow, email, password);

    const action = yield take([
      types.LOGIN_FAILED,
      types.LOG_OUT,
      types.TOKEN_REFRESH_REQUESTING,
    ]);

    if (action.type === types.TOKEN_REFRESH_REQUESTING)
      yield fork(tokenRefreshFlow);

    if (action.type === types.LOG_OUT) yield cancel(task);

    yield call(logOut);
  }
}

export default authWatcher;
