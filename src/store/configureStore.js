import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import authReducer from "../reducers/auth";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth: authReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
