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
                <div class="field">
                    <label for="form-simple-email">GitHub Username</label>
                    <input type="text" id="form-github-username" placeholder="Handle" />
                </div>
                <div class="field">
                    <button type="submit" class="button">Get and Show Repository Data</button>
                    <button class="button" disabled={this.state.disabled}>Export Notes</button>
                </div>
            </form>
        );
    }
}

UsernameForm.propTypes = {
    classes: PropTypes.object.isRequired
}

export default UsernameForm;