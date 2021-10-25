import moment from "moment";
import sample_array_obj from "../fixtures/expenses";
import selectExpense from "../../selectors/expenses";

test("should filter by text value", () => {
    const filters = {
        text: "e",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,
    };
    const result = selectExpense(sample_array_obj, filters);

    expect(result).toEqual([sample_array_obj[2], sample_array_obj[1]]);
});

test("should filter by startDate", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined,
    };

    const result = selectExpense(sample_array_obj, filters);

    expect(result).toEqual([sample_array_obj[2], sample_array_obj[0]]);
});

test("should filter by end Date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0),
    };

    const result = selectExpense(sample_array_obj, filters);

    expect(result).toEqual([sample_array_obj[0], sample_array_obj[1]]);
});

test("should filter by date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,
    };

    const result = selectExpense(sample_array_obj, filters);

    expect(result).toEqual([
        sample_array_obj[2],
        sample_array_obj[0],
        sample_array_obj[1],
    ]);
});

test("should filter by amount", () => {
    const filters = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined,
    };

    const result = selectExpense(sample_array_obj, filters);

    expect(result).toEqual([
        sample_array_obj[1],
        sample_array_obj[2],
        sample_array_obj[0],
    ]);
});
