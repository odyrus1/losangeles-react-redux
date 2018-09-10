// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Home from 'src/components/Home';
import { loadHome } from 'src/store/reducer';

// Code
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadHome }, dispatch),
});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Home);

// Export Default
export default withRouter(AppContainer);
