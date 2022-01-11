import { connect } from 'react-redux';
import Count from '../../components/Count';
import { incrementAction, decrementAction, incrementAsync } from '../../redux/actions/count';

export default connect(
  (state) => ({ state }),
  { incrementAction, decrementAction, incrementAsync }, // 对象形式自动分发
)(Count);
