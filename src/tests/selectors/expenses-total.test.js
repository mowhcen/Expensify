import expenses from "../fixtures/expenses";
import getExpenseTotal from "../../selectors/expenses-total";

test("should return 0 if no expense", () => {
    const total = getExpenseTotal([]);
    expect(total).toEqual(0);
});

test("should correctly add up a single expense", () => {
    const total = getExpenseTotal([expenses[0]]);
    expect(total).toEqual(expenses[0].amount);
});

