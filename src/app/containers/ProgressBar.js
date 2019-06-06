import React, {Component} from 'react';
import {connect} from "react-redux";

class ProgressBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.props.percent = 0;
    }

    componentDidUpdate() {
        console.log(this.props);
        this.props.doneTasks = 0;
        this.props.tasks.map((currentTask) => {
           currentTask.props.taskIsDone ? this.props.doneTasks+=1 : this.props.doneTasks;
        });
        console.log(this.props.tasks.length, this.props.doneTasks);
        this.props.percent = Math.floor(this.props.doneTasks / this.props.tasks.length * 100);
        console.log(this.props.percent);
    }

    render = () => {
        console.log('UPDATED');
        return (
            <div
                className={'todolist__progress-bar'}>
                <p
                    className={'todolist__progress-bar-percent'}>
                    {this.props.percent}%
                </p>
                <div
                    className={'todolist__progress-bar-done'}
                    style={{width: this.props.percent + '%'}}
                />
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        tasks: state.tasks
    };
};

export const ProgressBarContainer = connect(
    mapStateToProps
)(ProgressBar);