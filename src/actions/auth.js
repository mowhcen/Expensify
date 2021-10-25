import { firebase, googleAuthProvider } from "../firebase/firebase";

const login = (uid) => ({
    type: "LOGIN",
    uid,
});

const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

const logout = () => ({
    type: "LOGOUT",
});

const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export { startLogin, startLogout, logout, login };
