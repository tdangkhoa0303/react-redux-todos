import { all } from "redux-saga/effects";
import todoWatcher from "./todo.saga";
import authWatcher from "./auth.saga";
import monitor from "./monitor";

export default function* rootSaga() {
  yield all([todoWatcher(), authWatcher(), monitor()]);
}
