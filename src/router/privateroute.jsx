import React from 'react'
import { Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...res }) => {

    const pathname = res.path

        const RouteComponent = (props) => {
            return (
                (pathname !== props.url) ? (
                    <Redirect to={{
                        pathname: '/',
                        state: {
                            from: props.location
                        }
                    }} />
                ) : <Component {...props} />
            )
        }

    return (
        <Route {...res} strict sensitive render={
            (props) => {

                if (res.status) {

                    switch (res.role) {
                        case 'admin':
                            return <RouteComponent {...props} url="/dashboard"/>
                        default:
                            return (
                                <Redirect to={{
                                    pathname: '/',
                                    state: {
                                        from: props.location
                                    }
                                }} />
                            )

                    }
                } else {

                    return (
                        <Redirect to={{
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }} />
                    )
                }
            }
        } />
    )
}


export default PrivateRoute;