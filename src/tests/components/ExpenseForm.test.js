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

test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {},
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
    const value = "New description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change", {
        target: { value },
    });
    expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea change", () => {
    const value = "New note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change", {
        target: { value },
    });
    expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid input", () => {
    const value = "23.25";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
        target: { value },
    });
    expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount if invalid input", () => {
    const value = "23.255";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
        target: { value },
    });
    expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
        <ExpenseForm expense={expenses[2]} onSubmit={onSubmitSpy} />
    );
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {},
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[2].description,
        amount: expenses[2].amount,
        note: expenses[2].note,
        createAt: expenses[2].createAt,
    });
});

test("should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("SingleDatePicker").prop("onDateChange")(now);
    expect(wrapper.state("createAt")).toEqual(now);
});
