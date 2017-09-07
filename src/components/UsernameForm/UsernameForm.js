import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

class UsernameForm extends Component {
    handleClick() {
        console.log("hello there");
    }

    render() {
        // const { classes } = this.props;

        return (
            <form>
                <div className="field">
                    <input type="text" id="form-github-username" placeholder="Enter your GitHub Username..." />
                </div>
                <div className="field">
                    <button type="submit" className="button"
                        onClick={this.handleClick}>Get and Show Repository Data</button>
                </div>
            </form>
        );
    }
}

export default UsernameForm;