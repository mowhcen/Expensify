import "normalize.css/normalize.css";
import "./styles/style.scss";

import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { addExpense } from "./actions/expenses";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
    addExpense({
        description: "Water bill",
        note: "payment for water bill",
        amount: 4500,
    })
);

store.dispatch(
    addExpense({
        description: "Gas bill",
        note: "payment for gas bill",
        createAt: 1000,
    })
);

store.dispatch(
    addExpense({
        description: "Rent",
        note: "payment for gas bill",
        amount: 109500,
    })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
