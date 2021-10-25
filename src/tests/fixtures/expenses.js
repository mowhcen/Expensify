import moment from "moment";

export default [
    {
        id: "1",
        description: "Gum",
        note: "sample note 1",
        amount: 1234,
        createAt: 0,
    },
    {
        id: "2",
        description: "Rent",
        note: "sample note 2",
        amount: 9876,
        createAt: moment(0).subtract(4, "days").valueOf(),
    },
    {
        id: "3",
        description: "Credit Card",
        note: "sample note 3",
        amount: 4567,
        createAt: moment(0).add(4, "days").valueOf(),
    },
];
