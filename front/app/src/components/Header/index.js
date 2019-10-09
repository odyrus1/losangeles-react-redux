// Import
import React from 'react';

// Local import

// Code
class Header extends React.Component {

  // Lifecycle
  componentDidMount() {
    this.props.actions.loadHeader();
    this.checkLogin();
  }

  checkLogin = () => {
    if(localStorage.getItem('username')){
      let username = localStorage.getItem('username');
      let email = localStorage.getItem('email');
      let user = {'username': username, 'email': email};
      this.props.actions.checkLogin(user);
    }
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    this.props.history.push('/');
  }

  render() {

    const menus = this.props.menus ?
      this.props.menus.map((menu, index) => (<a href="/" key={index}>{menu.menu_name}</a>))
    :
      null

    const userConnected = this.props.user == 'guest' ?
      <div className="sign-container"><a href="/signup">Sign up</a><a href="/signin">Sing in</a></div>
    :
      <div className="sign-container"><a href="/account">Account</a><a href="" onClick={this.logout}>Log out</a> <span>Hello {this.props.username}!</span></div>

    return (
      <div>

        <div className="header-container">

          <div className="logo-container">
            <img src="images/1.jpg" alt="club-logo" />
          </div>

          <div className="menu-container">

            {menus}

            {userConnected}

          </div>

        </div>

      </div>
    )
  }
}

// Export
export default Header;
