// Import
import React from 'react';
import axios from 'axios';

// Local import
import Header from 'src/containers/header';

// Code
class Signup extends React.Component {

  // Recovering user informations
  handleSubmit = e => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    this.testInformation(username, email, password, confirmPassword);
  }

  // Testing the informations (username only numbers and letters, email right format, passwords match)
  testInformation = (username, email, password, confirmPassword) => {
    let validation = 0;
    this.validateUsername(username) == true ? validation++ : null;
    this.validateEmail(email) == true ? validation++ : null;
    password === confirmPassword ? validation++ : null;
    validation === 3 ? this.sendInformation(username, email, password) : null;
  }
  // Username validation
  validateUsername = username => {
    let letterNumber = /^[0-9a-zA-Z]+$/;
    return letterNumber.test(username);
  }
  // Email validation
  validateEmail = email => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Sending the informations to the db
  sendInformation = (username, email, password) => {
    axios.post('http://localhost/losangeles-react-php-sass/back/signup.php', {
        username: username,
        email: email,
        password: password
      })
      .then(function (response) {
        let succesMessage = document.getElementById('succesMessage');
        let errorMessage = document.getElementById('errorMessage');
        response.data == true ? succesMessage.innerHTML = 'User created' : errorMessage.innerHTML = 'This email is already used for another account';
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>

      <Header />

      <div className="signup-container">
        <form action="" className="signup-form">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" /><br />

          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" /><br />

          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" /><br />

          <label htmlFor="confirmPassword">Confirm password: </label>
          <input type="password" name="confirmPassword" id="confirmPassword" /><br /><br />

          <input type="submit" value="Sign up" onClick={this.handleSubmit} />
          <p id="succesMessage"></p>
          <p id="errorMessage"></p>
        </form>
      </div>

      </div>
    )
  }
}

// Export
export default Signup;
