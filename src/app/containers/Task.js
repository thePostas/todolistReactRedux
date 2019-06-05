import React, {Component} from 'react';
import { connect } from "react-redux";

class Task extends Component {
    constructor(props) {
        super(props);
        this.checkBox = React.createRef();
        this.state = {
            taskIsDone: false
        }
    }
    render() {
        return (
            <div
                className={this.state.taskIsDone ? 'todolist__task-task todolist__task-task-done' : 'todolist__task-task'}
                key={this.state.index}
            >
                <p>
                    {this.props.title}
                </p>
                <span
                    // onClick={this.handleCloseTask}
                    className={'todolist__task-task-close'}>
                    +
                </span>
                <input
                    ref={this.checkBox}
                    onClick={() => this.props.onClick(this.checkBox, this)}
                    type={'checkbox'}
                    className={'todolist__task-task-checkbox'}/>
            </div>
        )
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: (ref, currentTask) => {
            if (ref.current.checked) {
                currentTask.setState({taskIsDone: true});
            } else {
                currentTask.setState({taskIsDone: false});
            }
            dispatch({
                type: "UPDATE_TASKS",
            });
        }
    };
};

export const TaskItem = connect(
    null,
    mapDispatchToProps
)(Task);