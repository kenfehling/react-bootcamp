import { connect } from 'react-redux';
import styles from './ColorDisplay.scss';

const ColorDisplay = ({color}) => (
    <div className={styles.container} style={{backgroundColor: '#' + color}}></div>
);

const mapStateToProps = state => ({
    color: state.color
});

export default connect(
    mapStateToProps,
    state => ({})  // function that returns empty object
)(ColorDisplay);