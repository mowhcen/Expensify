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

test("should add an expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: "55",
            description: "cigarette",
            note: "sample note 4",
            amount: 3185,
            createAt: 0,
        },
    };

    const state = expensesReducer(sample_array_obj, action);

    expect(state.length).toBe(4);
});

test("should edit an expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: sample_array_obj[1].id,
        updates: {
            description: "cigarette",
        },
    };

    const state = expensesReducer(sample_array_obj, action);

    expect(state[1].description).toBe("cigarette");
});
test("should not edit expense if expense not found", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "4",
        updates: {
            description: "cigarette",
        },
    };

    const state = expensesReducer(sample_array_obj, action);

    expect(state).toEqual(sample_array_obj);
});
