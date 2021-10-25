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
