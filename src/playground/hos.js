// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse
// Render hijacking
// Props manipulation
// Abstract

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>You not allowed to access this data</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//     <AdminInfo isAdmin={true} info="These are the Details" />,
//     document.getElementById("app")
// );

ReactDOM.render(
    <AuthInfo isAuthenticated={false} info="These are the Details" />,
    document.getElementById("app")
);
