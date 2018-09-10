// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Header from 'src/components/Header';
import { loadHeader, checkLogin } from 'src/store/reducer';

// Code
const mapStateToProps = state => ({
  menus: state.menus,
  user: state.user,
  username: state.username,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadHeader, checkLogin }, dispatch),
});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Header);

// Export Default
export default withRouter(AppContainer);
