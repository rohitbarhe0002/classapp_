import { Button } from 'bootstrap';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { requestUsers } from '../redux/thunk/request'

class Users extends Component {


  componentDidMount() {
    this.props.requestUsers();


  }

  handleClick =()=>{
    <Redirect to='/Login'/>
}
  render(

  ) {
    const {Users1} = this.props;
    console.log("jjjj", Users1);
    console.log('hello ')
    
    return (
      
      <div>
        <button onClick={this.handleClick}>Adduser</button>
        <h1>hello</h1>
        { Users1.map((i) => (
            <ul>
              <li>{i.name}</li>
              <li>{i.email}</li>
              <li>{i.phone}</li> 
</ul>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Users1: state.users.user,
  }
}
const mapDispatchToProps = {
  requestUsers,

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

