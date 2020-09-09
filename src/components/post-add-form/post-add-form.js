import React from 'react'

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

const PostAddForm = () => {
    return (
        <BottomPanel>
            <input
                type="text"
                placeholder="Type something"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Append</button>
        </BottomPanel>
    )
}

export default PostAddForm;
