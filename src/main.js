import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";

import AppRouter, { history } from "./routers/AppRouter";
import { login, logout } from "./actions/auth";

import LoadingPage from "./components/LoadingPage";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";
import { startSetExpenses } from "./actions/expenses";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === "/") {
                history.push("/dashboard");
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
});
