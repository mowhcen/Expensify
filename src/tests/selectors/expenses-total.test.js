import expenses from "../fixtures/expenses";
import getExpenseTotal from "../../selectors/expenses-total";

test("should return 0 if no expense", () => {
    const total = getExpenseTotal([]);
    expect(total).toEqual(0);
});
