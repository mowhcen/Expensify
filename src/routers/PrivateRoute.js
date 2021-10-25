import { Redirect, Route } from "react-router-dom";

import Header from "../components/Header";
import React from "react";
import { connect } from "react-redux";

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...props
}) => {
    return (
        <Route
            {...props}
            component={(props) =>
                isAuthenticated ? (
                    <div>
                        <Header />
                        <Component {...props} />
                    </div>
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
