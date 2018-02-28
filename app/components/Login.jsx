import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import GitHubIcon from 'react-icons/lib/fa/github';

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with GitHub account below.
              </p>
              <button className="button" onClick={this.onLogin}>Login With GitHub <GitHubIcon /> </button>
            </div>
            <div className="callout">
              <h6><strong>About this App</strong></h6>
              <p>
                This app using React Redux framework, and Fundation responsive front-end framework.  Additionally, using Firebase cloud-hosted database.
              </p>
              <p><code>React</code> <code>Redux</code> <code>Fundation</code> <code>Firebase</code></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
