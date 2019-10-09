// Import
import React from 'react';

// Local import
import Header from 'src/containers/header';
import News from 'src/containers/news';
import League from 'src/containers/league';

// Code
class Home extends React.Component {

  // Lifecycle
  componentDidMount() {
    this.props.actions.loadHome();
  }

  render() {
    return (
      <div>
        <Header />
        <News />
        <League />
      </div>
    )
  }
}

// Export
export default Home;
