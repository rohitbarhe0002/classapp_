import React, { Component } from 'react'
import Users from '../components/Users';
import Login from '../components/Login';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

export default class Routing extends Component {
   
    render() {
       
        return (
            <div>
                <Router>
                <Route exact path = "/users" component={Users}/>
                {/* <Route path ="/login" component={Login}/> */}
                
                </Router>
            </div>

        )
    }
}
