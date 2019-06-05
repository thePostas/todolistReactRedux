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
                    tasks: state.tasks.concat([<TaskItem title={state.input} key={state.index} taskIsDone={false}/>]),
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
            const updatedTasks = state.tasks.map((task) => {
                return task;
            });
            return Object.assign(
                {},
                state,
                {
                    tasks: updatedTasks,
                })
        }
        default: return state;
    }
}