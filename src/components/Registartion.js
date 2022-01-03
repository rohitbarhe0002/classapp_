import React from 'react'
import { useSelector } from 'react-redux';
export default function Registration () {

    const {usersInfo} = useSelector(state => state.usersInfo.userInfo)

    const {username,email,phone} = usersInfo;

    console.log("tttttt",usersInfo);

    return (
        <div>
            <p>hello</p>
          <input type = "text" value={username} />
          <input type = "email" value={email} />
          <input type = "text" value={phone} />
        </div>
    )
}
