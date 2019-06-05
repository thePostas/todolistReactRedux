import React, {Component} from 'react';
import {connect} from "react-redux";

class ProgressBar extends Component{
    render = () => {
        console.log('UPDATED');
        return (
            <div
                className={'todolist__progress-bar'}>
                <p
                    className={'todolist__progress-bar-percent'}>
                    {/*{this.state.percent}%*/}
                </p>
                <div
                    className={'todolist__progress-bar-done'}
                    // style={{width: this.state.percent + '%'}}
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