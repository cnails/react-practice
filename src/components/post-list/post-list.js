import React from 'react'

import PostListItem from '../post-list-item';

import styled from 'styled-components';

const AppList = styled.ul`
    margin-top: 50px;
    padding: 0;
    .list-group-item {
        padding: 20px 35px 10px 35px;
        margin-top: 10px;
    }
`

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    })

    return (
        <AppList>
            {elements}
        </AppList>
    )
}

export default PostList;