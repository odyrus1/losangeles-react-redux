// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Signin from 'src/components/Signin';
import { login } from 'src/store/reducer';

// Code
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ login }, dispatch),
});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Signin);

// Export Default
export default withRouter(AppContainer);
