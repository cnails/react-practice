import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
    };
    h2 {
        font-size: 1.2rem;
        color: grey;
    };
`

const AppHeader = ({ liked, allPosts }) => {
    return (
        <Block>
            <h1>Cnails</h1>
            <h2>{allPosts} posts, {liked} is liked</h2>
        </Block>
    )
}

export default AppHeader;
