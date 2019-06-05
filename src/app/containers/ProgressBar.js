import React, {Component} from 'react';
import {connect} from "react-redux";

class ProgressBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            percent: 0,
            tasks: []
        }
    }

    componentDidUpdate() {
        let doneTasks = 0;
        this.props.tasks.map((currentTask) => {
           currentTask.props.taskIsDone ? doneTasks+=1 : doneTasks;
        });
        console.log(this.props.tasks.length, doneTasks);
        // this.setState({
        //     percent:
        // })
    }

    render = () => {
        console.log('UPDATED');
        return (
            <div
                className={'todolist__progress-bar'}>
                <p
                    className={'todolist__progress-bar-percent'}>
                    {this.state.percent}%
                </p>
                <div
                    className={'todolist__progress-bar-done'}
                    style={{width: this.state.percent + '%'}}
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

    };
};

export const ProgressBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgressBar);