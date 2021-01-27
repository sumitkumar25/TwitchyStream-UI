import React from 'react';
import { connect } from "react-redux";
import { createStream } from "./../../actions/index";
import StreamForm from './stream-form';
class StreamCreate extends React.Component {
    onSubmit(event) {
        this.props.createStream(event);
    }

    render() {
        return (
            <div>
                <h3>Create a stream</h3>
                <StreamForm onSubmit={this.onSubmit.bind(this)}></StreamForm>
            </div>
        )
    }
}


export default connect(null, { createStream })(StreamCreate)