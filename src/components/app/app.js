import React, { Component } from 'react'

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
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'First post', important: true, id: 1},
                {label: 'Second post', important: false, id: 2},
                {label: 'Third post', important: false, id: 3},
            ]
        }
        this.onDelete = this.deleteItem.bind(this);
    }
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }
    render() {
        return (
            <Block>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                    <PostList
                        posts={ this.state.data }
                        onDelete={ this.deleteItem }/>
                    <PostAddForm/>
            </Block>
        )
    }
}
