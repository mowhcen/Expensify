const getExpenseTotal = (expenses) => {
    const sum = expenses
        .map((expense) => expense.amount)
        .reduce((a, b) => a + b, 0);

    return sum;
};

export default getExpenseTotal;
