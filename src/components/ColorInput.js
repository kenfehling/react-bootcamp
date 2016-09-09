import { connect } from 'react-redux';
import * as Actions from '../actions/ColorActions';
import styles from './ColorInput.scss';

const ColorInput = ({color, setColor}) => (
    <div className={styles.container}>
        Color: #&nbsp;
        <input onChange={event => setColor(event.target.value)} value={color} />
    </div>
);

const mapStateToProps = state => ({
    color: state.color
});

const mapDispatchToProps = dispatch => ({
    setColor: color => dispatch(Actions.setColor(color))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorInput);