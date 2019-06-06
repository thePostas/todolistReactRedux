import React, {Component} from 'react';
import { connect } from "react-redux";

class Task extends Component {
    constructor(props) {
        super(props);
        this.checkBox = React.createRef();
        this.state = {
            taskIsDone: false
        };
    }

    componentDidMount() {

    }

    componentWillUpdate() {

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
                    onClick={() => this.props.handleDeleteTask(this.props.taskIndex)}
                    className={'todolist__task-task-close'}>
                    +
                </span>
                <input
                    ref={this.checkBox}
                    onClick={() => this.props.markAsDone(this.checkBox, this)}
                    type={'checkbox'}
                    className={'todolist__task-task-checkbox'}/>
            </div>
        )
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        markAsDone: (ref, currentTask) => {
                currentTask.setState({taskIsDone: ref.current.checked},() => {
                    dispatch({
                        type: "UPDATE_TASKS",
                        payload: {
                            key: currentTask.props.taskIndex,
                            isDone: currentTask.state.taskIsDone,
                        }
                    });
                });
        },
        handleDeleteTask: (taskForCloseIndex) => {
            dispatch({
                type: "DELETE_TASK",
                payload: {
                    targetIndex: taskForCloseIndex
                }
            })
        }
    };

};

export const TaskItem = connect(
    null,
    mapDispatchToProps
)(Task);