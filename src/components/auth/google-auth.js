import React from "react";

import { connect } from 'react-redux';
import { signIn, signOut } from './../../actions/index'
class GoogleAuth extends React.Component {
    componentDidMount() {
        try {
            window.gapi.load('client:auth2', async () => {
                await window.gapi.client.init({
                    clientId: '390014617877-s3tupki48e1qvdf5q7l790o3t05ls1qk.apps.googleusercontent.com',
                    scope: 'email'
                })
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange.bind(this))
            });
        } catch (error) {
            console.log('in catch \n', error);
        }

    }
    onAuthChange(isSignedIn) {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }
    renderAuthButton() {
        if (this.props.auth) {
            return <button className="ui red google button" onClick={this.onSignOut.bind(this)}>
                <i className="google icon"></i>
                    Sign Out
                </button>
        }
        else {
            return <button className="ui red google button" onClick={this.onSignIn.bind(this)}>
                <i className="google icon"></i>
            SignIn with Google
        </button>
        }
    }

    onSignIn() {
        this.auth.signIn();
    }
    onSignOut() {
        this.auth.signOut();
    }
    render() {
        return this.renderAuthButton();
    }
}

const mapStateToProps = (state, ownProps) => {
    return { auth: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signOut, signIn })(GoogleAuth);