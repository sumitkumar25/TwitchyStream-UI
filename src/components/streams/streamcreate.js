import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { createStream } from "./../../actions/index";
class StreamCreate extends React.Component {
    onSubmit(event) {
        this.props.createStream(event);
    }
    renderError({ error, touched }) {
        if (error && touched) {
            return (<div className="ui error message">
                <div className="header">{error}</div>
            </div>)
        } else {
            return null;
        }
    }
    renderInput({ input, label, meta }) {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" component={this.renderInput.bind(this)} label="Enter Title"></Field>
                <Field name="description" component={this.renderInput.bind(this)} label="Enter Description"></Field>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validateForm = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'Title required';
    }
    if (!formValues.description) {
        errors.description = 'Description required';
    }
    return errors
}

const formWrapper = reduxForm({
    form: 'streamCreate',
    validate: validateForm
})(StreamCreate);

export default connect(null, { createStream })(formWrapper)