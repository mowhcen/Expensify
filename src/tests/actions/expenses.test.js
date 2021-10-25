import configureMockStore from "redux-mock-store";
import database from "../../firebase/firebase";
import expenses from "../fixtures/expenses";
import thunk from "redux-thunk";
import uuid from "uuid";

const id = uuid();

const uid = "garyhahbdafhhd";

const defaultAuthState = {
    auth: {
        uid,
    },
};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createAt }) => {
        expensesData[id] = { description, note, amount, createAt };
    });

    database
        .ref(`users/${uid}/expenses`)
        .set(expensesData)
        .then(() => {
            done();
        });
});

const sample_obj = {
    description: "new item",
    note: "sample note",
    amount: 1234,
    createAt: 123456789,
};

test("should setup remove expense action object", () => {
    const action = removeExpense({ id });

    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id,
    });
});

test("should remove expense from firebase", (done) => {
    const store = createMockStore(defaultAuthState);

    const id = expenses[2].id;

    store
        .dispatch(startRemoveExpense({ id }))
        .then(() => {
            const action = store.getActions();

            expect(action[0]).toEqual({
                type: "REMOVE_EXPENSE",
                id,
            });
            return database.ref(`users/${uid}/expenses/${id}`).once("value");
        })
        .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
});
