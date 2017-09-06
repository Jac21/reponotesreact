import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

const styles = {
    sidebar: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: 270 + 'px',
        height: 100 + '%',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        background: 'white',
    }
};

class Navbar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <aside style={styles.sidebar}>

                <form id="search-container" className="search">
                    <input id="search-input" className="search-input" type="search" placeholder="Search Documentation" />
                    <ul id="search-results" className="search-results"></ul>
                </form>
                <nav className="navigation">
                    <ul>
                        <li className="">
                            <a href="/">Home</a>
                        </li>
                        <li className="active">
                            <a href="/docs/demo/">Demo</a>
                            <ul>
                                <li className="">
                                    <a href="#colors">Colors</a>
                                </li>
                                <li className="">
                                    <a href="#typography">Typography</a>
                                </li>
                                <li className="">
                                    <a href="#form">Form</a>
                                </li>
                                <li className="">
                                    <a href="#elements">Elements</a>
                                </li>

                            </ul>
                        </li>
                        <li className="">
                            <a href="/docs/getting-started/">Getting Started</a>
                            <ul>
                                <li className="">
                                    <a href="#quick-start">Quick start</a>
                                </li>
                                <li className="">
                                    <a href="#structure">Structure</a>
                                </li>
                                <li className="">
                                    <a href="#usage">Usage</a>
                                </li>
                                <li className="">
                                    <a href="#support">Support</a>
                                </li>
                                <li className="">
                                    <a href="#accessibility">Accessibility</a>
                                </li>
                                <li className="">
                                    <a href="#contributors">Contributors</a>
                                </li>
                                <li className="">
                                    <a href="#licence">Licence</a>
                                </li>

                            </ul>
                        </li>
                        <li className="">
                            <a href="/docs/globals/">Globals</a>
                            <ul>
                                <li className="">
                                    <a href="#base">Base</a>
                                </li>
                                <li className="">
                                    <a href="#sizes">Sizes</a>
                                </li>
                                <li className="">
                                    <a href="#typography">Typography</a>
                                </li>
                                <li className="">
                                    <a href="#colors">Colors</a>
                                </li>

                            </ul>
                        </li>
                        <li className="">
                            <a href="/docs/base/">Base</a>
                            <ul>
                                <li className="">
                                    <a href="#reset">Reset</a>
                                </li>
                                <li className="">
                                    <a href="#body">Body</a>
                                </li>
                                <li className="">
                                    <a href="#container">Container</a>
                                </li>
                                <li className="">
                                    <a href="#gutter">Gutter</a>
                                </li>
                                <li className="">
                                    <a href="#media-queries">Media Queries</a>
                                </li>
                                <li className="">
                                    <a href="#print">Print</a>
                                </li>

                            </ul>
                        </li>
                        <li className="">
                            <a href="/docs/typography/">Typography</a>
                            <ul>
                                <li className="">
                                    <a href="#headings">Headings</a>
                                </li>
                                <li className="">
                                    <a href="#display-title">Display Title</a>
                                </li>
                                <li className="">
                                    <a href="#big">Big</a>
                                </li>
                                <li className="">
                                    <a href="#small-caps">Small Caps</a>
                                </li>
                                <li className="">
                                    <a href="#lead">Lead</a>
                                </li>
                                <li className="">
                                    <a href="#paragraph">Paragraph</a>
                                </li>
                                <li className="">
                                    <a href="#link">Link</a>
                                </li>
                                <li className="">
                                    <a href="#strong">Strong</a>
                                </li>
                                <li className="">
                                    <a href="#emphasis">Emphasis</a>
                                </li>
                                <li className="">
                                    <a href="#horizontal-rule">Horizontal Rule</a>
                                </li>
                                <li className="">
                                    <a href="#blockquote">Blockquote</a>
                                </li>
                                <li className="">
                                    <a href="#cite">Cite</a>
                                </li>
                                <li className="">
                                    <a href="#list">List</a>
                                </li>
                                <li className="">
                                    <a href="#definition-list">Definition List</a>
                                </li>
                                <li className="">
                                    <a href="#code">Code</a>
                                </li>
                                <li className="">
                                    <a href="#pre">Pre</a>
                                </li>
                                <li className="">
                                    <a href="#kbd">Kbd</a>
                                </li>
                                <li className="">
                                    <a href="#mark">Mark</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}

export default Navbar;