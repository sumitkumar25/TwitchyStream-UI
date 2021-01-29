import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../common/modal';
import history from './../../history';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onDismiss = () => { history.push('/') };
    renderActions =
        (<React.Fragment>
            <button className="ui  button negative" onClick={this.deleteStream.bind(this)}>Delete</button>
            <button className="ui  button" onClick={this.onDismiss}>Cancel</button>
        </React.Fragment>
        )
    deleteStream() {
        this.props.deleteStream(this.props.match.params.id)
    }
    renderContent() {
        if (this.props.stream) {
            return `Are you sure you want to delete stream with title :${this.props.stream.title}`

        } else {
            return "Are you sure you want to delete this stream"
        }
    }
    render() {
        return <Modal
            title="Delete Stream"
            content={this.renderContent()}
            actions={this.renderActions}
            onDismiss={this.onDismiss}
        ></Modal>
    }
}
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);