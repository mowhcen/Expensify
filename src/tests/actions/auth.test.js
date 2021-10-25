import { login, logout } from "../../actions/auth";

test("should generate login action object", () => {
    const uid = "acb13";
    const action = login(uid);
    expect(action).toEqual({
        type: "LOGIN",
        uid,
    });
});

