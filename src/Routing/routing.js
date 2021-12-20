import React, { Component } from 'react'
import Users from '../components/Users';
import Login from '../components/Login';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

export default class Routing extends Component {
    constructor (props){
        super(props);
        this.state={
                show:true,
        }
    }
    render() {
       
        return (


            <div>
                <Router>

                 

                <Route path ="/Login" component={Login}/>
                {/* <PrivateRoute path = "/Users" component={Users}/> */}
               <Route path="/Users" component={Users}/>
                </Router>
            </div>

        )
    }
}
