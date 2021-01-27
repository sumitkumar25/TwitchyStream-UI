import React from 'react';
import { connect } from "react-redux";

import { editStream, fetchStream } from './../../actions/index';
import StreamForm from './stream-form';
class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit(event) {
        this.props.editStream(event, this.props.match.params.id);
    }

    render() {
        const { title, description } = this.props.stream;
        return (
            <div>
                <h3>Edit a stream</h3>
                <StreamForm onSubmit={this.onSubmit.bind(this)} initialValues={{title, description}}></StreamForm>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit)
