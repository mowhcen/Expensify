import { Redirect, Route } from "react-router-dom";

import React from "react";
import { connect } from "react-redux";

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...props
}) => {
    return (
        <Route
            {...props}
            component={(props) =>
                isAuthenticated ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
