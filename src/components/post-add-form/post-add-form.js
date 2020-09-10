import React, { Component } from 'react'

import styled from 'styled-components';

const BottomPanel = styled.form`
    margin-top: 20px;
    display: flex;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        const { text } = this.state;
        return (
            <BottomPanel
                onSubmit={ this.onSubmit }>
                <input
                    type="text"
                    placeholder="Type something"
                    className="form-control new-post-label"
                    onChange={ this.onValueChange }
                    value={ text }
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Append
                    </button>
            </BottomPanel>
        )
    }
}
