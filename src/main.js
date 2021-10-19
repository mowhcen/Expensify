import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";

import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { addExpense } from "./actions/expenses";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
