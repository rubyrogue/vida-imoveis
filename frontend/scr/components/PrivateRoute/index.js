import React from "react";
import { Route, useHistory } from 'react-router-dom';
import auth from "../../data/Adm/firebaseConfg";

const PrivateRoute = ({ children, ...rest }) => {
    const history = useHistory();
    auth.onAuthStateChanged((user) => {
        if (!user) {
            history.push('/administrador');
            return null;
        }
    });

    return <Route {...rest}>{children}</Route>
}

export default PrivateRoute
