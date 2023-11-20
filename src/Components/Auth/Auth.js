import React from 'react'
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

export default function Auth({ children }) {

    const isLogin = localStorage.getItem('token');

    return (
        <Fragment>

            {
                isLogin ?
                    children
                    :
                    <Navigate to={'/login'} />
            }

        </Fragment>
    )
}
