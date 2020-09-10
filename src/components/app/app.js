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
                {label: 'First post', important: true, like: false, id: 1},
                {label: 'Second post', important: false, like: false, id: 2},
                {label: 'Third post', important: false, like: false, id: 3},
            ],
            term: '',
            filter: 'all'
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) >= 0;
        })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
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

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArray
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArray
            }
        });
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const { data, term, filter } = this.state;
        
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <Block>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={ this.onUpdateSearch }/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={ this.onFilterSelect }/>
                </div>
                    <PostList
                        posts={ visiblePosts }
                        onDelete={ this.deleteItem }
                        onToggleImportant={ this.onToggleImportant }
                        onToggleLiked={ this.onToggleLiked }/>
                    <PostAddForm
                        onAdd={ this.addItem }/>
            </Block>
        )
    }
}
