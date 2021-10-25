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
