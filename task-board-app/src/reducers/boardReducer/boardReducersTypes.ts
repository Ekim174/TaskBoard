import { TaskTypes } from "types/taskTypes";

export type State = {
  selectedTask: null | TaskTypes,
  currentTask: null | TaskTypes,
  selectedTaskStatus: string,
  taskList: [] | TaskTypes[],
}

export enum ActionKind {
  setSelectedTask = 'SET_SELECTED_TASK',
  setCurrentTask = 'SET_CURRENT_TASK',
  setSelectedStatus = 'SET_SELECTED_STATUS',
  setTaskList = 'SET_TASK_LIST',
}

export type  Action = {
  type: ActionKind,
  value: null | string | TaskTypes | TaskTypes[]
}

export type Reducer<State, Action> = (state: State, action: Action) => State;