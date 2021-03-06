import { altFilters, filters } from "../fixtures/filters";

import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import React from "react";
import moment from "moment";
import { shallow } from "enzyme";

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test("should render ExpenseListFilter correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilter with altData correctly", () => {
    wrapper.setProps({
        filters: altFilters,
    });
    expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
    const value = "search";
    wrapper.find("input").simulate("change", {
        target: { value },
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
    const value = "date";
    wrapper.setProps({
        filters: altFilters,
    });
    wrapper.find("select").simulate("change", {
        target: { value },
    });
    expect(sortByDate).toBeCalledWith();
});

test("should sort by amount", () => {
    const value = "amount";
    wrapper.find("select").simulate("change", {
        target: { value },
    });
    expect(sortByAmount).toBeCalledWith();
});

test("should handle date changes", () => {
    const startDate = moment(0).subtract(4, "days");
    const endDate = moment(0);
    wrapper.setProps({
        filters: altFilters,
    });
    wrapper.find("DateRangePicker").prop("onDatesChange")({
        startDate,
        endDate,
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus changes", () => {
    const focused = "endDate";
    wrapper.find("DateRangePicker").prop("onFocusChange")(focused);
    expect(wrapper.state("calenderFocus")).toEqual(focused);
});
