import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { userSelector } from '../../components/user';

export const ProtectedRoute = (props) => {
    const user = useSelector(userSelector, shallowEqual);

    return (
        <Route path={props.path}>
            {({ location }) =>
                user ? (
                    props.children
                ) : (
                    <Redirect to={{ pathname: '/login', state: { location } }} />
                )
            }
        </Route>
    )
}
