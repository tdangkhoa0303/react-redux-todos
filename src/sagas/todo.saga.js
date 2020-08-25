import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
  getTodoAPI,
  addTodoAPI,
  toggleTodoAPI,
  completeAllTodoAPI,
} from "../helpers/api";
import { toast } from "react-toastify";
import { getTodosSuccess, getTodosFailed } from "../actions";
import * as types from "../actions/actionTypes";

function* fetchTodoSaga() {
  try {
    const {
      data: { data },
    } = yield call(getTodoAPI);
    yield toast.success("Fetching data successfully!");
    yield put(getTodosSuccess(data));
  } catch (err) {
    yield toast.error("Fetching data failed");
    yield put(getTodosFailed(err));
  }
}

function* addTodoSaga(action) {
  try {
    yield call(addTodoAPI, action.newTodo);
    yield toast.success("Creating todo successfully!");
  } catch (err) {
    yield toast.error("Creating todo failed!");
  }
}

function* toggleTodoSaga(action) {
  try {
    yield call(toggleTodoAPI, action.id, action.completed);
    yield toast.success("Toggle todo successfully!");
  } catch (err) {
    yield toast.error("Toggle todo failed!");
  }
}

function* completeAllTodoSaga(action) {
  try {
    yield call(completeAllTodoAPI);
    yield toast.success("Completing todos successfully!");
  } catch (err) {
    yield toast.error("Completing todos failed!");
  }
}

export default function* actionWatcher() {
  yield takeLatest(types.GET_TODO, fetchTodoSaga);
  yield takeLatest(types.ADD_TODO, addTodoSaga);
  yield takeLatest(types.COMPLETE_ALL_TODO, completeAllTodoSaga);
  yield takeEvery(types.TOGGLE_TODO, toggleTodoSaga);
}
