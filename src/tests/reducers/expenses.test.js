import expensesReducer from "../../reducers/expenses";
import sample_array_obj from "../fixtures/expenses";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: sample_array_obj[1].id,
    };

    const state = expensesReducer(sample_array_obj, action);

    expect(state).toEqual([sample_array_obj[0], sample_array_obj[2]]);
});

test("should not remove expenses if id not found ", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "234",
    };

    const state = expensesReducer(sample_array_obj, action);

    expect(state).toEqual(sample_array_obj);
});
