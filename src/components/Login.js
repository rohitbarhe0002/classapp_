// import React from 'react'
// import { useSelector } from 'react-redux';
// export default function Login() {

//     const {usersInfo} = useSelector(state => state.usersInfo.userInfo)

//     const {username,email,phone} = usersInfo;

//     console.log("tttttt",usersInfo);

//     return (
//         <div>
//             <p>hello</p>
//           <input type = "text" value={username} />
//           <input type = "email" value={email} />
//           <input type = "text" value={phone} />
//         </div>
//     )
// }
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getuser } from '../redux/actions';


 class Login extends Component {

    InputChange = (event) =>{
        ({...usersInfo,[event.taget.name]:event.target.value})
        }

        onSubmit = () =>{
            
        }
    render() {
       const usersInfo=this.props;
       
        console.log(usersInfo);
        const{username,email,phone,}=usersInfo;

      

        return (
            <div>
                 <input type = "text" value={username} onChange={this.InputChange} />
                <input type = "email" value={email} onChange={this.InputChange}/>
                <input type = "text" value={phone} onChange={this.InputChange}/>
                <input type = "submit" value="submit"  onSubmit={this.onSubmit}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      usersInfo: state.usersInfo.userInfo,
    }
  }
  const mapDispatchToProps = {
      getuser,

  }

  export default connect(mapStateToProps, mapDispatchToProps)(Login)