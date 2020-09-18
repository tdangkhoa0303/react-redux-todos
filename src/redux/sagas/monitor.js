import { take, race, delay, put, takeEvery } from "redux-saga/effects";
import {
  tokenRefreshRequesting,
  tokenRefreshSuccess,
  tokenRefreshFailed,
  logOut,
} from "../actions";

const ignoresActionTypes = ["TOKEN_REFRESH", "LOGIN_REQUESTING"];
const monitorableAction = (action) =>
  action.type.includes("REQUEST") &&
  ignoresActionTypes.every((e) => !action.type.includes(e));

const identifyAction = (action) =>
  action.type.split("_").slice(0, -1).join("_");

const getSuccessType = (action) => `${identifyAction(action)}_SUCCESS`;

const getFailType = (action) => `${identifyAction(action)}_FAILED`;

function* monitor(action) {
  const fail = yield race({
    success: take(getSuccessType(action)),
    fail: take(getFailType(action)),
    timeout: delay(1000),
  });

  if (fail && fail.statusCode === 401) {
    yield put(tokenRefreshRequesting());

    const success = race({
      succes: take(tokenRefreshSuccess().type),
      fail: take(tokenRefreshFailed().type),
    });

    success ? yield put(action) : yield put(logOut());
  }
}

export default function* () {
  yield takeEvery(monitorableAction, monitor);
}
