import React, { Component } from 'react'
import './post-status-filter.js';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'},
        ]
    }

    render() {
        const { onFilterSelect } = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const cls = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${cls}`}
                    onClick={() => onFilterSelect(name)}>
                        {label}
                        </button>
            )
        })
        return (
            <div className="btn-group">
                { buttons }
            </div>
        )
    }
}
