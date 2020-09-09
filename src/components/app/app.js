import React from 'react'

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import styled from 'styled-components';

const Block = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const App = () => {
    const data = [
        {label: 'First post', important: true, id: 1},
        {label: 'Second post', important: false, id: 2},
        {label: 'Third post', important: false, id: 3},
    ];
    return (
        <Block>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
                <PostList posts={data} />
                <PostAddForm/>
        </Block>
    )
}

export default App;
