import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({});

class UsernameForm extends Component {
    state = {
        disabled: true
    };

    render() {
        const { classes } = this.props;

        return (
            <form>
                <div className="field">
                    <label htmlFor="form-github-username">GitHub Username</label>
                    <input type="text" id="form-github-username" placeholder="Handle" />
                </div>
                <div className="field">
                    <button type="submit" className="button">Get and Show Repository Data</button>
                    <button className="button" disabled={this.state.disabled}>Export Notes</button>
                </div>
            </form>
        );
    }
}

export default UsernameForm;