import React, { Component } from 'react';
import { connect } from "react-redux";

class ProgressBar extends Component{
    constructor() {
        super();
    }

    componentDidUpdate() {
        this.props.calculatePercent(this)
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

const mapDispatchToProps = function(dispatch) {
    return {
        calculatePercent: (bar) => {
            bar.props.doneTasks = 0;
            bar.props.tasks.map((currentTask) => {
            currentTask.props.taskIsDone ? bar.props.doneTasks+=1 : bar.props.doneTasks;
        });
        console.log(bar.props.tasks.length, bar.props.doneTasks);
        const percent = Math.floor(bar.props.doneTasks / bar.props.tasks.length * 100);
        dispatch({
            type: "CALCULATE_PERCENT",
            payload: {
                total: percent
            }
        });
    }
    };
};

export const ProgressBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgressBar);