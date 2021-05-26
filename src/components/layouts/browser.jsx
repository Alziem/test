import React, {Fragment } from "react";
import { Switch } from "react-router-dom"
import { connect } from "react-redux";
import {AuthRoute} from '../../router/authRoute'
import PrivateRoute from '../../router/privateroute'

/// Handling Components


import admin from '../admin/admin';
import Login from '../admin/login/login'

const Browser = (props) => {

    return (
        <Fragment>
            <Switch>
                <PrivateRoute {...props} path="/dashboard" component={admin} />
                <AuthRoute path="/" component={Login} />
            </Switch>
        </Fragment>
    );
}

const mapStateToProps = state => state.authorization;

export default connect(mapStateToProps,null)(Browser);