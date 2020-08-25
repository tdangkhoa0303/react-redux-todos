import { all } from "redux-saga/effects";
import todoActionWatcher from "./todo.saga";

export default function* rootSaga() {
  yield all([todoActionWatcher()]);
}
