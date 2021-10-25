import ExpenseForm from "../../components/ExpenseForm";
import React from "react";
import expenses from "../fixtures/expenses";
import moment from "moment";
import { shallow } from "enzyme";

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

