import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GroceryLists from '../components/GroceryLists';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryLists);
