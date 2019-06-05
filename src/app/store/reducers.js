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
                    tasks: [...state.tasks, <TaskItem title={state.input}/>],
                    input: ''
                })
        }
        case "HANDLE_INPUT": {
            return Object.assign(
                {},
                state,
                {input: action.payload.inputValue})
        }
        case "DELETE_TASK": {
            return state;
        }
        case "GET_STATE": {
            return state;
        }
        default: return state;
    }
}