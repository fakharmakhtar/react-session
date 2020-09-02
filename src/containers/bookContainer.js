import { connect } from 'react-redux';
import Books from '../components/Books';

function mapStateToProps(state) {
    return {
        books: state.bookReducer.books
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Books);