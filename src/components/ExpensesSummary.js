import React from "react";
import { connect } from "react-redux";
import getExpenseTotal from "../selectors/expenses-total";
import getVisibleExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? "" : "s";
    const formattedExpensesTotal = numeral(expensesTotal / 100).format(
        "$0,0.00"
    );
    return (
        <div>
            <h1>
                Viewing {expenseCount} expense
                {expenseWord} totalling {formattedExpensesTotal}
            </h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpenseTotal(visibleExpenses),
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
