import { ExpenseList } from "../../components/ExpenseList";
import React from "react";
import expenses from "../fixtures/expenses";
import { shallow } from "enzyme";

test("should render ExpenseList with expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseList with empty message", () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});
