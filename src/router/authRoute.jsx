import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux'

export const AuthRoute = ({ component: Component, ...res }) => {

    const state = useSelector(state => state.authorization)

    return (
        <Route {...res} strict sensitive render={
            (props) => {
                if (state.status) {
                    switch (state.role) {
                        case state.role:
                            return (
                            <Redirect to={{
                                pathname: '/dashboard',
                                state: {
                                    from: props.location
                                }
                            }} />
                            )
                        default: 
                            return false
                    }
                } else {
                    
                    return (
                        <Component {...props} />
                    )
                }
            }
        } />
    )
}