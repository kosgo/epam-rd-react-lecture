import { connect } from 'react-redux';
import {Homepage} from './component';
import { addNew } from './actions';

const mapStateToProps = (state) => ({
    componentData: state.homepageReducer.data
});

const mapDispatchToProps = {
    addNewDispatch: addNew
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default withConnect(Homepage);
