import React, { useEffect, Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import history from "./helpers/history";
import { useSelector, useDispatch } from "react-redux";
import { tokenRefreshRequesting } from "./redux/actions";

import "react-toastify/dist/ReactToastify.css";

import { Todos, SignUp, LogIn } from "./pages";

function App() {
  const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!auth.isAuth) dispatch(tokenRefreshRequesting());
  // }, [auth, dispatch]);

  return (
    <div className="App">
      <Router history={history}>
        <ToastContainer autoClose={3000} />
        <Switch>
          {!auth.isAuth && <Route path="/" component={LogIn} />}
          <Route path="/" component={Todos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
