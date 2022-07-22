import {Action, ActionKind, State} from "./boardReducersTypes";

export const boardReducer = (state: State, action: Action) :State => {
  switch (action.type) {
    case ActionKind.setSelectedTask:
      return {...state, selectedTask: action.value} as State;
    case ActionKind.setCurrentTask:
      return {...state, currentTask: action.value} as State;
    case ActionKind.setSelectedStatus:
      return {...state, selectedTaskStatus: action.value} as State;
    case ActionKind.setTaskList:
      return {...state, taskList: action.value} as State;
  }
}