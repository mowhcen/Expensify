import filterReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
    const state = filterReducer(undefined, { type: "@@INIT" });

    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    });
});
