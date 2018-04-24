import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pantry from '../components/Pantry';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pantry);
