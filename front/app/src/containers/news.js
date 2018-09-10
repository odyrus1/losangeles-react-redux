// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import News from 'src/components/News';

// Code
const mapStateToProps = state => ({
  news: state.news,
});

const mapDispatchToProps = dispatch => ({

});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(News);

// Export Default
export default withRouter(AppContainer);
