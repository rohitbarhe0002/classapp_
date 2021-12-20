import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



// const PrivateRoute = ({component: Component, ...rest}) => {
//     const show = useSelector(state => state.shows.show)
//     // return (

//     //     // Show the component only when the user is logged in
//     //     // Otherwise, redirect the user to /signin page
//     //     // <Route {...rest} render={props => (
//     //     //     show ?
//     //     //         <Component {...props} />
//     //     //     : <Redirect to="/Login" />
//     //     // )} />
//     // );
// };



export const PrivateRoute = () => {
    const show=false
  
    return (
        <div>
            {
                show ? <Link to="/Users">users</Link>
                :
                 <Link >Login</Link>
            }
        </div>
    )
}

export default PrivateRoute;