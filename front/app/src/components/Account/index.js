// Import
import React from 'react';

// Local import
import Header from 'src/containers/header';

// Code
function Account(props){

    const userConnected = props.user !== 'guest' ?
      <div><p>Username: {props.username}</p><p>Email: {props.email}</p></div>
    :
      <p>You dont have an account on your website yet! If you want to sign up, you can do it by clicking <a href="">here</a></p>

    return (
      <div>
        <Header />

        {userConnected}

      </div>
    )
}

// Export
export default Account;
