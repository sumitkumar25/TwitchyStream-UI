import React from 'react';
import { connect } from "react-redux";

import { editStream } from './../../actions/index';
class StreamEdit extends React.Component {
    render() {
        return (
            <div>
                StreamEdit
            </div>
        );
    }
}
export default connect(null, { editStream })(StreamEdit)
