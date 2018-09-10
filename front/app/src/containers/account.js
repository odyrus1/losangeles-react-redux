// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Account from 'src/components/Account';

// Code
const mapStateToProps = state => ({
  user: state.user,
  email: state.email,
  username: state.username,
});

const mapDispatchToProps = dispatch => ({

});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Account);

// Export Default
export default withRouter(AppContainer);
