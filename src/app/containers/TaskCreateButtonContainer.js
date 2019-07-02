import React from 'react';
import TaskCreateButton from "../components/TaskCreateButton";
import { connect } from "react-redux";
import { TaskItem } from "../containers/Task";

const mapStateToProps = function(state) {
    return {
        value: state.input,
        title: state.title,
        index: state.index
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: function(event) {
            event.preventDefault();
            if (this.props.value) {
                dispatch({
                    type: "CREATE_TASK",
                    payload: {
                        task: <TaskItem title={this.props.value} key={this.props.index} taskIndex={this.props.index} taskIsDone={false}/>
                    }
                });
            }

        }
    };
};

export const CreateButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskCreateButton);