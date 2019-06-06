import { TaskItem } from "../containers/Task";

'../containers/Task';
import React from 'react';

export function taskReducer(state = {}, action) {
    switch (action.type) {
        case "CREATE_TASK": {
            return Object.assign(
                {},
                state,
                {
                    tasks: state.tasks.concat([<TaskItem title={state.input} key={state.index} taskIndex={state.index} taskIsDone={false}/>]),
                    input: '',
                    index: state.index + 1
                })
        }
        case "HANDLE_INPUT": {
            return Object.assign(
                {},
                state,
                {
                    input: action.payload.inputValue
                })
        }
        case "DELETE_TASK": {
            return state;
        }
        case "UPDATE_TASKS": {
            console.log("PAYLOAD: ", action.payload.key, action.payload.isDone);
            const updatedTasks = state.tasks.map((task, index) => {
                if (action.payload.key === index) task.props.taskIsDone = action.payload.isDone;
                return task;
            });
            console.log('ХРАНИЛИЩЕ: ', state.tasks);
            return Object.assign(
                {},
                state,
                {
                    tasks: updatedTasks,
                })
        }
        case "CALCULATE_PERCENT": {
            return Object.assign(
                {},
                state,
                {
                    percent: action.payload.total
                })
        }
        default: return state;
    }
}