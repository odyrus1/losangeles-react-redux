// Import
import React from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

// Local import
import Header from 'src/containers/header';

// Code
class Signin extends React.Component {

  handleSignin = e => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    axios.post('http://localhost/losangeles-react-php-sass/back/signin.php', {
        email: email,
        password: password
      })
      .then(function (response) {
        if(response){
          this.props.actions.login(response);
          // console.log(response);
          localStorage.setItem('username', response.data.user.user_login);
          localStorage.setItem('email', response.data.user.user_email);
          this.props.history.push('/account');
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <div>
        <Header />

        <div className="signin-container">
          <form action="" className="signin-form">

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" /><br />

            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" /><br />

            <input type="submit" value="Sign in" onClick={this.handleSignin} />
            <p id="succesMessage"></p>
            <p id="errorMessage"></p>
          </form>
        </div>

      </div>
    )
  }
}

// Export
export default Signin;
