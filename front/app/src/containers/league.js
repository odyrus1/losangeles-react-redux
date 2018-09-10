// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import League from 'src/components/League';

// Code
const mapStateToProps = state => ({
  league: state.leagueTable,
});

const mapDispatchToProps = dispatch => ({

});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(League);

// Export Default
export default withRouter(AppContainer);
