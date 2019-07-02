export function taskReducer(state = {}, action) {
    switch (action.type) {
        case "CREATE_TASK": {
            return Object.assign(
                {},
                state,
                {
                    tasks: state.tasks.concat([action.payload.task]),
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
            let updatedTasks = state.tasks.filter((task) => {
                    return action.payload.targetIndex !== task.props.taskIndex ? task : null
            });
            return Object.assign(
                {},
                state,
                {
                    tasks: updatedTasks,
                })
        }
        case "UPDATE_TASKS": {
            const updatedTasks = state.tasks.map((task) => {
                if (action.payload.key === task.props.taskIndex) task.props.taskIsDone = action.payload.isDone;
                return task;
            });
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