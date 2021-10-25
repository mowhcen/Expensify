import ExpenseListItem from "../../components/ExpenseListItem";
import React from "react";
import expenses from "../fixtures/expenses";
import { shallow } from "enzyme";

test("should render ExpenseListItem with a expense", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
});
