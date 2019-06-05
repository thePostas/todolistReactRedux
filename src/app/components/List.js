import React, {Component} from "react";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render = () => {
        console.log(this.props.tasks);
        return (
            <div
                className={'todolist__task-list'}
            >
                {this.props.tasks}
            </div>
        )
    }
}