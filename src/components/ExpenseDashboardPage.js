import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import React from "react";

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
