import React, {Component} from 'react';

export default class TaskCreateButton extends Component{
    constructor(props) {
        super(props);
        this.value = this.props.value;
    }
    render = () => {
        return (
            <button
                className={'todolist__task-generator-button'}
                onClick={() => this.props.onClick(event, this.props.value)}
            >
                +
            </button>
        )
    }
}