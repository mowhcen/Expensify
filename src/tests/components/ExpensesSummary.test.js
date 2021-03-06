import { ExpensesSummary } from "../../components/ExpensesSummary";
import React from "react";
import { shallow } from "enzyme";

test("should correctly render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(
        <ExpensesSummary expenseCount={1} expensesTotal={234} />
    );
    expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expenses", () => {
    const wrapper = shallow(
        <ExpensesSummary expenseCount={23} expensesTotal={254654634} />
    );
    expect(wrapper).toMatchSnapshot();
});
