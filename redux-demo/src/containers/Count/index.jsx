import { connect } from 'react-redux';
import Count from '../../components/Count';
import { incrementAction, decrementAction, incrementAsync } from '../../redux/actions/count';

const mapStateToProps = (state) => ({ count: state });
const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(incrementAction(value)),
  decrement: (value) => dispatch(decrementAction(value)),
  incAsync: (value, time) => dispatch(incrementAsync(value, time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
