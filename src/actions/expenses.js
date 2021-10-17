import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createAt = 0,
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt,
    },
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id,
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates,
});

export { removeExpense, editExpense, addExpense };
