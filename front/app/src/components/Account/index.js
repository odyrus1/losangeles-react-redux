// Import
import React from 'react';

// Local import
import Header from 'src/containers/header';

// Code
class Account extends React.Component {

  render() {
    return (
      <div>
        <Header />

        {
          this.props.user != 'guest' ?
            <div>
              <p>Username: {this.props.username}</p>
              <p>Email: {this.props.email}</p>
            </div>
          :
            <p>You dont have an account on your website yet! If you want to sign up, you can do it by clicking <a href="">here</a></p>
        }

      </div>
    )
  }
}

// Export
export default Account;
